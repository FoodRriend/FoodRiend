import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import { Text, View, Pressable, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Test1 = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '프로필 수정',
      headerLeft: () => <></>,
    });
  };

  headerStyle();

  const onPress = () => {
    navigation.navigate('MyEdit');
  };

  return (
    <Wrapper>
      <Pressable onPress={onPress}>
        <Text>마이페이지 수정</Text>
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
