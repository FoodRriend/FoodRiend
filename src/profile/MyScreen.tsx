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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { myScreenData, myScreenData2, myScreenData3, myScreenFirstData } from './constants';

import { useAppSelector, useAppDispatch } from '../redux/hooks';

const MyScreen: React.FC = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: false,
    });
  };

  headerStyle();

  const { foodStyle, foodType, nickname } = useAppSelector((state) => state.users);
  console.log('나오나?', foodStyle, foodType, nickname);

  const [favListTitle, setFavListTitle] = useState('먹어봤어요');

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

  interface IMyProps {
    address: string;
    name: string;
    score: number;
  }

  const renderItem = ({ item, index }: { item: IMyProps; index: number }) => {
    if (index === 0 && favListTitle === '먹어봤어요') {
      return (
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
                  <Text style={styles.myScreenRestaurantName}>{`${item.name.slice(0, 6)}...`}</Text>
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
      );
    }
    if (index === 0 && favListTitle !== '먹어봤어요') {
      return (
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
                  <Text style={styles.myScreenRestaurantName}>{`${item.name.slice(0, 6)}...`}</Text>
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
      );
    }
    if (index === 1) {
      return (
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
                  <Text style={styles.myScreenRestaurantName}>{`${item.name.slice(0, 6)}...`}</Text>
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
      <MyScreenInfoContainer>
        <Pressable onPress={() => navigation.navigate('MyEdit')}>
          <Image
            source={require(`../assets/images/onBoading/friends/friend6.png`)}
            style={{ width: 95, height: 95 }}
          />
        </Pressable>
        <View style={styles.myScreenInfoItem}>
          <Text style={styles.myScreenInfoText}>김민아</Text>
          <Text style={styles.myScreenInfoText}>바른맛집사나이</Text>
          <View style={{ width: '100%', height: 28, flexWrap: 'wrap' }}>
            <Image
              source={require(`../assets/images/onBoading/favFood/chop.png`)}
              style={{ width: 28, height: 28 }}
            />
            <Image
              source={require(`../assets/images/onBoading/addStyle/addStyleImage0.png`)}
              style={{ width: 28, height: 28, marginLeft: 10 }}
            />
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
          {favListTitle !== '인생맛집' && <Text style={styles.myScreenFavInfoText}>인생맛집</Text>}
        </Pressable>
      </MyScreenFavInfoContainer>
      <MyScreenRestaurantContainer>
        {fomatRenderItem(myScreenData) === '먹어봤어요' && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={myScreenData}
            renderItem={renderItem}
            numColumns={numColumns}
          />
        )}
        {fomatRenderItem(myScreenData) === '먹어봤어요_null' && (
          <>
            <View style={{ width: '100%', height: 37, justifyContent: 'center' }}>
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
          />
        )}
        {fomatRenderItem(myScreenData2) === '가보고 싶어요_null' && (
          <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: '700', marginTop: 44 }}>가보고 싶어요</Text>
            <Text style={{ fontSize: 15, fontWeight: '500', marginTop: 20 }}>
              가게를 검색하고 북마트 버튼을 클릭 해보세요
            </Text>
            <Text style={{ fontSize: 15, fontWeight: '500' }}>
              저장된 가게를 모아서 볼 수 있어요.
            </Text>
            <Text></Text>
          </View>
        )}
        {fomatRenderItem(myScreenFirstData) === '인생맛집' && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={myScreenData3}
            renderItem={renderItem}
            numColumns={numColumns}
          />
        )}
        {fomatRenderItem(myScreenFirstData) === '인생맛집_null' && (
          <MyscreenFirstReviewCover2>
            <View style={styles.myscreenFirstReviewItem}>
              <Image
                style={{ width: 33, height: 45 }}
                source={require(`../assets/icons/best.png`)}
              />
            </View>
            <Text style={{ marginTop: 11, fontSize: 20, fontWeight: '700' }}>
              인생맛집을 기록해주세요
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
        )}
      </MyScreenRestaurantContainer>
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
  width: '100%',
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
});

const MyScreenRestaurantContainer = styled.View({
  width: '100%',
  height: '67.6%',
  paddingHorizontal: 11,
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
  marginTop: 42,
  width: Dimensions.get('window').width,
  height: '66%',
  backgroundColor: '#f5f6f7',
  borderRadius: 10,
  alignItems: 'center',
});
