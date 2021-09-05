import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import { Text, View, StyleSheet, TextInput, Image, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignupCompleteScreen = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '회원가입',
      headerLeft: () => <></>,
    });
  };

  headerStyle();

  return (
    <Wrapper>
      <Image
        style={{ width: 390, height: 430 }}
        resizeMode="cover"
        source={require(`../assets/images/onBoading/signupComplete.png`)}
      />
      <SignupEndTextContainer>
        <Text style={styles.signupEndTitle}>회원가입 완료</Text>
        <View style={styles.signupEndContentBox}>
          <Text style={styles.signupEndContent}>친구와 함께</Text>
          <Text style={styles.signupEndContent}>맛있는 순간을 함께 해요!</Text>
        </View>
      </SignupEndTextContainer>
      <Pressable
        onPress={() => {
          navigation.navigate('Feed');
        }}
        style={styles.signupEndButton}>
        <Text style={styles.signupEndButtonText}>이용하러 가기</Text>
      </Pressable>
    </Wrapper>
  );
};

export default SignupCompleteScreen;

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
  signupEndTitle: {
    width: 129,
    height: 32,
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#2e3e5c',
    paddingLeft: 3,
  },
  signupEndContentBox: {
    width: 200,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  signupEndContent: {
    fontSize: 17,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#7e8389',
  },
  signupEndButton: {
    marginTop: 38,
    width: 327,
    height: 56,
    borderRadius: 32,
    backgroundColor: '#fe554a',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupEndButtonText: {
    fontSize: 15,
    fontWeight: '900',
    fontStyle: 'normal',
    color: '#ffffff',
  },
});

const Wrapper = styled.View({
  paddingTop: 12,
  backgroundColor: '#fff',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});

const SignupEndTextContainer = styled.View({
  width: 390,
  height: 160,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
