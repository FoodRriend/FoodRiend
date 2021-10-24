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

import BouncyCheckbox from 'react-native-bouncy-checkbox';

const WithdrawalScreen: React.FC = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '회원탈퇴',
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
            navigation.navigate('Account');
          }}>
          <Image source={require(`../assets/icons/Left.png`)}></Image>
        </TouchableOpacity>
      ),
    });
  };

  headerStyle();

  const [check, setCheck] = useState(false);

  const handleCheckBox = () => {
    setCheck(!check);
  };

  return (
    <Wrapper>
      <WithdrawalContainer>
        <WithdrawalItem>
          <Text style={styles.WithdrawalTitle}>회원 탈퇴 전 아래 내용을 확인해주세요</Text>
          <Text style={styles.WithdrawalListContent}>
            - 회원 탈퇴 시, 화면 정보 및 서비스 이용 기록은 모두 삭제되며, 삭제된 데이터는 복구가
            불가능합니다. 다만 법령에 의하여 보관해야 하는 경우 또는 회사 내부 정책에 의하여
            보관해야 하는 정보는 탈퇴 후에도 일정 기간 보관됩니다. 자세한 사항은
            개인정보처리방침에서 확인하실 수 있습니다.
          </Text>
          <Text style={styles.WithdrawalListContent}>
            - 회원 탈퇴 후 재가입하더라도 탈퇴 전의 회원 정보 및 서비스 이용 기록은 복구되지
            않습니다.
          </Text>
          <CheckBoxContainer>
            <BouncyCheckbox
              size={18}
              fillColor="#dfe2e5"
              disableBuiltInState
              unfillColor="#FFFFFF"
              isChecked={check}
              onPress={() => handleCheckBox()}
              iconStyle={{ borderColor: '#dfe2e5', borderRadius: 5 }}
            />
            <Text style={styles.WithdrawalCheckContent}>
              위 내용을 모두 확인하였으며, 이에 동의합니다.
            </Text>
          </CheckBoxContainer>
          {check ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}
              style={styles.termsButtenTrueItem}>
              <Text style={styles.termsButtenText}>탈퇴하기</Text>
            </TouchableOpacity>
          ) : (
            <Pressable style={styles.termsButtenFalseItem}>
              <Text style={styles.termsButtenText}>탈퇴하기</Text>
            </Pressable>
          )}
        </WithdrawalItem>
      </WithdrawalContainer>
      {Platform.OS === 'ios' ? <View style={{ width: '100%', height: 40 }}></View> : <></>}
    </Wrapper>
  );
};

export default WithdrawalScreen;

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
  WithdrawalTitle: {
    color: '#2A3037',
    fontSize: 15,
    fontWeight: '700',
  },
  WithdrawalListContent: {
    color: '#2A3037',
    marginTop: 20,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
  },
  WithdrawalCheckContent: {
    color: '#2A3037',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
  },
  termsButtenFalseItem: {
    width: '100%',
    height: 56,
    backgroundColor: '#DFE2E6',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsButtenTrueItem: {
    width: '100%',
    height: 56,
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
});

const Wrapper = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-end',
});

const WithdrawalContainer = styled.View({
  width: '95%',
  ...Platform.select({
    ios: {
      height: '93%',
    },
    android: {
      height: '98%',
    },
  }),
  backgroundColor: '#fff',
  borderColor: '#AAACAE',
  borderWidth: 1,
  alignItems: 'center',
  justifyContent: 'flex-end',
});

const WithdrawalItem = styled.View({
  width: '92%',
  height: '96%',
  marginTop: '4%',
});

const CheckBoxContainer = styled.View({
  width: '100%',
  height: 30,
  marginTop: 40,
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginBottom: 34,
});
