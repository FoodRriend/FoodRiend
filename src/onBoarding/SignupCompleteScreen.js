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
      headerStyle: { borderBottomWidth: 0.2, borderColor: '#dfe2e5' },
      headerLeft: () => <></>,
    });
  };

  headerStyle();

  return (
    <Wrapper>
      <Image
        style={{
          ...Platform.select({
            ios: {
              width: '100%',
              height: 430,
            },
            android: {
              width: '100%',
              height: 390,
            },
          }),
        }}
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
    ...Platform.select({
      ios: {
        fontSize: 22,
      },
      android: {
        fontSize: 19,
      },
    }),
    fontWeight: 'bold',
    color: '#2e3e5c',
    paddingLeft: 3,
  },
  signupEndContentBox: {
    width: 200,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
      android: {
        paddingTop: 10,
      },
    }),
  },
  signupEndContent: {
    ...Platform.select({
      ios: {
        fontSize: 17,
      },
      android: {
        fontSize: 15,
      },
    }),
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#7e8389',
  },
  signupEndButton: {
    ...Platform.select({
      ios: {
        marginTop: 38,
        width: 327,
        height: 56,
      },
      android: {
        marginTop: 0,
        width: 313,
        height: 48,
      },
    }),
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
  ...Platform.select({
    ios: {
      paddingTop: 12,
    },
    android: {
      paddingTop: 0,
    },
  }),
  backgroundColor: '#fff',
  flex: 1,
  alignItems: 'center',
});

const SignupEndTextContainer = styled.View({
  width: 390,
  height: 160,
  ...Platform.select({
    ios: {
      height: 160,
    },
    android: {
      height: 140,
    },
  }),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
