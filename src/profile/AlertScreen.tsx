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
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AlertScreen: React.FC = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '알림',
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

  const alertData = [
    {
      content: '박지현님이 서울시 종로구에 새로운 치킨 가게를 방문했습니다',
      time: '4시간',
      friend: true,
    },
    {
      content: '박지현님이 서울시 종로구에 새로운 치킨 가게를 방문했습니다',
      time: '4시간',
      friend: true,
    },
    {
      content: '쿨럭쿨럭님이 친구요청을 보냈습니다.',
      time: '4시간',
      friend: false,
    },
    {
      content: '박지현님이 서울시 종로구에 새로운 치킨 가게를 방문했습니다',
      time: '4시간',
      friend: true,
    },
    {
      content: '쿨럭쿨럭님이 친구요청을 보냈습니다.',
      time: '4시간',
      friend: false,
    },
    {
      content: '박지현님이 서울시 종로구에 새로운 치킨 가게를 방문했습니다',
      time: '4시간',
      friend: true,
    },
  ];

  interface IAlertRenderItemProps {
    friend: boolean;
    content: string;
  }

  const renderItem = ({ item, index }: { item: IAlertRenderItemProps; index: number }) => {
    if (item.friend) {
      return (
        <AlertScreenListItem>
          <Image
            style={{ width: 48, height: 48, marginLeft: 16 }}
            source={require(`../assets/images/onBoading/friends/friend6.png`)}
          />
          <View
            style={{
              width: '78%',
              height: '100%',
              marginLeft: 14,
              justifyContent: 'space-around',
            }}>
            <Text style={{ fontSize: 12, fontWeight: 'normal', color: '#2A3037' }}>
              {item.content}
            </Text>
            <Text style={{ fontSize: 12, fontWeight: '300', color: '#aaacae' }}>4시간</Text>
          </View>
        </AlertScreenListItem>
      );
    }
    if (!item.friend) {
      return (
        <AlertScreenListItem>
          <Image
            style={{ width: 48, height: 48, marginLeft: 16 }}
            source={require(`../assets/images/onBoading/friends/friend6.png`)}
          />
          <View
            style={{
              width: '60%',
              height: '100%',
              marginLeft: 14,
              justifyContent: 'space-around',
            }}>
            <Text style={{ fontSize: 12, fontWeight: 'normal', color: '#2A3037' }}>
              {item.content}
            </Text>
            <Text style={{ fontSize: 12, fontWeight: '300', color: '#aaacae' }}>4시간</Text>
          </View>
          <Pressable style={styles.alertListButton}>
            <Text style={{ fontSize: 12, fontWeight: '500', color: '#fcfcfc' }}>수락</Text>
          </Pressable>
        </AlertScreenListItem>
      );
    }
    return <></>;
  };

  return (
    <Wrapper>
      <FlatList showsVerticalScrollIndicator={false} data={alertData} renderItem={renderItem} />
    </Wrapper>
  );
};

export default AlertScreen;

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
  alertListButton: {
    width: 44,
    height: 26,
    borderRadius: 18,
    backgroundColor: '#fe554a',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
});

const Wrapper = styled.View({
  backgroundColor: '#fff',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});

const AlertScreenListItem = styled.View({
  width: '100%',
  height: 61,
  marginTop: 12,
  justifyContent: 'center',
  flexWrap: 'wrap',
});
