import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import { Text, View, Pressable, StyleSheet, TextInput, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyFriendListScreen = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '친구 목록',
      headerLeft: () => (
        <Pressable
          style={styles.BackIcon}
          onPress={() => {
            navigation.navigate('MyPage');
          }}>
          <Image source={require(`../assets/icons/Left.png`)}></Image>
        </Pressable>
      ),
    });
  };

  headerStyle();

  const [myFriendSearchInput, setMyFriendSearchInput] = useState('');

  const handleSearchInput = useCallback(
    (e) => {
      setMyFriendSearchInput(e);
      console.log(e);
    },
    [myFriendSearchInput],
  );

  const friendListData = [
    { name: '나타샤', friend: true },
    { name: '김베드로', friend: false },
    { name: '박지현', friend: true },
    { name: '최현', friend: false },
    { name: '황철민', friend: true },
    { name: '김베드로', friend: false },
    { name: '김대먼', friend: true },
    { name: '김대먼', friend: true },
    { name: '크리스티나', friend: false },
    { name: '크리스티나', friend: false },
  ];

  const fomatListData = (data) => {
    let friendTrueData = data.filter((el) => {
      return el.friend === true;
    });
    let friendFalseData = data.filter((el) => {
      return el.friend === false;
    });
    let fomatData = [...friendTrueData, ...friendFalseData];

    return fomatData;
  };

  const renderItem = ({ item, index }) => {
    if (item.friend) {
      return (
        <MyFriendListItem>
          <Image
            style={styles.myFriendListImageItem}
            source={require(`../assets/images/onBoading/friends/friend7.png`)}
          />
          <Text style={styles.myFriendListName}>{item.name}</Text>
          <Pressable style={styles.myFriendListRemove}>
            <Text style={styles.myFriendListRemoveText}>삭제</Text>
          </Pressable>
        </MyFriendListItem>
      );
    }

    if (fomatListData(friendListData)[index - 1].friend !== item.friend) {
      return (
        <>
          <Text style={styles.myFriendListBar}>회원님을 위한 추천</Text>
          <MyFriendListItem>
            <Image
              style={styles.myFriendListImageItem}
              source={require(`../assets/images/onBoading/friends/friend4.png`)}
            />
            <Text style={styles.myFriendListName}>{item.name}</Text>
            <Pressable style={styles.myFriendListAdd}>
              <Text style={styles.myFriendListAddText}>친구요청</Text>
            </Pressable>
          </MyFriendListItem>
        </>
      );
    }

    if (!item.friend) {
      return (
        <MyFriendListItem>
          <Image
            style={styles.myFriendListImageItem}
            source={require(`../assets/images/onBoading/friends/friend4.png`)}
          />
          <Text style={styles.myFriendListName}>{item.name}</Text>
          <Pressable style={styles.myFriendListAdd}>
            <Text style={styles.myFriendListAddText}>친구요청</Text>
          </Pressable>
        </MyFriendListItem>
      );
    }
  };

  return (
    <Wrapper>
      <MyFriendListSearchBox>
        <Image
          source={require(`../assets/icons/search_gray.png`)}
          style={styles.myFriendSearchIcon}
        />
        <TextInput
          autoCapitalize={'none'}
          style={styles.myFriendSheachInput}
          placeholder="이름/닉네임/연락처 검색"
          value={myFriendSearchInput}
          onChangeText={handleSearchInput}
        />
      </MyFriendListSearchBox>
      <MyFriendListContainer>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={fomatListData(friendListData)}
          renderItem={renderItem}
        />
      </MyFriendListContainer>

      <View style={styles.whiteBlank}></View>
    </Wrapper>
  );
};

export default MyFriendListScreen;

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
  myFriendSearchIcon: {
    width: 15,
    height: 15,
    marginVertical: 10,
    marginLeft: 10,
  },
  myFriendSheachInput: {
    width: '80%',
    height: '100%',
    marginLeft: 16,
    fontSize: 13,
    fontWeight: 'normal',
    color: '#2A3037',
  },
  myFriendListImageItem: {
    width: 56,
    height: 56,
    marginVertical: 10,
  },
  myFriendListName: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#2a3037',
    paddingVertical: 20,
    position: 'absolute',
    left: 82,
  },
  myFriendListRemove: {
    width: 44,
    height: 26,
    borderRadius: 18,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myFriendListRemoveText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2a3037',
  },
  myFriendListAdd: {
    width: 62,
    height: 26,
    borderRadius: 18,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myFriendListAddText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2a3037',
  },
  myFriendListText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2a3037',
  },
  whiteBlank: {
    width: '100%',
    height: '80%',
    position: 'absolute',
    backgroundColor: '#fff',
    top: '101.8%',
    zIndex: 1,
  },
  myFriendListBar: {
    alignSelf: 'flex-start',
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
    marginLeft: 14,
    marginTop: 23,
    marginBottom: 10,
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

const MyFriendListSearchBox = styled.View({
  width: 335,
  height: 45,
  borderRadius: 10,
  backgroundColor: '#f0f0f0',
  justifyContent: 'center',
  flexWrap: 'wrap',
});

const MyFriendListContainer = styled.View({
  width: 335,
  marginTop: 33,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: '#fe554a75',
  backgroundColor: '#ffffff',
  shadowColor: '#fe554a',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.6,
  shadowRadius: 4.65,
  elevation: 6,
  height: '87.8%',
  alignItems: 'center',
});

const MyFriendListItem = styled.View({
  marginHorizontal: 14,
  borderBottomWidth: 1,
  borderBottomColor: '#DFE2E6',
  width: 280,
  height: 80,
  justifyContent: 'center',
  flexWrap: 'wrap',
  flexWrap: 'wrap',
  alignContent: 'space-between',
});
