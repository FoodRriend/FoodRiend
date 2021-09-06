import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import { Text, View, Pressable, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Test1 = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '테스트 화면',
      headerLeft: () => <></>,
    });
  };

  headerStyle();

  const onPress1 = () => {
    navigation.navigate('MyEdit');
  };

  const onPress2 = () => {
    navigation.navigate('MyFriendList');
  };

  const onPress3 = () => {
    navigation.navigate('MySettings');
  };

  return (
    <Wrapper>
      <Pressable onPress={onPress1}>
        <Text>마이페이지 수정</Text>
      </Pressable>
      <Pressable onPress={onPress2}>
        <Text style={{ paddingTop: 30 }}>친구 목록</Text>
      </Pressable>
      <Pressable onPress={onPress3}>
        <Text style={{ paddingTop: 30 }}>설정</Text>
      </Pressable>
    </Wrapper>
  );
};

export default Test1;

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
});

const Wrapper = styled.View({
  paddingTop: 36,
  backgroundColor: '#fff',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});
