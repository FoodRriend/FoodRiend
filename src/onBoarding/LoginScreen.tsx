import React, { useState, useEffect } from 'react';
import styled from '@emotion/native';
import { Text, Pressable, StyleSheet, Image, View, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KakaoOAuthToken, login } from '@react-native-seoul/kakao-login';
import axios from 'axios';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();

  const [result, setResult] = useState<string>('');

  const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();

    setResult(JSON.stringify(token));
  };

  const onPress = async () => {
    // await signInWithKakao();
    signInWithKakao();
    navigation.navigate('Terms');
  };

  useEffect(() => {
    // console.log(JSON.parse(result));
  }, [result]);

  return (
    <Wrapper>
      <View style={styles.platformWrapper}>
        <LoginTitleContainer>
          <Image
            style={styles.TitleImage}
            source={require('../assets/images/onBoading/login/FoodRiend.png')}
            resizeMode="contain"
          />
          <Text style={styles.TitleText}>맛있는 순간을 함께 하다!</Text>
        </LoginTitleContainer>
        <LoginImageContainer>
          <Image
            source={require('../assets/images/onBoading/login/loginImage1.png')}
            style={styles.loginImage1}
          />
          <LoginImageItems>
            <Image
              source={require('../assets/images/onBoading/login/loginImage2.png')}
              style={styles.loginImage2}
            />
            <Image
              source={require('../assets/images/onBoading/login/loginImage3.png')}
              style={styles.loginImage3}
            />
          </LoginImageItems>
          <LoginImageItems>
            <Image
              source={require('../assets/images/onBoading/login/loginImage4.png')}
              style={styles.loginImage4}
            />
            <Image
              source={require('../assets/images/onBoading/login/loginImage5.png')}
              style={styles.loginImage5}
            />
          </LoginImageItems>
          <Image
            source={require('../assets/images/onBoading/login/loginImage6.png')}
            style={styles.loginImage6}
          />

          <TouchableOpacity onPress={onPress}>
            <Image
              source={require('../assets/images/onBoading/login/kakao_login.png')}
              style={styles.kakaoLoginBtn}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <Image
            source={require('../assets/images/onBoading/login/Rectangle.png')}
            style={{
              width: '95%',
              height: 95,
              position: 'absolute',
              bottom: 83,
            }}
          />
        </LoginImageContainer>
      </View>
    </Wrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  TitleImage: {
    width: 170,
    height: 70,
  },
  TitleText: {
    color: '#2a3037',
    ...Platform.select({
      ios: {
        fontSize: 20,
      },
      android: {
        fontSize: 20,
        fontWeight: '600',
      },
    }),
  },
  loginImage1: {
    borderRadius: 10,
    width: '95%',
    height: 95,
    top: -65,
  },
  loginImage2: {
    borderRadius: 10,
    width: '43%',
    height: 192,
    top: -55,
  },
  loginImage3: {
    borderRadius: 10,
    width: '49%',
    height: 192,
    top: -55,
    marginLeft: 10,
  },
  loginImage4: {
    borderRadius: 10,
    width: '49%',
    height: 120,
    top: -45,
  },
  loginImage5: {
    borderRadius: 10,
    width: '43%',
    height: 120,
    top: -45,
    marginLeft: 10,
  },
  loginImage6: {
    borderRadius: 10,
    width: '95%',
    height: 95,
    top: -35,
  },
  kakaoLoginBtn: {
    borderRadius: 30,
    height: 48,
    ...Platform.select({
      ios: {
        width: 300,
      },
      android: {
        width: '100%',
        marginTop: 5,
      },
    }),
    top: -18,
    alignSelf: 'center',
    left: -9,
  },
  platformWrapper: {
    ...Platform.select({
      ios: {
        width: '100%',
        height: '100%',
      },
      android: {
        width: '98%',
        height: '100%',
      },
    }),
    justifyContent: 'center',
  },
});

const Wrapper = styled.View({
  position: 'relative',
  // paddingTop: 44,
  flex: 1,
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
});

const LoginTitleContainer = styled.View({
  // paddingTop: 80,
  width: '60%',
  paddingLeft: 18,
  backgroundColor: '#fff',
});

const LoginImageContainer = styled.View({
  paddingTop: 10,
  paddingLeft: 18,
  zIndex: -1,
});

const LoginImageItems = styled.View({
  display: 'flex',
  flexDirection: 'row',
});
