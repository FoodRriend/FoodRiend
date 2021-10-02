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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NoticeDetailScreen = () => {
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
        <Pressable
          style={styles.backIcon}
          onPress={() => {
            navigation.navigate('Notice');
          }}>
          <Image source={require(`../assets/icons/Left.png`)}></Image>
        </Pressable>
      ),
    });
  };

  headerStyle();

  return (
    <Wrapper>
      <NoticeDetailListContainer>
        <View style={{ justifyContent: 'center' }}>
          <View style={{ width: '82%', marginLeft: 35 }}>
            <View style={{ width: '100%', minHeight: '50%' }}>
              <Text style={styles.noticeDetailCatagory}>
                푸드렌드에서 100만 회원을 돌파기념으로 신라호텔 조식 무료 이용권을 10분께 드려요
              </Text>
              <Text style={styles.noticeDetailDateCatagory}>2021.09.05</Text>
            </View>
          </View>
        </View>
      </NoticeDetailListContainer>
      <View style={styles.noticeDetailContent}>
        <Text style={styles.noticeDetailContentText}>
          푸드렌드가 출시된지 100일 만에 100만 회원이 이용해주셨습니다. {'\n'}
          {'\n'}푸드렌드 사용자 중 10분을 추첨하여 신라호텔 조식 무료 이용권을 10분께 선물로
          드리려고 합니다!! {'\n'}
          {'\n'}참여방법은 9월 8일 ~ 9월 21일 동안 인스타그램에 #푸드렌드 #친구랑함께 해시태그를
          남겨주시면 됩니다
        </Text>
      </View>
    </Wrapper>
  );
};

export default NoticeDetailScreen;

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
  noticeDetailCatagory: {
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
  noticeDetailDateCatagory: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#aaacae',
    marginTop: 4,
  },
  noticeDetailContent: {
    width: '82%',
    height: '84.7%',
    marginLeft: 35,
    marginTop: 16,
  },
  noticeDetailContentText: {
    fontSize: 15,
    fontWeight: '300',
  },
});

const Wrapper = styled.View({
  width: '100%',
  height: '100%',
  display: 'flex',
  backgroundColor: '#fff',
  paddingTop: 16,
});

const NoticeDetailListContainer = styled.View({
  width: '100%',
  height: 78,
  backgroundColor: '#fff',
  borderBottomColor: '#dfe2e5',
  borderBottomWidth: 0.6,
});
