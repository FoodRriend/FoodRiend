import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import { Text, View, StyleSheet, Image, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useAppSelector, useAppDispatch } from '../redux/hooks';

import { launchCamera, launchImageLibrary, ImagePickerResponse } from 'react-native-image-picker';

import { ProfilePhotoModal } from '../shared/modal';
import {
  showProfilePhotoModal,
  changeModalProfileUri,
  isdefaultImageState,
} from '../redux/modalSlice';
import {
  addFoodEditStyle,
  addfoodEditStateStyle,
  addFoodEditType,
  addFoodEditStateType,
  addFoodStyle,
  addFoodType,
} from '../redux/userSlice';

const MyEditScreen: React.FC = () => {
  const navigation = useNavigation();

  const dispatch = useAppDispatch();
  const {
    foodStyle,
    foodType,
    nickname,
    name,
    foodEditStyle,
    foodEditStateStyle,
    foodEditStateType,
    foodEditType,
  } = useAppSelector((state) => state.users);
  const { profileUri, defaultImageState } = useAppSelector((state) => state.modals);

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '프로필 수정',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        ...Platform.select({
          ios: {
            fontWeight: '600',
            fontSize: 17,
          },
          android: {
            fontWeight: 'bold',
            fontSize: 15,
          },
        }),
      },
      headerStyle: {
        ...Platform.select({
          android: {
            borderWidth: 0.8,
          },
        }),
        borderColor: '#dfe2e5',
      },
      headerLeft: () => (
        <TouchableOpacity style={styles.BackIcon} onPress={() => onBackPress()}>
          <Image source={require(`../assets/icons/Left.png`)}></Image>
        </TouchableOpacity>
      ),
    });
  };

  headerStyle();

  const HandleFavFoodImage = (name: any) => {
    let FavFoodImagePath;
    switch (name) {
      case '술':
        FavFoodImagePath = require('../assets/images/onBoading/favFood/grapes.png');
        break;
      case '커피':
        FavFoodImagePath = require(`../assets/images/onBoading/favFood/coffee.png`);
        break;
      case '베이커리/디저트':
        FavFoodImagePath = require('../assets/images/onBoading/favFood/pudding.png');
        break;
      case '해산물':
        FavFoodImagePath = require('../assets/images/onBoading/favFood/octopus.png');
        break;
      case '치킨':
        FavFoodImagePath = require('../assets/images/onBoading/favFood/friedChicken.png');
        break;
      case '피자':
        FavFoodImagePath = require('../assets/images/onBoading/favFood/pizza.png');
        break;
      case '면':
        FavFoodImagePath = require('../assets/images/onBoading/favFood/noodles.png');
        break;
      case '분식':
        FavFoodImagePath = require('../assets/images/onBoading/favFood/tteokbokki.png');
        break;
      case '샐러드':
        FavFoodImagePath = require('../assets/images/onBoading/favFood/salad.png');
        break;
      case '국밥':
        FavFoodImagePath = require('../assets/images/onBoading/favFood/riceSoup.png');
        break;
      case '찌개/탕':
        FavFoodImagePath = require('../assets/images/onBoading/favFood/stew.png');
        break;
      case '고기':
        FavFoodImagePath = require('../assets/images/onBoading/favFood/chop.png');
        break;
    }

    return <Image source={FavFoodImagePath} style={styles.myEditItemBoxImage} />;
  };

  const HandleFoodStyleImage = (name: any) => {
    let FoodStyleImagePath;
    switch (name) {
      case '지역 맛집 탐험가':
        FoodStyleImagePath = require('../assets/images/onBoading/addStyle/addStyleImage0.png');
        break;
      case '새로운 음식 모험가':
        FoodStyleImagePath = require(`../assets/images/onBoading/addStyle/addStyleImage4.png`);
        break;
      case '분야별 맛집 전문가':
        FoodStyleImagePath = require('../assets/images/onBoading/addStyle/addStyleImage1.png');
        break;
      case '숨은 맛집 개척자':
        FoodStyleImagePath = require('../assets/images/onBoading/addStyle/addStyleImage2.png');
        break;
      case '분위기 맛집 예술가':
        FoodStyleImagePath = require('../assets/images/onBoading/addStyle/addStyleImage3.png');
        break;
    }

    return <Image source={FoodStyleImagePath} style={styles.myEditItemBoxImage} />;
  };

  const [avatar, setAvatar] = useState<string | undefined>(profileUri);
  const [defaultImage, setDefalutImage] = useState(defaultImageState);

  const onPress = () => {
    if (avatar) {
      dispatch(changeModalProfileUri(avatar));
      dispatch(isdefaultImageState(defaultImage));
    }
    if (foodEditStateStyle && foodEditStyle) {
      dispatch(addFoodStyle(foodEditStyle));
    }
    if (foodEditStateType && foodEditType) {
      dispatch(addFoodType(foodEditType));
    }
    dispatch(addFoodEditStyle(''));
    dispatch(addfoodEditStateStyle(false));
    dispatch(addFoodEditType(''));
    dispatch(addFoodEditStateType(false));
    navigation.navigate('MyPage');
  };

  const onBackPress = () => {
    dispatch(addFoodEditStyle(''));
    dispatch(addfoodEditStateStyle(false));
    dispatch(addFoodEditType(''));
    dispatch(addFoodEditStateType(false));
    navigation.navigate('MyPage');
  };

  const openModal = () => {
    dispatch(showProfilePhotoModal(true));
  };

  const defaultImageHandler = () => {
    setDefalutImage(false);
    dispatch(showProfilePhotoModal(false));
  };

  const openCamara = () => {
    let options: any = {
      storageOption: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
      saveToPhotos: true,
    };
    launchCamera(options, (response: ImagePickerResponse) => {
      if (response.assets !== undefined) {
        let uri = response.assets[0].uri;
        if (uri !== undefined) {
          setAvatar(uri);
          setDefalutImage(true);
          dispatch(showProfilePhotoModal(false));
        }
      }
    });
  };

  const openImageLibrary = () => {
    let options: any = {
      storageOption: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
      saveToPhotos: true,
    };
    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.assets !== undefined) {
        let uri = response.assets[0].uri;
        if (uri !== undefined) {
          setAvatar(uri);
          setDefalutImage(true);
          dispatch(showProfilePhotoModal(false));
        }
      }
    });
  };

  return (
    <Wrapper>
      <ProfilePhotoModal
        openCamara={openCamara}
        openImageLibrary={openImageLibrary}
        defaultImageHandler={defaultImageHandler}
      />
      <TouchableOpacity onPress={() => openModal()}>
        {defaultImage ? (
          <Image source={{ uri: avatar }} style={styles.myEditProfileImage} />
        ) : (
          <Image
            source={require(`../assets/icons/defaultProfile.png`)}
            style={styles.myEditProfileImage}
          />
        )}
      </TouchableOpacity>

      <Text style={styles.myEditName}>{name}</Text>
      <Text style={styles.myEditNickname}>{nickname}</Text>
      <MyEditInfoStyleContainer>
        <View style={styles.myEditItemTitle}>
          <Text style={styles.myEditItemTitleText}>나의 맛집 스타일</Text>
          <TouchableOpacity onPress={() => navigation.navigate('EditStyle')}>
            <Image
              source={require(`../assets/icons/click.png`)}
              style={styles.myEditItemTitleBtn}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.myEditItemBox}>
          {foodEditStateStyle ? (
            <Text style={styles.myEditItemBoxText}>{foodEditStyle}</Text>
          ) : (
            <Text style={styles.myEditItemBoxText}>{foodStyle}</Text>
          )}
          {foodEditStateStyle && HandleFoodStyleImage(foodEditStyle)}
          {!foodEditStateStyle && HandleFoodStyleImage(foodStyle)}
        </View>
      </MyEditInfoStyleContainer>
      <MyEditInfoFoodContainer>
        <View style={styles.myEditItemTitle}>
          <Text style={styles.myEditItemTitleText}>나의 음식 취향</Text>
          <TouchableOpacity onPress={() => navigation.navigate('EditFavFood')}>
            <Image
              source={require(`../assets/icons/click.png`)}
              style={styles.myEditItemTitleBtn}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.myEditItemBox}>
          {foodEditStateType ? (
            <Text style={styles.myEditItemBoxText}>{foodEditType}</Text>
          ) : (
            <Text style={styles.myEditItemBoxText}>{foodType}</Text>
          )}
          {foodEditStateType && HandleFavFoodImage(foodEditType)}
          {!foodEditStateType && HandleFavFoodImage(foodType)}
        </View>
      </MyEditInfoFoodContainer>
      <TouchableOpacity onPress={() => onPress()} style={styles.myEditButton}>
        <Text style={styles.myEditButtonText}>완료</Text>
      </TouchableOpacity>
    </Wrapper>
  );
};

export default MyEditScreen;

const styles = StyleSheet.create({
  BackIcon: {
    width: 50,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 13,
    paddingRight: 20,
  },
  myEditProfileImage: {
    width: 110,
    height: 110,
    borderRadius: 60,
  },
  myEditName: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '900',
    color: '#2a3037',
  },
  myEditNickname: {
    marginTop: 9,
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#2a3037',
  },
  myEditItemTitle: {
    width: '100%',
    height: 27,
    flexWrap: 'wrap',
    alignContent: 'space-between',
  },
  myEditItemBox: {
    width: '100%',
    height: 56,
    marginTop: 8,
    borderRadius: 32,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignContent: 'space-between',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#d0dbea',
    flexWrap: 'wrap',
  },
  myEditItemBoxText: {
    fontSize: 16,
    width: '60%',
    height: '40%',
    fontWeight: 'normal',
    color: '#aaacae',
    marginHorizontal: 26,
  },
  myEditItemBoxImage: {
    width: 36,
    height: 36,
    marginRight: 22,
  },
  myEditItemTitleBtn: {
    width: 7,
    height: 16,
    marginRight: 10,
  },
  myEditItemTitleText: {
    fontSize: 17,
    fontWeight: '900',
    fontStyle: 'normal',
    color: '#2a3037',
    marginLeft: 16,
  },
  myEditButton: {
    width: '80%',
    height: 56,
    borderRadius: 32,
    backgroundColor: '#fe554a',
    alignItems: 'center',
    justifyContent: 'center',

    ...Platform.select({
      ios: { marginTop: 138 },
      android: { marginTop: 108 },
    }),
  },
  myEditButtonText: {
    fontSize: 15,
    fontWeight: '900',
    color: '#fcfcfc',
  },
});

const Wrapper = styled.View({
  paddingTop: 36,
  backgroundColor: '#fff',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});

const MyEditInfoStyleContainer = styled.View({
  width: '80%',
  height: 93,
  marginTop: 43,
});

const MyEditInfoFoodContainer = styled.View({
  width: '80%',
  height: 93,
  marginTop: 34,
});
