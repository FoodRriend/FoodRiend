import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import {
  Text,
  View,
  Pressable,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  Platform,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { myScreenData, myScreenData2, myScreenData3, myScreenFirstData } from './constants';

import { useAppSelector, useAppDispatch } from '../redux/hooks';

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

const MyScreen: React.FC = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: false,
    });
  };

  headerStyle();

  const { foodStyle, foodType, nickname } = useAppSelector((state) => state.users);

  const [favListTitle, setFavListTitle] = useState('먹어봤어요');

  // 스크롤 이벤트
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 50);
  const translateIosY = scrollY.interpolate({
    inputRange: [0, 205],
    outputRange: [205, 40],
    extrapolateLeft: 'extend',
    extrapolateRight: 'clamp',
  });
  const translateAndroidY = scrollY.interpolate({
    inputRange: [0, 160],
    outputRange: [160, 0],
    extrapolateLeft: 'extend',
    extrapolateRight: 'clamp',
  });

  const handleFavList = (title: string) => {
    setFavListTitle(title);
  };

  const fomatRenderItem = (data: any) => {
    if (favListTitle === '먹어봤어요' && Object.keys(data[0]).length === 0) {
      return '먹어봤어요_null';
    } else if (favListTitle === '먹어봤어요' && Object.keys(data[0]).length !== 0) {
      return '먹어봤어요';
    }
    if (favListTitle === '가보고 싶어요' && Object.keys(data[0]).length === 0) {
      return '가보고 싶어요_null';
    } else if (favListTitle === '가보고 싶어요' && Object.keys(data[0]).length !== 0) {
      return '가보고 싶어요';
    }
    if (favListTitle === '인생맛집' && Object.keys(data[0]).length === 0) {
      return '인생맛집_null';
    } else if (favListTitle === '인생맛집' && Object.keys(data[0]).length !== 0) {
      return '인생맛집';
    }
  };

  const MySreenHeader = () => {
    return (
      <MyScreenInfoContainer>
        <Pressable onPress={() => navigation.navigate('MyEdit')}>
          <Image
            source={require(`../assets/images/onBoading/friends/friend6.png`)}
            style={{ width: 95, height: 95, marginLeft: 10 }}
          />
        </Pressable>
        <View style={styles.myScreenInfoItem}>
          <Text style={styles.myScreenInfoText}>김민아</Text>
          <Text style={styles.myScreenInfoText}>바른맛집사나이</Text>
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
            <Pressable
              onPress={() => navigation.navigate('Alert')}
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
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('Setting')}
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
            </Pressable>
          </View>
          <View style={styles.myScreenInfoFriend}>
            <Text style={{ fontSize: 14, fontWeight: '500', color: '#2a3037' }}>친구</Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate('MyFriendList')}
            style={{
              width: 60,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ fontSize: 17, fontWeight: '500', color: '#3e5481' }}>5</Text>
          </Pressable>
        </View>
      </MyScreenInfoContainer>
    );
  };

  const MyScreenTap = () => {
    return (
      <Animated.View
        style={{
          ...Platform.select({
            ios: {
              transform: [{ translateY: translateIosY }],
            },
            android: {
              transform: [{ translateY: translateAndroidY }],
            },
          }),

          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
        }}>
        <MyScreenFavInfoContainer>
          <Pressable onPress={() => handleFavList('먹어봤어요')} style={styles.myScreenFavInfoItem}>
            <Text style={styles.myScreenFavInfoNumber}>232</Text>
            {favListTitle === '먹어봤어요' && (
              <Text style={styles.myScreenFavInfoTouchText}>먹어봤어요</Text>
            )}
            {favListTitle !== '먹어봤어요' && (
              <Text style={styles.myScreenFavInfoText}>먹어봤어요</Text>
            )}
          </Pressable>
          <Pressable
            onPress={() => handleFavList('가보고 싶어요')}
            style={styles.myScreenFavInfoItem}>
            <Text style={styles.myScreenFavInfoNumber}>33</Text>
            {favListTitle === '가보고 싶어요' && (
              <Text style={styles.myScreenFavInfoTouchText}>가보고 싶어요</Text>
            )}
            {favListTitle !== '가보고 싶어요' && (
              <Text style={styles.myScreenFavInfoText}>가보고 싶어요</Text>
            )}
          </Pressable>
          <Pressable onPress={() => handleFavList('인생맛집')} style={styles.myScreenFavInfoItem}>
            <Text style={styles.myScreenFavInfoNumber}>5</Text>
            {favListTitle === '인생맛집' && (
              <Text style={styles.myScreenFavInfoTouchText}>인생맛집</Text>
            )}
            {favListTitle !== '인생맛집' && (
              <Text style={styles.myScreenFavInfoText}>인생맛집</Text>
            )}
          </Pressable>
        </MyScreenFavInfoContainer>
      </Animated.View>
    );
  };

  interface IMyProps {
    address: string;
    name: string;
    score: number;
  }

  const renderItem = ({ item, index }: { item: IMyProps; index: number }) => {
    if (index === 0 && favListTitle === '먹어봤어요') {
      return (
        <>
          <View style={{ flexWrap: 'wrap' }}>
            <MySreenHeader />
            <View style={{ marginTop: 70 }}>
              <View style={styles.myScreenRestaurantCover}>
                <View style={{ width: '100%', height: 37, justifyContent: 'center' }}>
                  <Pressable
                    style={styles.myScreenReviewButton}
                    onPress={() => navigation.navigate('MyPostReview')}>
                    <Image
                      style={{ width: 18, height: 18, borderRadius: 16 }}
                      source={require(`../assets/icons/write.png`)}
                    />
                  </Pressable>
                </View>
                <View style={{ width: 160 }}>
                  <Image
                    style={{ width: '100%', height: 153, borderRadius: 16 }}
                    source={require(`../assets/images/profile/Rectangle1.png`)}
                  />
                  <View style={{ flexWrap: 'wrap' }}>
                    <View style={{ width: '70%' }}>
                      <Text style={styles.myScreenRestaurantAddress}>{item.address}</Text>
                      {item.name.length > 7 ? (
                        <Text style={styles.myScreenRestaurantName}>{`${item.name.slice(
                          0,
                          6,
                        )}...`}</Text>
                      ) : (
                        <Text style={styles.myScreenRestaurantName}>{item.name}</Text>
                      )}
                      <View style={styles.myScreenRestaurantContent}>
                        <Image
                          style={{ width: 20, height: 20, marginLeft: 2 }}
                          source={require(`../assets/icons/star.png`)}
                        />
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '500',
                            color: '#2A3037',
                            marginLeft: 3,
                          }}>
                          {item.score}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </>
      );
    }
    if (index === 0 && favListTitle !== '먹어봤어요') {
      return (
        <>
          <View style={{ flexWrap: 'wrap' }}>
            <MySreenHeader />
            <View style={{ marginTop: 70 }}>
              <View style={styles.myScreenRestaurantCover}>
                <View style={{ width: '100%', height: 37, justifyContent: 'center' }} />
                <View style={{ width: 160 }}>
                  <Image
                    style={{ width: '100%', height: 153, borderRadius: 16 }}
                    source={require(`../assets/images/profile/Rectangle1.png`)}
                  />
                  <View style={{ flexWrap: 'wrap' }}>
                    <View style={{ width: '70%' }}>
                      <Text style={styles.myScreenRestaurantAddress}>{item.address}</Text>
                      {item.name.length > 7 ? (
                        <Text style={styles.myScreenRestaurantName}>{`${item.name.slice(
                          0,
                          6,
                        )}...`}</Text>
                      ) : (
                        <Text style={styles.myScreenRestaurantName}>{item.name}</Text>
                      )}
                      <View style={styles.myScreenRestaurantContent}>
                        <Image
                          style={{ width: 20, height: 20, marginLeft: 2 }}
                          source={require(`../assets/icons/star.png`)}
                        />
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '500',
                            color: '#2A3037',
                            marginLeft: 3,
                          }}>
                          {item.score}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </>
      );
    }
    if (index === 1) {
      return (
        <View style={{ marginTop: 230, position: 'absolute', right: 24 }}>
          <View style={styles.myScreenRestaurantCover}>
            <View style={{ width: '100%', height: 37 }}></View>
            <View style={{ width: 160 }}>
              <Image
                style={{ width: '100%', height: 153, borderRadius: 16 }}
                source={require(`../assets/images/profile/Rectangle1.png`)}
              />
              <View style={{ flexWrap: 'wrap' }}>
                <View style={{ width: '70%' }}>
                  <Text style={styles.myScreenRestaurantAddress}>{item.address}</Text>
                  {item.name.length > 7 ? (
                    <Text style={styles.myScreenRestaurantName}>{`${item.name.slice(
                      0,
                      6,
                    )}...`}</Text>
                  ) : (
                    <Text style={styles.myScreenRestaurantName}>{item.name}</Text>
                  )}
                  <View style={styles.myScreenRestaurantContent}>
                    <Image
                      style={{ width: 20, height: 20, marginLeft: 2 }}
                      source={require(`../assets/icons/star.png`)}
                    />
                    <Text
                      style={{ fontSize: 12, fontWeight: '500', color: '#2A3037', marginLeft: 3 }}>
                      {item.score}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.myScreenRestaurantCover}>
        <View style={{ width: 160 }}>
          <Image
            style={{ width: '100%', height: 153, borderRadius: 16 }}
            source={require(`../assets/images/profile/Rectangle3.png`)}
          />
          <View style={{ flexWrap: 'wrap' }}>
            <View style={{ width: '70%' }}>
              <Text style={styles.myScreenRestaurantAddress}>{item.address}</Text>
              {item.name.length > 7 ? (
                <Text style={styles.myScreenRestaurantName}>{`${item.name.slice(0, 6)}...`}</Text>
              ) : (
                <Text style={styles.myScreenRestaurantName}>{item.name}</Text>
              )}
              <View style={styles.myScreenRestaurantContent}>
                <Image
                  style={{ width: 20, height: 20, marginLeft: 2 }}
                  source={require(`../assets/icons/star.png`)}
                />
                <Text style={{ fontSize: 12, fontWeight: '500', color: '#2A3037', marginLeft: 3 }}>
                  {item.score}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const numColumns = 2;

  return (
    <Wrapper>
      <MyScreenScrollContainer>
        {fomatRenderItem(myScreenData) === '먹어봤어요' && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={myScreenData}
            renderItem={renderItem}
            numColumns={numColumns}
            onScroll={(e) => {
              scrollY.setValue(e.nativeEvent.contentOffset.y);
            }}
            bounces={false}
            scrollEventThrottle={16}
          />
        )}
        {fomatRenderItem(myScreenData) === '먹어봤어요_null' && (
          <>
            <MySreenHeader />
            <View style={{ width: '100%', height: 37, justifyContent: 'center', marginTop: 60 }}>
              <Pressable
                style={styles.myScreenReviewButton}
                onPress={() => navigation.navigate('MyPostReview')}>
                <Image
                  style={{ width: 18, height: 18, borderRadius: 16, marginTop: 12, marginLeft: 2 }}
                  source={require(`../assets/icons/write.png`)}
                />
              </Pressable>
            </View>
            <MyscreenFirstReviewCover>
              <View style={styles.myscreenFirstReviewItem}>
                <Image
                  style={{ width: 36, height: 36 }}
                  source={require(`../assets/icons/write2.png`)}
                />
              </View>
              <Text style={{ marginTop: 11, fontSize: 20, fontWeight: '700' }}>
                맛집을 기록해주세요
              </Text>
              <Text style={{ marginTop: 12, fontSize: 15, fontWeight: '500' }}>
                친구와 함께 한 맛집, 분위기 좋은 카페 등
              </Text>
              <Text style={{ fontSize: 15, fontWeight: '500', marginBottom: 30 }}>
                여러분의 경험을 간직하세요.
              </Text>
              <Pressable style={styles.myScreenFirstReviewButton}>
                <Text style={{ fontSize: 15, fontWeight: '900', color: '#ffffff' }}>기록하기</Text>
              </Pressable>
            </MyscreenFirstReviewCover>
          </>
        )}
        {fomatRenderItem(myScreenData2) === '가보고 싶어요' && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={myScreenData2}
            renderItem={renderItem}
            numColumns={numColumns}
            onScroll={(e) => {
              scrollY.setValue(e.nativeEvent.contentOffset.y);
            }}
            bounces={false}
            scrollEventThrottle={16}
          />
        )}
        {fomatRenderItem(myScreenData) === '가보고 싶어요_null' && (
          <>
            <MySreenHeader />
            <View style={{ width: '100%', height: '100%', alignItems: 'center', marginTop: 60 }}>
              <Text style={{ fontSize: 20, fontWeight: '700', marginTop: 44 }}>가보고 싶어요</Text>
              <Text style={{ fontSize: 15, fontWeight: '500', marginTop: 20 }}>
                가게를 검색하고 북마트 버튼을 클릭 해보세요
              </Text>
              <Text style={{ fontSize: 15, fontWeight: '500' }}>
                저장된 가게를 모아서 볼 수 있어요.
              </Text>
              <Text></Text>
            </View>
          </>
        )}
        {fomatRenderItem(myScreenData3) === '인생맛집' && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={myScreenData3}
            renderItem={renderItem}
            numColumns={numColumns}
            onScroll={(e) => {
              scrollY.setValue(e.nativeEvent.contentOffset.y);
            }}
            bounces={false}
            scrollEventThrottle={16}
          />
        )}
        {fomatRenderItem(myScreenData3) === '인생맛집_null' && (
          <>
            <MySreenHeader />
            <MyscreenFirstReviewCover2>
              <View style={styles.myscreenFirstReviewItem}>
                <Image
                  style={{ width: 33, height: 45 }}
                  source={require(`../assets/icons/best.png`)}
                />
              </View>
              <Text style={{ marginTop: 11, fontSize: 20, fontWeight: '700' }}>
                인생맛집을 남겨주세요
              </Text>
              <Text style={{ marginTop: 12, fontSize: 15, fontWeight: '500' }}>
                여러분이 가장 좋은 경험을 하였던
              </Text>
              <Text style={{ fontSize: 15, fontWeight: '500', marginBottom: 30 }}>
                최고의 맛집을 알려주세요.
              </Text>
              <Pressable style={styles.myScreenFirstReviewButton}>
                <Text style={{ fontSize: 15, fontWeight: '900', color: '#ffffff' }}>
                  인생맛집 기록하기
                </Text>
              </Pressable>
            </MyscreenFirstReviewCover2>
          </>
        )}
      </MyScreenScrollContainer>
      <MyScreenTap />
    </Wrapper>
  );
};

export default MyScreen;

const styles = StyleSheet.create({
  myScreenInfoItem: {
    width: 135,
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
    ...Platform.select({
      ios: {
        width: 135,
      },
      android: {
        width: 155,
      },
    }),
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
  myScreenRestaurantCover: {
    width: 183,
    alignItems: 'center',
    paddingTop: 6,
    ...Platform.select({
      ios: {
        marginLeft: 10,
        marginRight: -10,
      },
      android: {
        marginLeft: 20,
        marginRight: -10,
      },
    }),
  },
  myScreenRestaurantAddress: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#aaacae',
    marginTop: 5,
  },
  myScreenRestaurantName: {
    fontSize: 17,
    fontWeight: '500',
    color: '#3e5481',
    marginVertical: 5,
  },
  myScreenRestaurantContent: {
    position: 'absolute',
    left: 112,
    marginTop: 8,
    width: '42%',
    height: 30,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  myScreenReviewButton: {
    width: 30,
    height: 30,
    marginLeft: 10,
    position: 'relative',
    bottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  myscreenFirstReviewItem: {
    width: 64,
    height: 64,
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 23,
  },
  myScreenFirstReviewButton: {
    width: 277,
    height: 56,
    borderRadius: 32,
    backgroundColor: '#fe554a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Wrapper = styled.View({
  ...Platform.select({
    ios: {
      paddingTop: 44,
    },
    android: {
      paddingTop: 0,
    },
  }),
  backgroundColor: '#fff',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});

const MyScreenInfoContainer = styled.View({
  width: Dimensions.get('window').width,
  height: 160,
  justifyContent: 'center',
  ...Platform.select({
    ios: {
      paddingHorizontal: 17,
    },
    android: {
      paddingHorizontal: 27,
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
  // height: '67.6%',
  height: '99.5%',
  // paddingHorizontal: 11,
  alignItems: 'center',
});

const MyscreenFirstReviewCover = styled.View({
  marginTop: 5,
  width: Dimensions.get('window').width,
  height: '66%',
  backgroundColor: '#f5f6f7',
  borderRadius: 10,
  alignItems: 'center',
});

const MyscreenFirstReviewCover2 = styled.View({
  marginTop: 100,
  width: Dimensions.get('window').width,
  height: '46%',
  backgroundColor: '#f5f6f7',
  borderRadius: 10,
  alignItems: 'center',
});
