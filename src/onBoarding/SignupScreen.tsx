import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import {
  Text,
  View,
  Pressable,
  StyleSheet,
  TextInput,
  Image,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { addNickname, kakaoNameUpdate, kakaoSignupInStorage } from '../redux/userSlice';

const SignupScreen: React.FC = () => {
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
          style={styles.BackIcon}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Image source={require(`../assets/icons/Left.png`)}></Image>
        </TouchableOpacity>
      ),
    });
  };

  headerStyle();

  const dispatch = useAppDispatch();
  const { name, accessToken, nicknameCheck, loading, nicknameFalseCheck } = useAppSelector(
    (state) => state.users,
  );

  const [inputID, setInputID] = useState<string | undefined>(name);
  const [inputNickname, setInputNickname] = useState('');

  const [inputCheck, setInputCheck] = useState(false);
  const [inputNameCheck, setInputNameCheck] = useState(false);
  const [denyMessage, setDenyMessage] = useState('');

  const handleInputID = useCallback(
    (e) => {
      setInputID(e);
    },
    [inputID],
  );

  const handleInputNickname = useCallback(
    (e) => {
      let lower = e.toLowerCase();
      setInputNickname(lower);
    },
    [inputNickname],
  );

  useEffect(() => {
    if (inputID) {
      handleNameCheckForm(inputID);
    }
  }, [inputID]);

  useEffect(() => {
    handleCheckForm(inputNickname);
  }, [inputNickname]);

  useEffect(() => {
    if (nicknameCheck) {
      setInputCheck(true);
      setDenyMessage('닉네임을 사용할 수 있습니다.');
    }
  }, [nicknameCheck]);

  useEffect(() => {
    setInputCheck(false);
    setDenyMessage('닉네임이 사용중입니다.');
  }, [nicknameFalseCheck]);

  useEffect(() => {
    setInputCheck(false);
    if (inputNickname === null || inputNickname === '') {
      setDenyMessage('');
    }
  }, []);

  const checkNicknameLeng = useCallback(
    (nickname) => {
      let nickLength = 0;
      for (let i = 0; i < nickname.length; i++) {
        let nick = nickname.charAt(i);
        if (escape(nick).length > 4) {
          nickLength += 2;
        } else {
          nickLength += 1;
        }
      }
      return nickLength;
    },
    [inputNickname],
  );

  const handleCheckForm = (nickname: string) => {
    if (/^[가-힣a-z0-9_.]+$/.test(nickname)) {
      if (checkNicknameLeng(nickname) >= 3 && checkNicknameLeng(nickname) <= 12) {
        if (nickname) {
          dispatch(
            kakaoSignupInStorage({
              accessToken: accessToken,
              nickname: nickname,
            }),
          );
        }
      } else {
        setInputCheck(false);
        setDenyMessage('닉네임은 영어 3~12자 한글 2~6자로 입력이 가능합니다.');
      }
    } else {
      if (inputNickname === null || inputNickname === '') {
        setInputCheck(false);
        setDenyMessage(`닉네임을 입력해주세요.`);
      } else if (/[`~!@#$%^&*|\\\'\";:\/?]/gi.test(nickname)) {
        setInputCheck(false);
        setDenyMessage(`닉네임은 한글, 영문, 숫자, 밑줄, 마침표만 가능합니다.`);
      } else if (/[A-Z]/.test(nickname)) {
        setInputCheck(false);
        setDenyMessage(`닉네임은 한글, 영문, 숫자, 밑줄, 마침표만 가능합니다.`);
      } else if (/[ㄱ-ㅎ|ㅏ-ㅣ]/.test(nickname)) {
        setInputCheck(false);
        setDenyMessage(`닉네임은 한글, 영문, 숫자, 밑줄, 마침표만 가능합니다.`);
      } else if (nickname.search(/\s/) != -1) {
        setInputCheck(false);
        setDenyMessage(`닉네임은 한글, 영문, 숫자, 밑줄, 마침표만 가능합니다.`);
      }
    }
  };

  const handleNameCheckForm = (nickname: string) => {
    if (/^[가-힣a-z0-9_.]+$/.test(nickname)) {
      if (checkNicknameLeng(nickname) >= 3 && checkNicknameLeng(nickname) <= 12) {
        setInputNameCheck(true);
      } else {
        setInputNameCheck(false);
      }
    } else {
      if (inputNickname === null || inputNickname === '') {
        setInputNameCheck(false);
      } else if (/[`~!@#$%^&*|\\\'\";:\/?]/gi.test(nickname)) {
        setInputNameCheck(false);
      } else if (/[A-Z]/.test(nickname)) {
        setInputNameCheck(false);
      } else if (/[ㄱ-ㅎ|ㅏ-ㅣ]/.test(nickname)) {
        setInputNameCheck(false);
      } else if (nickname.search(/\s/) != -1) {
        setInputNameCheck(false);
      }
    }
  };

  const onPress = () => {
    dispatch(addNickname(inputNickname));
    if (inputID) {
      dispatch(kakaoNameUpdate(inputID));
    }
    navigation.navigate('AddStyle');
  };

  return (
    <Wrapper>
      <Text style={styles.TextTitle}>이름/닉네임 작성하기</Text>
      <Text style={{ marginTop: 10, fontWeight: '400', fontSize: 13 }}>
        친구 관계 확인을 위해 실명을 사용해주세요
      </Text>
      <InputContainer>
        <View style={styles.inputImage}>
          <Image
            style={{ width: 24, height: 24, borderRadius: 12 }}
            source={require(`../assets/icons/profile_black.png`)}
          />
        </View>
        <TextInput
          maxLength={10}
          autoCapitalize={'none'}
          onChangeText={handleInputID}
          style={styles.InPutID}
          value={inputID}
        />
      </InputContainer>
      <InputContainer style={{ marginTop: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.inputImage}>
            <Image
              style={{ width: 24, height: 24, borderRadius: 12 }}
              source={require(`../assets/icons/profile_black.png`)}
            />
          </View>
          <TextInput
            maxLength={15}
            autoCapitalize={'none'}
            onChangeText={handleInputNickname}
            style={styles.InPutNickname}
            value={inputNickname}
            autoFocus={true}
            placeholder="닉네임"
          />
          {loading ? (
            <View
              style={{
                width: 50,
                height: 43,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ActivityIndicator />
            </View>
          ) : (
            <></>
          )}
        </View>
      </InputContainer>
      <View style={styles.inputValidity}>
        {inputCheck ? (
          <Text style={styles.inputValidityText}>{denyMessage}</Text>
        ) : (
          <Text style={styles.inputValidityFalseText}>{denyMessage}</Text>
        )}
      </View>
      {/* {inputCheck && inputNameCheck && nicknameCheck ? ( */}
      <TouchableOpacity onPress={onPress} style={styles.SignupComplete}>
        <Text style={styles.SignupCompleteText}>완료</Text>
      </TouchableOpacity>
      {/* ) : (
        <Pressable style={styles.SignupFalse}>
          <Text style={styles.SignupCompleteText}>완료</Text>
        </Pressable>
      )} */}
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
    width: '75%',
    paddingLeft: 15,
    fontStyle: 'normal',
    color: '#2a3037',
    fontSize: 15,
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
      android: {
        fontWeight: '600',
      },
    }),
    marginLeft: 5,
  },
  InPutNickname: {
    width: '70%',
    height: '100%',
    paddingLeft: 15,
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#2a3037',
    marginLeft: 5,
  },
  NicknameCheck: {
    fontStyle: 'normal',
    color: '#7e8389',
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        fontWeight: '500',
        fontSize: 15,
      },
      android: {
        fontWeight: '600',
        fontSize: 14,
      },
    }),
  },
  SignupComplete: {
    width: '80%',
    height: 56,
    borderRadius: 32,
    backgroundColor: '#fe554a',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignupFalse: {
    width: '80%',
    height: 56,
    borderRadius: 32,
    backgroundColor: '#DFE2E6',
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
  inputImage: {
    width: 43,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  inputValidity: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        paddingLeft: 55,
      },
      android: {
        paddingLeft: 65,
      },
    }),
  },
  inputEmptyText: {
    fontSize: 12,
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
      android: {
        fontWeight: '600',
      },
    }),
    color: '#2A3037',
  },
  inputValidityText: {
    fontSize: 12,
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
      android: {
        fontWeight: '600',
      },
    }),
    color: '#04E85F',
  },
  inputValidityFalseText: {
    fontSize: 12,
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
      android: {
        fontWeight: '600',
      },
    }),
    color: '#FA4A0C',
    width: '90%',
  },
});

const Wrapper = styled.View({
  paddingTop: 36,
  backgroundColor: '#fff',
  flex: 1,
  alignItems: 'center',
});

const InputContainer = styled.View({
  borderStyle: 'solid',
  borderWidth: 1,
  width: '80%',
  height: 56,
  borderRadius: 32,
  borderColor: '#d0dbea',
  marginTop: 26,
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
});
