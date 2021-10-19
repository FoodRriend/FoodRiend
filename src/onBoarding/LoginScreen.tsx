import React, { useState, useEffect } from 'react';
import styled from '@emotion/native';
import {
  Text,
  Pressable,
  StyleSheet,
  Image,
  View,
  Platform,
  TouchableOpacity,
  PermissionsAndroid,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  KakaoOAuthToken,
  login,
  getProfile as getKakaoProfile,
  KakaoProfile,
  // unlink,
} from '@react-native-seoul/kakao-login';
import axios from 'axios';
import Contacts from 'react-native-contacts';

import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { loginTypeUpdate, kakaoNameUpdate, kakaoIdUpdate } from '../redux/userSlice';

import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const [contacts, setContacts] = useState<string>('');
  const [kakaoId, setKakaoId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [loginType, setLoginType] = useState<string>('');

  const [token, setToken] = useState('');

  // useEffect(() => {}, [contacts]);

  useEffect(() => {
    dispatch(kakaoIdUpdate(Number(kakaoId)));
  }, [kakaoId]);

  useEffect(() => {
    dispatch(kakaoNameUpdate(name));
  }, [name]);

  useEffect(() => {
    dispatch(loginTypeUpdate(loginType));
  }, [loginType]);

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });
  }, []);

  const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();
    // 카카오 토큰 : 필요시 나중에 수정
  };

  const getProfile = async (): Promise<void> => {
    const profile: KakaoProfile = await getKakaoProfile();
    setKakaoId(profile.id);
    setName(profile.nickname);
    setLoginType('Kakao');
  };

  const getList = async () => {
    let contacts = await Contacts.getAll();
    // console.log(contacts, 'contacts???');
  };

  const userTokenHandler = async () => {
    const userData = await AsyncStorage.getItem('accessToken');
    if (userData) {
      const token = JSON.parse(userData);
      setToken(token.accessToken);
    }
  };

  const onPress = async () => {
    if (Platform.OS === 'android') {=
      //   await signInWithKakao();
      //   await getProfile();
      //   PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      //     title: 'Contacts',
      //     message: 'This app would like to view your contacts.',
      //     buttonPositive: 'Please accept bare mortal',
      //   }).then(() => {
      //     getList();
      //   });
      navigation.navigate('Terms');
    } else {
      //소셜 임시 대체
      setKakaoId('1111111111');
      setName('오우영');
      setLoginType('Kakao');
      getList();
      navigation.navigate('Terms');
    }
  };

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
          <View style={styles.loginImage1}>
            <Image
              source={require('../assets/images/onBoading/login/loginImage1.png')}
              style={{ width: '100%', height: '100%', borderRadius: 10 }}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 10,
              width: '95%',
              height: '34%',
            }}>
            <Image
              source={require('../assets/images/onBoading/login/loginImage2.png')}
              style={styles.loginImage2}
            />
            <Image
              source={require('../assets/images/onBoading/login/loginImage3.png')}
              style={styles.loginImage3}
            />
          </View>

          <View
            style={{
              width: '95%',
              height: '20%',
              display: 'flex',
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Image
              source={require('../assets/images/onBoading/login/loginImage4.png')}
              style={styles.loginImage4}
            />
            <Image
              source={require('../assets/images/onBoading/login/loginImage5.png')}
              style={styles.loginImage5}
            />
          </View>
          <View style={styles.loginImage6}>
            <Image
              source={require('../assets/images/onBoading/login/loginImage6.png')}
              style={{ width: '100%', height: '100%', borderRadius: 10 }}
            />
            <Image
              source={require('../assets/images/onBoading/login/Rectangle.png')}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
                position: 'absolute',
                top: 0,
              }}
            />
          </View>
        </LoginImageContainer>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={require('../assets/images/onBoading/login/kakao_login.png')}
            resizeMode="contain"
            style={styles.kakaoLoginBtn}
          />
        </TouchableOpacity>
      </View>
    </Wrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  TitleImage: {
    width: '80%',
    height: '60%',
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
    width: '95%',
    height: '18%',
  },
  loginImage2: {
    borderRadius: 10,
    width: '45.5%',
    height: '100%',
  },
  loginImage3: {
    borderRadius: 10,
    width: '51.5%',
    height: '100%',
    marginLeft: '3%',
  },
  loginImage4: {
    borderRadius: 10,
    width: '51.5%',
    height: '100%',
  },
  loginImage5: {
    borderRadius: 10,
    width: '45.5%',
    height: '100%',
    marginLeft: '3%',
  },
  loginImage6: {
    width: '95%',
    height: '18%',
    marginTop: 10,
  },
  kakaoLoginBtn: {
    height: 50,
    width: '100%',
    alignItems: 'center',
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
  },
});

const Wrapper = styled.View({
  ...Platform.select({
    ios: {
      marginTop: 30,
    },
  }),
  position: 'relative',
  flex: 1,
  alignItems: 'center',
  backgroundColor: '#fff',
});

const LoginTitleContainer = styled.View({
  width: '60%',
  height: '15%',
  paddingLeft: 18,
  backgroundColor: '#fff',
  position: 'absolute',
  top: '5%',
});

const LoginImageContainer = styled.View({
  paddingLeft: 18,
  zIndex: -1,
  width: '100%',
  height: '73%',
  marginTop: '23%',
});
