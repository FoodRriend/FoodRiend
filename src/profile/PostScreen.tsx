import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Platform,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { postWriteInStorage } from '../redux/postSlice';

import AntDesign from 'react-native-vector-icons/AntDesign';

// import ImagePicker from 'react-native-image-picker';
import { launchCamera, launchImageLibrary, ImagePickerResponse } from 'react-native-image-picker';

import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { PhotoModal } from '../shared/modal';
import { showPhotoModal } from '../redux/modalSlice';

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

  return <Image source={FavFoodImagePath} style={{ width: 28, height: 28 }} />;
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

  return <Image source={FoodStyleImagePath} style={{ width: 28, height: 28, marginLeft: 5 }} />;
};

const PostScreen: React.FC = () => {
  const navigation = useNavigation();

  const { foodStyle, foodType, accessToken, userId } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '기록하기',
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
        <TouchableOpacity
          style={styles.BackIcon}
          onPress={() => {
            navigation.navigate('MyPage');
          }}>
          <Image source={require(`../assets/icons/Left.png`)}></Image>
        </TouchableOpacity>
      ),
    });
  };

  headerStyle();

  const [inputContent, setInputCotent] = useState('');
  const [rating, setRating] = useState(0);
  const [translateValue] = useState(new Animated.Value(1));
  const [avatar, setAvatar] = useState('');
  const [imageBol, setImageBol] = useState(false);

  const handleInputNickname = useCallback(
    (e) => {
      setInputCotent(e);
    },
    [inputContent],
  );

  const onPress = () => {
    if (rating && inputContent && avatar) {
      dispatch(
        postWriteInStorage({
          accessToken,
          mainImage: undefined,
          foodCategory: 'restaurant',
          menu: undefined,
          contact: undefined,
          title: '돼지집22',
          location: '대한민국 인천광역시 남구 주안동 206-32번지',
          img: avatar,
          rating: rating,
          reviews: inputContent,
          hashtag: undefined,
          userId: Number(userId),
        }),
      );
    }
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
          console.log(uri, '????');
          setAvatar(uri);
          setImageBol(true);
          dispatch(showPhotoModal(false));
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
          setImageBol(true);
          dispatch(showPhotoModal(false));
        }
      }
    });
  };

  const onImagePress = () => {
    dispatch(showPhotoModal(true));
  };

  const Star = ({ filled }: any) => {
    return <AntDesign name="star" size={30} color={filled === true ? '#FE554A' : '#e5e9f2'} />;
  };

  const rate = (star: any) => {
    setRating(star);
  };

  const animate = () => {
    Animated.timing(translateValue, {
      toValue: 2,
      duration: 400,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      translateValue.setValue(1);
    });
  };

  let stars = [];
  let numStars = 5;

  const animateScale = translateValue.interpolate({
    inputRange: [1, 1.25, 2],
    outputRange: [1, 1.15, 1],
  });

  const animateOpacity = translateValue.interpolate({
    inputRange: [1, 1.2, 2],
    outputRange: [1, 0.6, 1],
  });

  const animateWobble = translateValue.interpolate({
    inputRange: [1, 1.25, 1.75, 2],
    outputRange: ['0deg', '-3deg', '3deg', '0deg'],
  });

  const animationStyle = {
    transform: [{ scale: animateScale }, { rotate: animateWobble }],
    opacity: animateOpacity,
  };

  for (let x = 1; x <= numStars; x++) {
    stars.push(
      <TouchableWithoutFeedback
        key={x}
        onPress={() => {
          rate(x);
          animate();
        }}>
        <Animated.View style={x <= rating ? animationStyle : null}>
          <Star filled={x <= rating ? true : false} />
        </Animated.View>
      </TouchableWithoutFeedback>,
    );
  }

  return (
    <Wrapper>
      <PhotoModal openCamara={openCamara} openImageLibrary={openImageLibrary} />
      <PostContainer>
        <PostUserInfoContainer>
          <Image
            style={{ width: 48, height: 48 }}
            source={require(`../assets/images/onBoading/friends/friend6.png`)}
          />
          <View
            style={{
              width: 250,
              height: 48,
              marginLeft: 10,
              position: 'relative',
              top: -5,
            }}>
            <View
              style={{
                width: 250,
                height: 25,
                justifyContent: 'center',
              }}>
              <Text style={{ fontSize: 15, fontWeight: '600', color: '#2A3037' }}>김민아</Text>
            </View>
            <View
              style={{
                width: 250,
                height: 25,
                flexWrap: 'wrap',
              }}>
              {HandleFavFoodImage(foodType)}
              {HandleFoodStyleImage(foodStyle)}
            </View>
          </View>
        </PostUserInfoContainer>
        <PostReviewContainer>
          <TouchableHighlight
            style={{ borderRadius: 15 }}
            activeOpacity={0.8}
            underlayColor={'#e5e9f2'}
            onPress={() => onImagePress()}>
            <View
              style={{
                width: 188,
                height: 187,
                borderColor: '#aaacae',
                borderWidth: 1,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {imageBol ? (
                <Image
                  source={{ uri: avatar }}
                  style={{ width: 188, height: 187, borderRadius: 15 }}
                />
              ) : (
                <Image
                  style={{ width: 70, height: 70 }}
                  source={require(`../assets/icons/Vector.png`)}
                />
              )}
            </View>
          </TouchableHighlight>

          <View style={{ width: 151, height: 187, marginLeft: 9 }}>
            <View
              style={{
                width: 160,
                height: 40,
                justifyContent: 'center',
                flexWrap: 'wrap',
                alignContent: 'space-between',
              }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#2A3037' }}>숙성 삼겹</Text>

              <TouchableOpacity>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    marginRight: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{ width: 16, height: 16 }}
                    source={require(`../assets/icons/search_gray.png`)}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  width: 160,
                  height: 34,
                  justifyContent: 'center',
                  fontSize: 12,
                  fontWeight: '600',
                  color: '#aaacae',
                }}>
                서울특별시 종로구 종로동
              </Text>
              <Text
                style={{
                  width: 160,
                  height: 34,
                  justifyContent: 'center',
                  fontSize: 12,
                  fontWeight: '600',
                  color: '#aaacae',
                }}>
                #삼겹살, #목살, #냉면
              </Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row' }}>{stars}</View>
          </View>
        </PostReviewContainer>
        <View style={{ justifyContent: 'flex-start' }}>
          <TextInput
            autoCapitalize={'none'}
            onChangeText={handleInputNickname}
            style={{
              width: 350,
              minHeight: 80,
              maxHeight: 150,
              marginTop: 8,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#dfe2e5',
              fontWeight: '500',
              fontSize: 12,
              padding: 10,
              color: '#2A3037',
            }}
            value={inputContent}
            multiline={true}
            maxLength={2000}
            textAlignVertical={'top'}
            keyboardType={'ascii-capable'}
          />
        </View>
      </PostContainer>
      <TouchableOpacity onPress={() => onPress()} style={styles.myEditButton}>
        <Text style={styles.myEditButtonText}>기록하기</Text>
      </TouchableOpacity>
    </Wrapper>
  );
};

export default PostScreen;

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
  myEditButton: {
    width: 327,
    height: 56,
    borderRadius: 32,
    backgroundColor: '#fe554a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myEditButtonText: {
    fontSize: 15,
    fontWeight: '900',
    color: '#fcfcfc',
  },
});

const Wrapper = styled.View({
  paddingTop: 12,
  backgroundColor: '#fff',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});

const PostContainer = styled.View({
  width: Dimensions.get('window').width - 26,
  height: 560,
  alignItems: 'center',
});

const PostUserInfoContainer = styled.View({
  width: 350,
  height: 56,
  justifyContent: 'center',
  flexWrap: 'wrap',
});

const PostReviewContainer = styled.View({
  width: 350,
  height: 188,
  marginTop: 5,
  flexWrap: 'wrap',
});
