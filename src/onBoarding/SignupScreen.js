import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import { Text, View, Pressable, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation();

  const refNickname = useRef(null);

  const [inputID, setInputID] = useState('사용자 이름');
  const [inputNickname, setInputNickname] = useState('');

  useEffect(() => {
    refNickname.current.focus();
  }, []);

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '회원가입',
      headerLeft: () => (
        <Pressable
          style={styles.BackIcon}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Image source={require(`../assets/icons/Left.png`)}></Image>
        </Pressable>
      ),
    });
  };

  headerStyle();

  const onPress = () => {
    navigation.navigate('AddStyle');
  };

  const handleInputID = useCallback(
    (e) => {
      setInputID(e);
      console.log(e);
    },
    [inputID],
  );

  const handleInputNickname = useCallback(
    (e) => {
      setInputNickname(e);
      console.log(e);
    },
    [inputNickname],
  );

  // 중복확인의 경우 즉시 유효성을 판별 가능하도록 구현하기

  return (
    <Wrapper>
      <Text style={styles.TextTitle}>이름/닉네임 작성하기</Text>
      <InputContainer>
        <TextInput
          autoCapitalize={'none'}
          onChangeText={handleInputID}
          style={styles.InPutID}
          value={inputID}
          editable={false}
        />
      </InputContainer>
      <InputContainer style={{ marginTop: 20 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <TextInput
            autoCapitalize={'none'}
            onChangeText={handleInputNickname}
            style={styles.InPutNickname}
            value={inputNickname}
            ref={refNickname}
            placeholder="닉네임"
          />
          <Text style={styles.NicknameCheck}>중복확인</Text>
        </View>
      </InputContainer>
      <Pressable onPress={onPress} style={styles.SignupComplete}>
        <Text style={styles.SignupCompleteText}>완료</Text>
      </Pressable>
    </Wrapper>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  TextTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#2a3037',
  },
  InPutID: {
    paddingLeft: 58,
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#2a3037',
  },
  InPutNickname: {
    width: '75%',
    paddingLeft: 58,
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#2a3037',
  },
  NicknameCheck: {
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#2a3037',
    color: '#7e8389',
  },
  SignupComplete: {
    width: 327,
    height: 56,
    borderRadius: 32,
    backgroundColor: '#fe554a',
    marginTop: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignupCompleteText: {
    fontSize: 15,
    fontWeight: '900',
    fontStyle: 'normal',
    color: '#ffffff',
  },
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

const InputContainer = styled.View({
  borderStyle: 'solid',
  borderWidth: 1,
  width: 327,
  height: 56,
  borderRadius: 32,
  borderColor: '#d0dbea',
  marginTop: 36,
  display: 'flex',
  justifyContent: 'center',
});
