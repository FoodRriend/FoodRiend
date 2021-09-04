import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import { Text, View, StyleSheet, TextInput, Image, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import AddStyleData from './components/AddStyleData';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const AddStyleScreen = () => {
  const navigation = useNavigation();

  const [checkbox, setCheckbox] = useState(false);
  console.log(checkbox);

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '취향선택',
      headerLeft: () => (
        <Pressable
          style={styles.BackIcon}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <Image source={require(`../assets/icons/Left.png`)}></Image>
        </Pressable>
      ),
      headerRight: () => (
        <Pressable
          style={styles.RightIcon}
          onPress={() => {
            navigation.navigate('AddFavFood');
          }}>
          <Image source={require(`../assets/icons/RightVector.png`)}></Image>
        </Pressable>
      ),
    });
  };

  headerStyle();

  return (
    <Wrapper>
      <Text style={styles.TextTitle}>나의 맛집 스타일 선택</Text>

      <StyleListContainer>
        <StyleListItem>
          <View style={styles.StyleImage}>
            <Image
              source={require(`../assets/images/onBoading/addStyle/addStyleImage0.png`)}></Image>
          </View>
          <View style={styles.StyleText}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.StyleItemTitle}>지역 맛집 탐험가</Text>
              <BouncyCheckbox
                size={18}
                style={{ paddingLeft: 10 }}
                fillColor="#dfe2e5"
                unfillColor="#FFFFFF"
                isChecked={checkbox}
                onPress={() => setCheckbox(!checkbox)}
                iconStyle={{ borderColor: '#dfe2e5', borderRadius: 5 }}
              />
            </View>
            <Text style={styles.StyleItemContent}>
              새로운 곳에 갔으면 그 지역 맛집을 찾아야지! 전국 8도 그 지역에 있는 맛집을 먹어보는
              것을 좋아해요.
            </Text>
          </View>
        </StyleListItem>
        <StyleListItem>
          <View style={styles.StyleImage}>
            <Image
              source={require('../assets/images/onBoading/addStyle/addStyleImage1.png')}></Image>
          </View>
          <View style={styles.StyleText}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.StyleItemTitle}>새로운 음식 모험가</Text>
              <BouncyCheckbox
                size={18}
                style={{ paddingLeft: 10 }}
                fillColor="#dfe2e5"
                unfillColor="#FFFFFF"
                isChecked={checkbox}
                onPress={() => setCheckbox(!checkbox)}
                iconStyle={{ borderColor: '#dfe2e5', borderRadius: 5 }}
              />
            </View>
            <Text style={styles.StyleItemContent}>
              세상에 얼마나 많은 음식이 있는데... 어떻게 같은 것만 먹어! 평소에 먹어보지 못한 음식을
              먹는 것을 좋아해요.
            </Text>
          </View>
        </StyleListItem>
        <StyleListItem>
          <View style={styles.StyleImage}>
            <Image
              source={require('../assets/images/onBoading/addStyle/addStyleImage2.png')}></Image>
          </View>
          <View style={styles.StyleText}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.StyleItemTitle}>분야별 맛집 전문가</Text>
              <BouncyCheckbox
                size={18}
                style={{ paddingLeft: 10 }}
                fillColor="#dfe2e5"
                unfillColor="#FFFFFF"
                isChecked={checkbox}
                onPress={() => setCheckbox(!checkbox)}
                iconStyle={{ borderColor: '#dfe2e5', borderRadius: 5 }}
              />
            </View>
            <Text style={styles.StyleItemContent}>
              내가 좋아하는 음식의 끝판왕을 만나고 싶어 특정 음식의 매니아로 한 음식만 먹는 것을
              좋아해요.
            </Text>
          </View>
        </StyleListItem>
        <StyleListItem>
          <View style={styles.StyleImage}>
            <Image
              source={require('../assets/images/onBoading/addStyle/addStyleImage3.png')}></Image>
          </View>
          <View style={styles.StyleText}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.StyleItemTitle}>숨은 맛집 개척자</Text>
              <BouncyCheckbox
                size={18}
                style={{ paddingLeft: 10 }}
                fillColor="#dfe2e5"
                unfillColor="#FFFFFF"
                isChecked={checkbox}
                onPress={() => setCheckbox(!checkbox)}
                iconStyle={{ borderColor: '#dfe2e5', borderRadius: 5 }}
              />
            </View>
            <Text style={styles.StyleItemContent}>
              내가 좋아하는 음식의 끝판왕을 만나고 싶어 특정 음식의 매니아로 한 음식만 먹는 것을
              좋아해요.
            </Text>
          </View>
        </StyleListItem>
        <StyleListItem>
          <View style={styles.StyleImage}>
            <Image
              source={require('../assets/images/onBoading/addStyle/addStyleImage4.png')}></Image>
          </View>
          <View style={styles.StyleText}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.StyleItemTitle}>분위기 맛집 예술가</Text>
              <BouncyCheckbox
                size={18}
                style={{ paddingLeft: 10 }}
                fillColor="#dfe2e5"
                unfillColor="#FFFFFF"
                isChecked={checkbox}
                onPress={() => setCheckbox(!checkbox)}
                iconStyle={{ borderColor: '#dfe2e5', borderRadius: 5 }}
              />
            </View>
            <Text style={styles.StyleItemContent}>
              맛에 취하고 분위기에 취한다. 맛집을 찾을 때 분위기도 중요하게 생각해요.
            </Text>
          </View>
        </StyleListItem>
      </StyleListContainer>
    </Wrapper>
  );
};

export default AddStyleScreen;

const styles = StyleSheet.create({
  TextTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#2a3037',
  },
  StyleImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  StyleText: {
    width: 234,
    height: 90,
    marginLeft: 22,
  },
  StyleItemTitle: {
    fontSize: 20,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#000000',
    width: '90%',
  },
  StyleItemContent: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: '#7e8389',
    marginTop: 12,
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
});

const Wrapper = styled.View({
  paddingTop: 36,
  backgroundColor: '#fff',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});

const StyleListContainer = styled.View({
  paddingTop: 36,
});

const StyleListItem = styled.View({
  marginTop: 9,
  paddingBottom: 10,
  width: 336,
  height: 102,
  borderBottomWidth: 1,
  borderColor: '#dfe2e5',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
});
