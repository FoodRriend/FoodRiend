import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Animated,
  Platform,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '@/redux/hooks';
import foodTypeImage from '@/assets/images/onBoading/favFood';
import foodStyleFile from '@/assets/images/onBoading/addStyle';

interface IParma {
  index: number;
  type: 'feed' | 'search';
}

const processingData = (data: any, index: number) => {
  const newData = data[index].friends.slice();
  let firstData: any = {};
  for (const key in data[index]) {
    if (key !== 'friend') {
      firstData[key] = data[index][key];
    }
  }
  newData.unshift(firstData);
  return newData;
};

const FriendPostReviewScreen: React.FC = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: false,
      title: '',
      headerLeft: () => <></>,
    });
  };

  headerStyle();

  let propsData, title: string, location: string;
  const param = navigation.getState().routes[1].params as IParma;

  if (param.type === 'feed') {
    propsData = useAppSelector((state) => state.feed.data?.data?.users);
    if (propsData) {
      propsData = processingData(propsData, param.index);
      title = propsData[0].title;
      location = propsData[0].location;
    }
    // console.log(propsData);
  } else if (param.type === 'search') {
    propsData = useAppSelector((state) => state.search.data?.data.shopInfo);
  } else {
    return (
      <View>
        <Text>올바른 경로가 아닙니다.</Text>
      </View>
    );
  }

  // 스크롤 이벤트

  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 45);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 25],
    outputRange: [0, -45],
  });

  interface IMyPostProps {
    name: string;
    title: string;
    adress: string;
    tag: string;
    content: string;
  }

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    console.log(index);
    const foodType = item.foodType as '고기';
    const foodStyle = item.foodStyle as '숨은 맛집 개척자';
    return (
      <>
        {/* {index === 0 ? <View style={{ width: '100%', height: 50 }}></View> : <></>} */}
        <MyReviewContainer>
          <MyReviewProfileItem>
            <TouchableOpacity>
              <Image
                source={{ uri: item.profileImg }}
                style={{ width: 48, height: 48, borderRadius: 25 }}
              />
            </TouchableOpacity>

            <View
              style={{
                width: 250,
                height: '100%',
                marginLeft: 10,
                paddingVertical: 4,
              }}>
              <Text style={styles.myReviewProfileName}>{item.name}</Text>
              <View style={{ flexWrap: 'wrap', marginTop: 4 }}>
                <Image source={foodTypeImage[foodType]} style={{ width: 24, height: 24 }} />
                <Image
                  source={foodStyleFile[foodStyle]}
                  style={{ width: 24, height: 24, marginLeft: 3.5 }}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.myReviewShareButton}>
              <Image
                source={require(`../../assets/icons/share.png`)}
                style={{ width: 20, height: 18 }}
              />
            </TouchableOpacity>
          </MyReviewProfileItem>
          <MyReviewRestaurantItem>
            <TouchableOpacity>
              <Image
                source={{ uri: item.relatedImg[0].img }}
                style={{ width: 187, height: 187, borderRadius: 15 }}
              />
            </TouchableOpacity>

            <View style={{ width: 173, height: 187, paddingLeft: 7 }}>
              <View style={styles.MyReviewRestaurantBox}>
                <Text style={styles.myReviewRestaurantTitle}>{title}</Text>
                <TouchableOpacity style={styles.MyReviewRestaurantShare}>
                  <Image
                    source={require(`../../assets/icons/dot.png`)}
                    style={{ width: 18, height: 18 }}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Text style={styles.myReviewRestaurantAdress}>{location}</Text>
                <Text style={styles.myReviewRestaurantTag}>{item.hashtag.join(', ')}</Text>
              </TouchableOpacity>

              <View style={{ width: 40, height: 20, flexWrap: 'wrap', marginTop: 10 }}>
                <Image
                  source={require(`../../assets/icons/star.png`)}
                  style={{ width: 18, height: 18 }}
                />
                <Text style={styles.myReviewRestaurantScore}>{item.rating}</Text>
              </View>
            </View>
          </MyReviewRestaurantItem>
          <View style={styles.myReviewContent}>
            <Text style={styles.myReviewContentText}>{item.comments}</Text>
          </View>
        </MyReviewContainer>
      </>
    );
  };

  return (
    <Wrapper>
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
      <View
        style={{
          zIndex: 200,
          width: '100%',
          ...Platform.select({
            ios: {
              height: 43,
            },
            android: {
              height: 0,
            },
          }),
        }}></View>
      <Animated.View
        style={{
          transform: [{ translateY: translateY }],
          zIndex: 100,
          width: '100%',
          height: 45,
          backgroundColor: '#fff',
          position: 'absolute',
          ...Platform.select({
            ios: {
              top: 40,
            },
            android: {
              top: 0,
            },
          }),
          display: 'flex',
          justifyContent: 'center',
          bottom: 0,
          right: 0,
          ...Platform.select({
            ios: {
              left: 0,
            },
            android: {
              left: 8,
            },
          }),
        }}>
        <TouchableOpacity
          style={styles.BackIcon}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={require(`../../assets/icons/Left.png`)}></Image>
        </TouchableOpacity>
      </Animated.View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={propsData}
        renderItem={renderItem}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
        bounces={false}
      />
    </Wrapper>
  );
};

export default FriendPostReviewScreen;

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
  myReviewContent: {
    width: '100%',
    height: 94,
    paddingHorizontal: 10,
    paddingTop: 8,
  },
  myReviewContentText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2A3037',
  },
  myReviewProfileName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2A3037',
  },
  myReviewShareButton: {
    width: 50,
    height: 50,
    position: 'absolute',
    left: '85.7%',
    bottom: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  myReviewRestaurantTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2A3037',
  },
  MyReviewRestaurantBox: {
    width: 148,
    height: 20,
    flexWrap: 'wrap',
    marginTop: 8,
    alignContent: 'space-between',
    justifyContent: 'center',
  },
  MyReviewRestaurantShare: {
    width: 40,
    height: 40,
    position: 'absolute',
    left: '84%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myReviewRestaurantAdress: {
    fontSize: 12,
    fontWeight: '500',
    color: '#aaacae',
    marginTop: 13,
  },
  myReviewRestaurantTag: {
    fontSize: 12,
    fontWeight: '500',
    color: '#aaacae',
    marginTop: 12,
  },
  myReviewRestaurantScore: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#424242',
    marginLeft: 6,
  },
});

const Wrapper = styled.View({
  backgroundColor: '#fff',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});

const MyReviewContainer = styled.View({
  top: 50,
  width: 364,
  height: 340,
  marginBottom: 27,
});

const MyReviewProfileItem = styled.View({
  width: '100%',
  height: 56,
  justifyContent: 'center',
  flexWrap: 'wrap',
});

const MyReviewRestaurantItem = styled.View({
  width: '100%',
  height: 188,
  flexWrap: 'wrap',
  marginTop: 3,
});
