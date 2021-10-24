import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
  Animated,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { changeModalProfileUri } from '../redux/modalSlice';

import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { Tap } from './components';
import { addFoodType, addFoodStyle, addNickname, kakaoNameUpdate } from '../redux/userSlice';

import { profileInStorage } from '../redux/profileSlice';

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

const MyScreen = ({ state, navigation }: MaterialTopTabBarProps) => {
  const navigations = useNavigation();

  const headerStyle = () => {
    navigations.setOptions({
      headerShown: false,
    });
  };

  headerStyle();

  const dispatch = useAppDispatch();

  const { foodStyle, foodType, nickname, name, userId } = useAppSelector((state) => state.users);
  const { profileUri } = useAppSelector((state) => state.modals);
  const { scrollState, loading, userData } = useAppSelector((state) => state.profiles);


  const [scrollNum, setScrollNum] = useState(0);
  const [scrollHeightNum, setScrollHeightNum] = useState(0);

  const [translateValue] = useState(new Animated.Value(0));
  const [scrollY] = useState(new Animated.Value(160));
  const scrollHeightY = useState(new Animated.Value(230))[0];
  const [width, setWidth] = useState(0);
  const [toValue, setToValue] = useState(0);

  // 스크롤 이벤트

  useEffect(() => {
    if (scrollState === 'Down') {
      setScrollNum(160);
      setScrollHeightNum(226);
    }
    if (scrollState === 'Up') {
      setScrollNum(0);
      setScrollHeightNum(66);
    }
  }, [scrollState]);

  useEffect(() => {
    Animated.spring(scrollY, {
      toValue: scrollNum,
      damping: 100,
      mass: 1,
      stiffness: 100,
      overshootClamping: true,
      restDisplacementThreshold: 0.001,
      restSpeedThreshold: 0.001,
      useNativeDriver: true,
    }).start();
  }, [scrollY, scrollNum]);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      if (scrollState === 'Down') {
        Animated.timing(scrollHeightY, {
          toValue: scrollHeightNum,
          duration: 0,
          useNativeDriver: false,
        }).start();
      }
      if (scrollState === 'Up') {
        Animated.timing(scrollHeightY, {
          toValue: scrollHeightNum,
          duration: 500,
          useNativeDriver: false,
        }).start();
      }
    }
    if (Platform.OS === 'android') {
      if (scrollState === 'Down') {
        Animated.timing(scrollHeightY, {
          toValue: scrollHeightNum + 5,
          duration: 0,
          useNativeDriver: false,
        }).start();
      }
      if (scrollState === 'Up') {
        Animated.timing(scrollHeightY, {
          toValue: scrollHeightNum + 5,
          duration: 500,
          useNativeDriver: false,
        }).start();
      }
    }
  }, [scrollHeightNum, scrollHeightY]);


  useEffect(() => {
    if (userId !== undefined) {
      dispatch(profileInStorage({ userId: userId }));
    }
  }, [userId, foodStyle, foodType, profileUri]);

  useEffect(() => {
    console.log(userData?.profileImage);
    if (userData?.profileImage) {
      dispatch(changeModalProfileUri(userData?.profileImage));
    }
  }, [userData]);

  useEffect(() => {
    if (userData?.name) {
      dispatch(kakaoNameUpdate(userData.name));
    }
    if (userData?.nickname) {
      dispatch(addNickname(userData.nickname));
    }
    if (userData?.foodType) {
      dispatch(addFoodType(userData.foodType));
    }
    if (userData?.foodStyle) {
      dispatch(addFoodStyle(userData.foodStyle));
    }
  }, [userData, foodStyle, foodType]);

  const MySreenHeader = () => {
    return (
      <Animated.View
        style={{
          ...Platform.select({
            ios: {
              transform: [{ translateY: scrollY }],
              top: -170,
            },
            android: {
              transform: [{ translateY: scrollY }],
              top: -159,
            },
          }),
          position: 'absolute',
          left: 0,
          right: 0,
        }}>
        <MyScreenInfoContainer>
          <TouchableOpacity onPress={() => navigations.navigate('MyEdit')}>
            {profileUri && profileUri?.length > 0 ? (
              <Image
                source={{ uri: profileUri }}
                style={{ width: 95, height: 95, marginLeft: 10, borderRadius: 60 }}
              />
            ) : (
              <Image
                source={require(`../assets/icons/defaultProfile.png`)}
                style={{ width: 95, height: 95, marginLeft: 10, borderRadius: 60 }}
              />
            )}
          </TouchableOpacity>
          <View style={styles.myScreenInfoItem}>
            <Text style={styles.myScreenInfoText}>{name}</Text>
            <Text style={styles.myScreenInfoText}>{nickname}</Text>
            <View style={{ width: '100%', height: 28, flexWrap: 'wrap' }}>
              {HandleFavFoodImage(foodType)}
              {HandleFoodStyleImage(foodStyle)}
            </View>
          </View>
          <View style={styles.myScreenInfoFriendItem}>
            <View
              style={{
                width: 86,
                height: 20,
                flexWrap: 'wrap',
                position: 'relative',
                bottom: 20,
                alignContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => navigations.navigate('Alert')}
                style={{
                  width: 40,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={styles.myScreenInfoAlertImage}
                  source={require(`../assets/icons/alarm(n).png`)}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigations.navigate('Setting')}
                style={{
                  width: 40,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={styles.myScreenInfoAlertImage}
                  source={require(`../assets/icons/setting.png`)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.myScreenInfoFriend}>
              <Text style={{ fontSize: 14, fontWeight: '500', color: '#2a3037' }}>친구</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigations.navigate('MyFriendList')}
              style={{
                width: 60,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{ fontSize: 17, fontWeight: '500', color: '#3e5481' }}>
                {userData?.cntFriend}
              </Text>
            </TouchableOpacity>
          </View>
        </MyScreenInfoContainer>
      </Animated.View>
    );
  };

  // Tab 관련 컴포넌트

  type Route = {
    key: string;
    name: string;
    params?: object | undefined;
  };

  const MyScreenTap = () => {
    useEffect(() => {
      Animated.spring(translateValue, {
        toValue,
        damping: 10,
        mass: 1,
        stiffness: 100,
        overshootClamping: true,
        restDisplacementThreshold: 0.001,
        restSpeedThreshold: 0.001,
        useNativeDriver: true,
      }).start();
    }, [state, translateValue, toValue]);
    return (
      <Animated.View
        style={{
          ...Platform.select({
            ios: {
              transform: [{ translateY: scrollY }],
              top: -3.5,
            },
            android: {
              transform: [{ translateY: scrollY }],
              top: 1,
            },
          }),
          position: 'absolute',
          left: 0,
          right: 0,
          zIndex: 100,
        }}>
        <MyScreenFavInfoContainer>
          {state.routes &&
            state.routes.map((route: Route, index: number) => {
              const label = route.name;
              const isFocused = state.index === index;

              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });
                if (!isFocused && !event.defaultPrevented) {
                  navigations.navigate(route.name);
                }
              };
              return (
                <Tap
                  isFocused={isFocused}
                  label={label}
                  onPress={onPress}
                  setToValue={setToValue}
                  setWidth={setWidth}
                  index={index}
                />
              );
            })}
        </MyScreenFavInfoContainer>
        <Animated.View
          style={{
            transform: [{ translateX: translateValue }],
            backgroundColor: '#5d004a',
            height: 2,
            width,
          }}
        />
      </Animated.View>
    );
  };

  if (loading) {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      {Platform.OS === 'ios' ? (
        <View
          style={{
            width: '100%',
            height: 44,
            backgroundColor: '#fff',
            position: 'absolute',
            top: 0,
            zIndex: 999,
          }}
        />
      ) : (
        <></>
      )}
      {scrollState === 'Down' && (
        <Animated.View
          style={[
            {
              backgroundColor: '#fff',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            },
            {
              height: scrollHeightY,
            },
          ]}>
          <MyScreenScrollContainer />
          <MySreenHeader />
          <MyScreenTap />
        </Animated.View>
      )}
      {scrollState === 'Up' && (
        <Animated.View
          style={[
            {
              backgroundColor: '#fff',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            },
            {
              height: scrollHeightY,
            },
          ]}>
          <MyScreenScrollContainer />
          <MySreenHeader />
          <MyScreenTap />
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

export default MyScreen;

const styles = StyleSheet.create({
  myScreenInfoItem: {
    width: '38%',
    height: 95,
    paddingLeft: 23,
    justifyContent: 'space-between',
  },
  myScreenInfoText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2a3037',
  },
  myScreenInfoFriendItem: {
    width: '25%',
    height: 95,
    paddingLeft: 9,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  myScreenInfoAlertImage: {
    width: 16,
    height: 18,
  },
  myScreenInfoFriend: {
    width: 64,
    height: 20,
    borderRadius: 15,
    backgroundColor: '#dfe2e5',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 11,
  },
  myScreenFavInfoItem: {
    height: 43,
    width: Dimensions.get('window').width / 3 - 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  myScreenFavInfoNumber: {
    fontSize: 17,
    fontWeight: '500',
    color: '#3e5481',
  },
  myScreenFavInfoText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#9fa5c0',
    marginTop: 3,
  },
  myScreenFavInfoTouchText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#2A3037',
    marginTop: 3,
  },
});

const MyScreenInfoContainer = styled.View({
  width: '100%',
  height: 160,
  justifyContent: 'center',
  ...Platform.select({
    ios: {
      paddingLeft: '6%',
    },
    android: {
      paddingLeft: '8%',
    },
  }),
  flexWrap: 'wrap',
  borderBottomWidth: 0.4,
  borderBottomColor: '#FE554A',
});

const MyScreenFavInfoContainer = styled.View({
  width: '100%',
  height: 66,
  borderBottomWidth: 0.4,
  borderBottomColor: '#FE554A',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignContent: 'stretch',
  paddingHorizontal: 30,
  backgroundColor: '#fff',
});

const MyScreenScrollContainer = styled.View({
  width: '100%',
  height: '99.5%',
  alignItems: 'center',
});
