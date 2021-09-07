import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import { Text, View, Pressable, StyleSheet, TextInput, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyScreen = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: false,
    });
  };

  headerStyle();

  const myScreenData = [
    {
      address: '서울시 종로구',
      name: '샤쿠란샤쿠란',
      score: 1,
    },
    {
      address: '서울시 강남구',
      name: '샤쿠란샤쿠란샤쿠란샤쿠란샤쿠란샤쿠란샤쿠란샤쿠란샤쿠란샤쿠란샤쿠란',
      score: 5,
    },
    { address: '서울시 서초구', name: '샤쿠란', score: 3 },
    { address: '서울시 서초구', name: '샤쿠란', score: 4 },
    { address: '서울시 종로구', name: '팬케익', score: 2 },
  ];

  const renderItem = ({ item, index }) => {
    if (index === 0) {
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
    console.log(item.name);
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
          <Image style={styles.myScreenInfoAlertImage} />
          <View style={styles.myScreenInfoFriend}>
            <Text style={{ fontSize: 14, fontWeight: '500', color: '#2a3037' }}>친구</Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate('MyFriendList')}
            style={{ position: 'relative', bottom: 5 }}>
            <Text style={{ fontSize: 17, fontWeight: '500', color: '#3e5481' }}>5</Text>
          </Pressable>
        </View>
      </MyScreenInfoContainer>
      <MyScreenFavInfoContainer>
        <View style={styles.myScreenFavInfoItem}>
          <Text style={styles.myScreenFavInfoNumber}>232</Text>
          <Text style={styles.myScreenFavInfoTouchText}>먹어봤어요</Text>
        </View>
        <View style={styles.myScreenFavInfoItem}>
          <Text style={styles.myScreenFavInfoNumber}>33</Text>
          <Text style={styles.myScreenFavInfoText}>가보고싶어요</Text>
        </View>
        <View style={styles.myScreenFavInfoItem}>
          <Text style={styles.myScreenFavInfoNumber}>5</Text>
          <Text style={styles.myScreenFavInfoText}>인생맛집</Text>
        </View>
      </MyScreenFavInfoContainer>
      <MyScreenRestaurantContainer>
        {/* <View style={{ width: '100%', height: 37, borderWidth: 1, borderColor: 'blue' }}></View> */}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={myScreenData}
          renderItem={renderItem}
          numColumns={numColumns}
        />
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
    width: 135,
    height: 95,
    paddingLeft: 9,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  myScreenInfoAlertImage: {
    width: 28,
    height: 28,
    borderColor: 'blue',
    borderWidth: 1,
  },
  myScreenInfoFriend: {
    width: 64,
    height: 20,
    borderRadius: 15,
    backgroundColor: '#dfe2e5',
    alignItems: 'center',
    justifyContent: 'center',
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
});

const Wrapper = styled.View({
  paddingTop: 44,
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
  paddingHorizontal: 17,
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
});
