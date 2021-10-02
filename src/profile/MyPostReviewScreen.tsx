import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import {
  Text,
  View,
  Pressable,
  StyleSheet,
  Image,
  FlatList,
  Animated,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

  const myReviewData = [
    {
      name: '김민아',
      title: '팬케익',
      adress: '서울특별시 종로구 종로동',
      tag: '#3단 팬케익, 오렌지 주스',
      content: '돈 날림',
    },
    {
      name: '김민아',
      title: '삼겹살프로덕션',
      adress: '서울특별시 강남구 양제동',
      tag: '#삼겹살,#목살,#냉면',
      content: '맛있음',
    },
    {
      name: '김민아',
      title: '삼겹살프로덕션',
      adress: '서울특별시 강남구 양제동',
      tag: '#삼겹살,#목살,#냉면',
      content: '맛있음',
    },
  ];

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

  const renderItem = ({ item, index }: { item: IMyPostProps; index: number }) => {
    return (
      <>
        {index === 0 ? <View style={{ width: '100%', height: 50 }}></View> : <></>}
        <MyReviewContainer>
          <MyReviewProfileItem>
            <Image
              source={require(`../assets/images/onBoading/friends/friend6.png`)}
              style={{ width: 48, height: 48 }}
            />
            <View
              style={{
                width: 250,
                height: '100%',
                marginLeft: 10,
                paddingVertical: 4,
              }}>
              <Text style={styles.myReviewProfileName}>{item.name}</Text>
              <View style={{ flexWrap: 'wrap', marginTop: 4 }}>
                <Image
                  source={require(`../assets/images/onBoading/favFood/chop.png`)}
                  style={{ width: 24, height: 24 }}
                />
                <Image
                  source={require(`../assets/images/onBoading/addStyle/addStyleImage0.png`)}
                  style={{ width: 24, height: 24, marginLeft: 3.5 }}
                />
              </View>
            </View>
            <Pressable style={styles.myReviewShareButton}>
              <Image
                source={require(`../assets/icons/share.png`)}
                style={{ width: 20, height: 18 }}
              />
            </Pressable>
          </MyReviewProfileItem>
          <MyReviewRestaurantItem>
            <Image
              source={require(`../assets/images/profile/Rectangle5.png`)}
              style={{ width: 187, height: 187, borderRadius: 15 }}
            />
            <View style={{ width: 173, height: 187, paddingLeft: 7 }}>
              <View style={styles.MyReviewRestaurantBox}>
                <Text style={styles.myReviewRestaurantTitle}>{item.title}</Text>
                <Pressable style={styles.MyReviewRestaurantShare}>
                  <Image
                    source={require(`../assets/icons/dot.png`)}
                    style={{ width: 18, height: 18 }}
                  />
                </Pressable>
              </View>
              <Text style={styles.myReviewRestaurantAdress}>{item.adress}</Text>
              <Text style={styles.myReviewRestaurantTag}>{item.tag}</Text>
              <View style={{ width: 40, height: 20, flexWrap: 'wrap', marginTop: 10 }}>
                <Image
                  source={require(`../assets/icons/star.png`)}
                  style={{ width: 18, height: 18 }}
                />
                <Text style={styles.myReviewRestaurantScore}>1</Text>
              </View>
            </View>
          </MyReviewRestaurantItem>
          <View style={styles.myReviewContent}>
            <Text style={styles.myReviewContentText}>{item.content}</Text>
          </View>
        </MyReviewContainer>
      </>
    );
  };

  return (
    <Wrapper>
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
        <Pressable
          style={styles.BackIcon}
          onPress={() => {
            navigation.navigate('MyPage');
          }}>
          <Image source={require(`../assets/icons/Left.png`)}></Image>
        </Pressable>
      </Animated.View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={myReviewData}
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
