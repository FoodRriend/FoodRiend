import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import {
  Text,
  View,
  Pressable,
  StyleSheet,
  Image,
  Platform,
  ActivityIndicator,
  ListRenderItem,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '@/redux/hooks';
import SearchTextInput from './components/SearchTextInput';
import { FlatList } from 'react-native-gesture-handler';
import foodTypeImage from '@/assets/images/onBoading/favFood';
import foodStyleFile from '@/assets/images/onBoading/addStyle';
import { shopInfoType, userType } from '@/redux/searchSlice';

const ResultSearchScreen: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [showFriendList, setShowFriendList] = useState<boolean>(false);
  const navigation = useNavigation();
  const searchData = useAppSelector((state) => state.search);
  const headerStyle = () => {
    navigation.setOptions({
      headerShown: false,
    });
  };

  headerStyle();

  //   interface IFoodStyle {
  //     foodStyle: '지역맛집탐험가' | '새로운음식모험가';
  //   }
  const usersRenderItem: ListRenderItem<userType> = ({ item, index }) => {
    // console.log(item.foodType);
    const foodStyle = item.foodStyle.replace(/ /g, '') as '지역맛집탐험가';
    const foodType = item.foodType as '고기';

    if (index >= 2 && !showFriendList) {
      return <View></View>;
    }

    return (
      <View style={{ marginTop: 20, display: 'flex', flexDirection: 'row' }}>
        <View style={{ display: 'flex', flexDirection: 'row', width: '50%' }}>
          <View style={{ marginRight: 10, display: 'flex', justifyContent: 'center' }}>
            <Image
              source={require('../assets/images/onBoading/friends/friend2.png')}
              style={{ width: 70, height: 70 }}
            />
          </View>
          <View>
            <Text>{item.name}</Text>
            <View style={{ display: 'flex', flexDirection: 'row', height: '20%' }}>
              <Image
                source={foodTypeImage[foodType]}
                style={{ width: 33, height: 62, resizeMode: 'contain', marginRight: 5 }}
              />
              <Image
                source={foodStyleFile[foodStyle]}
                style={{ width: 33, resizeMode: 'contain', marginRight: 5 }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            width: '50%',
          }}>
          <View
            style={{
              width: 70,
              height: 23,
              borderRadius: 15,
              backgroundColor: '#dfe2e5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 5,
            }}>
            <Text style={{ fontSize: 12, color: '#2a3037' }}>게시글 {item.commentCount}</Text>
          </View>
          <View
            style={{
              width: 70,
              height: 23,
              borderRadius: 15,
              backgroundColor: '#dfe2e5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ fontSize: 12, color: '#2a3037' }}>리뷰 {item.commentCount}</Text>
          </View>
        </View>
      </View>
    );
  };

  const shopRenderItem: ListRenderItem<shopInfoType> = ({ item, index }) => {
    const loaction = item.location.substring(item.location.indexOf(' '), item.location.length);
    let imgStyleZIndex: any = null;
    let friendListLength = 0;
    let leakFriendList = 0;
    if (item.friends?.length !== undefined) {
      imgStyleZIndex = item.friends?.length * 30;
      friendListLength = item.friends.length;
      if (friendListLength >= 4) {
        leakFriendList = friendListLength - 4;
        imgStyleZIndex = imgStyleZIndex - leakFriendList * 30;
      }
    }
    return (
      <View style={{ width: '90%', marginTop: 10 }}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ width: '70%', justifyContent: 'center' }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <Text style={{ fontWeight: '600', fontSize: 15, marginRight: 15 }}>{item.title}</Text>
              <Image
                source={require('../assets/icons/star.png')}
                style={{ marginRight: 5, marginBottom: 2 }}
              />
              <Text>{item.aveRating}</Text>
            </View>
            <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: '#AAACAE', fontSize: 12 }}>
              {loaction.trim()}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '40%',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            {item.friends &&
              item.friends?.map((el, index) => {
                console.log(index);
                if (index > 3) {
                  return null;
                } else {
                  imgStyleZIndex -= 30;
                  return (
                    <Image
                      source={require('../assets/images/onBoading/friends/friend4.png')}
                      style={{ zIndex: friendListLength - index, left: imgStyleZIndex }}
                    />
                  );
                }
              })}
            {leakFriendList !== 0 && (
              <Text style={{ position: 'absolute', zIndex: 999, color: 'red' }}>
                +{leakFriendList}
              </Text>
            )}
          </View>
        </View>
        <View style={{ width: '110%', left: 1 }}>
          <Image
            source={require('../assets/images/feed/Restaurant2.png')}
            style={{ width: '100%', height: 190, resizeMode: 'contain' }}
          />
        </View>
      </View>
    );
  };

  const handleSearchInput = useCallback(
    (e) => {
      setSearchInput(e);
    },
    [searchInput],
  );

  const onSubmitHandler = () => {
    setSearchInput('');
  };

  if (searchData.loading) {
    return (
      <View style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <Wrapper>
      <View style={{ width: '90%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ marginRight: 15 }}>
          <Pressable
            onPress={() => {
              navigation.navigate('Search');
            }}>
            <Image source={require(`../assets/icons/Left.png`)} style={styles.backPressIcon} />
          </Pressable>
        </View>
        <SearchTextInput
          searchInput={searchInput}
          onSubmitHandler={onSubmitHandler}
          handleSearchInput={handleSearchInput}
          styleAndroidMargin={5}
          styleIosMargin={45}
          styleAndroidWidth={340}
        />
      </View>
      <View style={{ width: '95%' }}>
        {searchData.data?.isUserData && (
          <FlatList data={searchData.data.data.user} renderItem={usersRenderItem} />
        )}
      </View>
      <View style={{ width: '95%', alignItems: 'flex-end' }}>
        <Pressable onPress={() => setShowFriendList(!showFriendList)}>
          <Text style={{ color: '#0057FF' }}>{showFriendList ? '접기' : '친구 더보기'}</Text>
        </Pressable>
      </View>
      <View
        style={{
          borderTopColor: '#DFE2E6',
          borderStyle: 'solid',
          borderTopWidth: 1,
          borderRadius: 5,
          width: '100%',
          marginTop: 5,
          alignItems: 'center',
        }}>
        {searchData.data?.isShopData && (
          <FlatList
            style={{ width: '95%' }}
            data={searchData.data.data.shopInfo}
            renderItem={shopRenderItem}
          />
        )}
      </View>
    </Wrapper>
  );
};

export default ResultSearchScreen;

const styles = StyleSheet.create({
  backPressIcon: {
    ...Platform.select({
      ios: {
        marginTop: 45,
      },
      android: {
        marginTop: 5,
      },
    }),
  },
});

const Wrapper = styled.View({
  paddingTop: 17,
  backgroundColor: '#fff',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});
