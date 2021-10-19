import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  Platform,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import AddStyleData from './components/AddStyleData';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { addFoodStyle } from '../redux/userSlice';

const AddStyleScreen: React.FC = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '취향선택',
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
            navigation.navigate('Signup');
          }}>
          <Image source={require(`../assets/icons/Left.png`)}></Image>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <>
          {checkNextBtn ? (
            <TouchableOpacity
              style={styles.RightIcon}
              onPress={() => {
                navigation.navigate('AddFavFood');
              }}>
              <Image source={require(`../assets/icons/RightVector.png`)}></Image>
            </TouchableOpacity>
          ) : (
            <Pressable style={styles.RightIcon}>
              <Image source={require(`../assets/icons/RightVector.png`)}></Image>
            </Pressable>
          )}
        </>
      ),
    });
  };

  headerStyle();

  const dispatch = useAppDispatch();

  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);
  const [checkbox5, setCheckbox5] = useState(false);

  const [checkState, setCheckState] = useState('');
  const [checkNextBtn, setCheckNextBtn] = useState(false);

  const handleCheckbox = (style: string) => {
    setCheckState(style);
    switch (style) {
      case '지역 맛집 탐험가':
        setCheckbox1(true);
        setCheckbox2(false);
        setCheckbox3(false);
        setCheckbox4(false);
        setCheckbox5(false);
        break;
      case '새로운 음식 모험가':
        setCheckbox1(false);
        setCheckbox2(true);
        setCheckbox3(false);
        setCheckbox4(false);
        setCheckbox5(false);
        break;
      case '분야별 맛집 전문가':
        setCheckbox1(false);
        setCheckbox2(false);
        setCheckbox3(true);
        setCheckbox4(false);
        setCheckbox5(false);
        break;
      case '숨은 맛집 개척자':
        setCheckbox1(false);
        setCheckbox2(false);
        setCheckbox3(false);
        setCheckbox4(true);
        setCheckbox5(false);
        break;
      case '분위기 맛집 예술가':
        setCheckbox1(false);
        setCheckbox2(false);
        setCheckbox3(false);
        setCheckbox4(false);
        setCheckbox5(true);
        break;
    }
  };

  useEffect(() => {
    if (checkbox1 || checkbox2 || checkbox3 || checkbox4 || checkbox5) {
      dispatch(addFoodStyle(checkState));
      setCheckNextBtn(true);
    } else {
      setCheckNextBtn(false);
    }
  }, [checkbox1, checkbox2, checkbox3, checkbox4, checkbox5]);

  return (
    <Wrapper>
      <Text style={styles.TextTitle}>나의 맛집 스타일 선택</Text>

      <View style={styles.styleListContainer}>
        <StyleListItem>
          <View style={styles.StyleImage}>
            <Image
              source={require(`../assets/images/onBoading/addStyle/addStyleImage0.png`)}
              style={{
                width: '80%',
                height: '80%',
                resizeMode: 'contain',
              }}
            />
          </View>
          <Pressable onPress={() => handleCheckbox('지역 맛집 탐험가')}>
            <View style={styles.StyleText}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.StyleItemTitle}>지역 맛집 탐험가</Text>
                <BouncyCheckbox
                  size={18}
                  style={{ paddingLeft: 10 }}
                  disableBuiltInState
                  fillColor="#dfe2e5"
                  unfillColor="#FFFFFF"
                  isChecked={checkbox1}
                  onPress={() => handleCheckbox('지역 맛집 탐험가')}
                  iconStyle={{ borderColor: '#dfe2e5', borderRadius: 5 }}
                />
              </View>
              <Text style={styles.StyleItemContent}>
                새로운 곳에 갔으면 그 지역 맛집을 찾아야지! {'\n'}전국 8도 그 지역에 있는 맛집을
                먹어보는 것을 좋아해요.
              </Text>
            </View>
          </Pressable>
        </StyleListItem>
        <StyleListItem>
          <View style={styles.StyleImage}>
            <Image
              source={require('../assets/images/onBoading/addStyle/addStyleImage4.png')}
              style={{ width: '80%', height: '80%', resizeMode: 'contain' }}
            />
          </View>
          <Pressable onPress={() => handleCheckbox('새로운 음식 모험가')}>
            <View style={styles.StyleText}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.StyleItemTitle}>새로운 음식 모험가</Text>
                <BouncyCheckbox
                  size={18}
                  style={{ paddingLeft: 10 }}
                  disableBuiltInState
                  fillColor="#dfe2e5"
                  unfillColor="#FFFFFF"
                  isChecked={checkbox2}
                  onPress={() => handleCheckbox('새로운 음식 모험가')}
                  iconStyle={{ borderColor: '#dfe2e5', borderRadius: 5 }}
                />
              </View>
              <Text style={styles.StyleItemContent}>
                세상에 얼마나 많은 음식이 있는데... {'\n'}어떻게 같은 것만 먹어! {'\n'}평소에
                먹어보지 못한 음식을 먹는 것을 좋아해요.
              </Text>
            </View>
          </Pressable>
        </StyleListItem>
        <StyleListItem>
          <View style={styles.StyleImage}>
            <Image
              source={require('../assets/images/onBoading/addStyle/addStyleImage1.png')}
              style={{ width: '80%', height: '80%', resizeMode: 'contain' }}
            />
          </View>
          <Pressable onPress={() => handleCheckbox('분야별 맛집 전문가')}>
            <View style={styles.StyleText}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.StyleItemTitle}>분야별 맛집 전문가</Text>
                <BouncyCheckbox
                  size={18}
                  style={{ paddingLeft: 10 }}
                  disableBuiltInState
                  fillColor="#dfe2e5"
                  unfillColor="#FFFFFF"
                  isChecked={checkbox3}
                  onPress={() => handleCheckbox('분야별 맛집 전문가')}
                  iconStyle={{ borderColor: '#dfe2e5', borderRadius: 5 }}
                />
              </View>
              <Text style={styles.StyleItemContent}>
                내가 좋아하는 음식의 끝판왕을 만나고 싶어 특정 음식의 매니아로 한 음식만 먹는 것을
                좋아해요.
              </Text>
            </View>
          </Pressable>
        </StyleListItem>
        <StyleListItem>
          <View style={styles.StyleImage}>
            <Image
              source={require('../assets/images/onBoading/addStyle/addStyleImage2.png')}
              style={{ width: '80%', height: '80%', resizeMode: 'contain' }}
            />
          </View>
          <Pressable onPress={() => handleCheckbox('숨은 맛집 개척자')}>
            <View style={styles.StyleText}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.StyleItemTitle}>숨은 맛집 개척자</Text>
                <BouncyCheckbox
                  size={18}
                  style={{ paddingLeft: 10 }}
                  disableBuiltInState
                  fillColor="#dfe2e5"
                  unfillColor="#FFFFFF"
                  isChecked={checkbox4}
                  onPress={() => handleCheckbox('숨은 맛집 개척자')}
                  iconStyle={{ borderColor: '#dfe2e5', borderRadius: 5 }}
                />
              </View>
              <Text style={styles.StyleItemContent}>
                TV, SNS에 나오는 맛집 말고{'\n'} 진짜 맛집을 찾고 싶어{'\n'} 유명하지 않아도 진짜
                맛집을 찾는 것을 좋아해요
              </Text>
            </View>
          </Pressable>
        </StyleListItem>
        <StyleListItem>
          <View style={styles.StyleImage}>
            <Image
              source={require('../assets/images/onBoading/addStyle/addStyleImage3.png')}
              style={{ width: '80%', height: '80%', resizeMode: 'contain' }}
            />
          </View>
          <Pressable onPress={() => handleCheckbox('분위기 맛집 예술가')}>
            <View style={styles.StyleText}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.StyleItemTitle}>분위기 맛집 예술가</Text>
                <BouncyCheckbox
                  size={18}
                  style={{ paddingLeft: 10 }}
                  disableBuiltInState
                  fillColor="#dfe2e5"
                  unfillColor="#FFFFFF"
                  isChecked={checkbox5}
                  onPress={() => handleCheckbox('분위기 맛집 예술가')}
                  iconStyle={{ borderColor: '#dfe2e5', borderRadius: 5 }}
                />
              </View>
              <Text style={styles.StyleItemContent}>
                맛에 취하고 분위기에 취한다. {'\n'}맛집을 찾을 때 분위기도 중요하게 생각해요.
              </Text>
            </View>
          </Pressable>
        </StyleListItem>
      </View>
    </Wrapper>
  );
};

export default AddStyleScreen;

const styles = StyleSheet.create({
  TextTitle: {
    ...Platform.select({
      ios: {
        color: '#2a3037',
        fontSize: 24,
        fontWeight: '600',
      },
      android: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
      },
    }),
    alignSelf: 'center',
  },
  StyleImage: {
    ...Platform.select({
      ios: {
        width: '23%',
        height: '80%',
      },
      android: {
        width: '23%',
        height: '90%',
      },
    }),
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  StyleText: {
    width: '62%',
    height: '100%',
    marginLeft: 22,
  },
  StyleItemTitle: {
    fontStyle: 'normal',
    color: '#2a3037',
    ...Platform.select({
      ios: { width: '95%', fontSize: 20, fontWeight: '500' },
      android: { width: '100%', fontSize: 19, fontWeight: '600' },
    }),
  },
  StyleItemContent: {
    fontStyle: 'normal',
    color: '#7e8389',
    ...Platform.select({
      ios: { marginTop: 12, fontSize: 12, fontWeight: 'normal' },
      android: { marginTop: 9, fontSize: 11, fontWeight: '600' },
    }),
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
  RightIcon: {
    width: 50,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 13,
  },
  styleListContainer: {
    ...Platform.select({
      ios: {
        paddingTop: '5%',
        height: '88%',
        width: '100%',
        alignItems: 'center',
      },
      android: {
        paddingTop: '5.5%',
        height: '100%',
        width: '100%',
        alignItems: 'center',
      },
    }),
  },
});

const Wrapper = styled.View({
  ...Platform.select({
    ios: { paddingTop: '7%' },
    android: { paddingTop: '4.5%' },
  }),
  backgroundColor: '#fff',
  flex: 1,
  alignItems: 'center',
});

const StyleListItem = styled.View({
  ...Platform.select({
    ios: { height: '16%', marginTop: 9 },
    android: { height: '16.5%', marginTop: 7, paddingBottom: 5 },
  }),
  width: '90%',
  borderBottomWidth: 1,
  borderColor: '#dfe2e5',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
});
