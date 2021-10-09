import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import {
  Text,
  View,
  Pressable,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NoticeScreen: React.FC = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '공지사항',
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
          style={styles.backIcon}
          onPress={() => {
            navigation.navigate('Setting');
          }}>
          <Image source={require(`../assets/icons/Left.png`)}></Image>
        </TouchableOpacity>
      ),
    });
  };

  headerStyle();

  const noticeData = [
    {
      content: '푸드렌드에서 100만 회원을 돌파기념으로 신라 호텔 조식 무료 이용권을 10분께 드려요',
      date: '2021.09.05',
    },
    {
      content: '피드 화면에서 원하는 친구의 게시글을 선택해서 볼 수 있어요',
      date: '2021.09.03',
    },
    {
      content: '푸드렌드 iOS 버전 지원 안내',
      date: '2021.09.03',
    },
  ];

  interface INoticeProps {
    content: string;
    date: string;
  }

  const renderItem = ({ item, index }: { item: INoticeProps; index: number }) => {
    if (index === 0) {
      return (
        <>
          <View style={{ width: '100%', height: 16 }}></View>
          <NoticeListContainer>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('NoticeDetail');
              }}
              style={{ flexWrap: 'wrap', alignContent: 'space-between', justifyContent: 'center' }}>
              <View style={{ width: '80%', marginLeft: 35 }}>
                <View style={{ width: '100%', minHeight: '50%' }}>
                  <Text style={styles.noticeCatagory}>{item.content}</Text>
                  <Text style={styles.noticeDateCatagory}>{item.date}</Text>
                </View>
              </View>
              <View style={styles.noticeButtonItem}>
                <Image source={require('../assets/icons/click.png')} style={styles.noticeButton} />
              </View>
            </TouchableOpacity>
          </NoticeListContainer>
        </>
      );
    }
    return (
      <NoticeListContainer>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('NoticeDetail');
          }}
          style={{ flexWrap: 'wrap', alignContent: 'space-between', justifyContent: 'center' }}>
          <View style={{ width: '80%', marginLeft: 35 }}>
            <View style={{ width: '100%', minHeight: '50%' }}>
              <Text style={styles.noticeCatagory}>{item.content}</Text>
              <Text style={styles.noticeDateCatagory}>{item.date}</Text>
            </View>
          </View>
          <View style={styles.noticeButtonItem}>
            <Image source={require('../assets/icons/click.png')} style={styles.noticeButton} />
          </View>
        </TouchableOpacity>
      </NoticeListContainer>
    );
  };

  return (
    <Wrapper>
      <FlatList showsVerticalScrollIndicator={false} data={noticeData} renderItem={renderItem} />
    </Wrapper>
  );
};

export default NoticeScreen;

const styles = StyleSheet.create({
  backIcon: {
    width: 50,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 13,
    paddingRight: 20,
  },
  noticeCatagory: {
    ...Platform.select({
      ios: {
        fontWeight: '600',
      },
      android: {
        fontWeight: 'bold',
      },
    }),
    fontSize: 15,
    width: '100%',
  },
  noticeDateCatagory: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#aaacae',
    marginTop: 4,
  },
  noticeButton: {
    width: 8,
    height: 15,
  },
  noticeButtonItem: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Wrapper = styled.View({
  width: '100%',
  height: '100%',
  display: 'flex',
  backgroundColor: '#fff',
});

const NoticeListContainer = styled.View({
  width: '100%',
  height: 78,
  backgroundColor: '#fff',
  borderBottomColor: '#dfe2e5',
  borderBottomWidth: 0.6,
});
