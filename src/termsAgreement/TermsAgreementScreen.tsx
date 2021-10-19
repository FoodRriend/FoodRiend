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
  ActivityIndicator,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BouncyCheckbox from 'react-native-bouncy-checkbox';

import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { kakaoLoginInStorage } from '../redux/userSlice';

// import AsyncStorage from '@react-native-async-storage/async-storage';

const TermsAgreementScreen: React.FC = () => {
  const navigation = useNavigation();

  const dispatch = useAppDispatch();
  const { kakaoId, loginType, loading, isNewMember } = useAppSelector((state) => state.users);

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '약관 동의',
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
            navigation.navigate('Login');
          }}>
          <Image source={require(`../assets/icons/Left.png`)}></Image>
        </TouchableOpacity>
      ),
    });
  };

  headerStyle();

  const [checkbox0, setCheckbox0] = useState(false);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);

  const [checkBtn, setCheckBtn] = useState(false);

  const handleCheckbox = (props: string) => {
    switch (props) {
      case '전체 약관 동의':
        setCheckbox0(!checkbox0);
        setCheckbox1(!checkbox0);
        setCheckbox2(!checkbox0);
        setCheckbox3(!checkbox0);
        break;
      case '만 14세 이상 확인 동의':
        setCheckbox1(!checkbox1);
        break;
      case '이용약관 동의':
        setCheckbox2(!checkbox2);
        break;
      case '개인정보 수집 및 이용 동의':
        setCheckbox3(!checkbox3);
        break;
    }
  };

  useEffect(() => {
    if (checkbox1 && checkbox2 && checkbox3) {
      setCheckBtn(true);
    } else {
      setCheckBtn(false);
    }
  }, [checkbox0, checkbox1, checkbox2, checkbox3]);

  useEffect(() => {
    let userId = kakaoId;
    let userType = loginType;
    if (userId && userType) {
      dispatch(kakaoLoginInStorage({ kakaoId: userId, loginType: userType }));
    }
  }, [kakaoId, loginType]);

  useEffect(() => {
    if (isNewMember === false) {
      navigation.navigate('Feed');
    }
  }, [isNewMember]);

  if (loading) {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <Wrapper>
      <TermsContentContainer>
        <TermsContentItem>
          <View style={{ width: '80%', height: '100%', justifyContent: 'center' }}>
            <Text style={styles.termsContentTitle}>전체 약관 동의</Text>
          </View>
          <BouncyCheckbox
            size={18}
            fillColor="#dfe2e5"
            unfillColor="#FFFFFF"
            isChecked={checkbox0}
            onPress={() => handleCheckbox('전체 약관 동의')}
            iconStyle={{ borderColor: '#dfe2e5', borderRadius: 5 }}
          />
        </TermsContentItem>
        <TermsContentItem>
          <View style={{ width: '80%', height: '100%', justifyContent: 'center' }}>
            <Text style={styles.termsContentList}>만 14세 이상 확인 동의 (필수)</Text>
          </View>
          <BouncyCheckbox
            size={18}
            fillColor="#dfe2e5"
            disableBuiltInState
            unfillColor="#FFFFFF"
            isChecked={checkbox1}
            onPress={() => handleCheckbox('만 14세 이상 확인 동의')}
            iconStyle={{ borderColor: '#dfe2e5', borderRadius: 5 }}
          />
        </TermsContentItem>
        <TermsContentItem>
          <View style={{ width: '60%', height: '100%', justifyContent: 'center' }}>
            <Text style={styles.termsContentList}>이용약관 동의 (필수)</Text>
            <Pressable
              onPress={() => {
                navigation.navigate('TermsDetail');
              }}>
              <Text style={styles.termsContentListDetail}>이용약관 보기</Text>
            </Pressable>
          </View>
          <BouncyCheckbox
            size={18}
            fillColor="#dfe2e5"
            disableBuiltInState
            unfillColor="#FFFFFF"
            isChecked={checkbox2}
            onPress={() => handleCheckbox('이용약관 동의')}
            iconStyle={{ borderColor: '#dfe2e5', borderRadius: 5 }}
          />
        </TermsContentItem>
        <TermsContentItem>
          <View
            style={{
              width: '60%',
              height: '100%',
              justifyContent: 'center',
            }}>
            <Text style={styles.termsContentList}>개인정보 수집 및 이용 동의 (필수)</Text>
            <Pressable
              onPress={() => {
                navigation.navigate('PersonalInfo');
              }}>
              <Text style={styles.termsContentListDetail}>이용약관 보기</Text>
            </Pressable>
          </View>
          <BouncyCheckbox
            size={18}
            fillColor="#dfe2e5"
            disableBuiltInState
            unfillColor="#FFFFFF"
            isChecked={checkbox3}
            onPress={() => handleCheckbox('개인정보 수집 및 이용 동의')}
            iconStyle={{ borderColor: '#dfe2e5', borderRadius: 5 }}
          />
        </TermsContentItem>
      </TermsContentContainer>
      <TermsButtonContainer>
        {checkBtn ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signup');
            }}
            style={styles.termsButtenTrueItem}>
            <Text style={styles.termsButtenText}>다음</Text>
          </TouchableOpacity>
        ) : (
          <Pressable style={styles.termsButtenFalseItem}>
            <Text style={styles.termsButtenText}>다음</Text>
          </Pressable>
        )}
      </TermsButtonContainer>
    </Wrapper>
  );
};

export default TermsAgreementScreen;

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
  termsButtenFalseItem: {
    width: '100%',
    height: '50%',
    backgroundColor: '#DFE2E6',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsButtenTrueItem: {
    width: '100%',
    height: '50%',
    backgroundColor: '#fe554a',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsButtenText: {
    fontWeight: '800',
    fontSize: 15,
    color: '#FFFFFF',
  },
  termsContentTitle: {
    fontWeight: '600',
    fontSize: 20,
    color: '#2a3037',
  },
  termsContentList: {
    fontWeight: '600',
    fontSize: 16,
    color: '#7E8389',
  },
  termsContentListDetail: {
    fontWeight: '400',
    fontSize: 12,
    color: '#7E8389',
    marginTop: 5,
    textDecorationLine: 'underline',
  },
});

const Wrapper = styled.View({
  backgroundColor: '#fff',
  flex: 1,
  alignItems: 'center',
  paddingHorizontal: 23,
  paddingTop: 36,
  justifyContent: 'space-between',
});

const TermsContentContainer = styled.View({
  width: '100%',
  height: '50%',
});

const TermsContentItem = styled.View({
  width: '103%',
  height: '22%',
  justifyContent: 'center',
  alignContent: 'space-between',
  flexWrap: 'wrap',
});

const TermsButtonContainer = styled.View({
  width: 327,
  height: 112,
  justifyContent: 'center',
  marginBottom: '11%',
});
