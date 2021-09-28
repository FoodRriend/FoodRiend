import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import { Text, View, StyleSheet, Image, Pressable, Platform } from 'react-native';
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
              새로운 곳에 갔으면 그 지역 맛집을 찾아야지! {'\n'}전국 8도 그 지역에 있는 맛집을
              먹어보는 것을 좋아해요.
            </Text>
          </View>
        </StyleListItem>
        <StyleListItem>
          <View style={styles.StyleImage}>
            <Image
              source={require('../assets/images/onBoading/addStyle/addStyleImage4.png')}
              style={{ width: '80%', height: '80%', resizeMode: 'contain' }}
            />
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
              세상에 얼마나 많은 음식이 있는데... {'\n'}어떻게 같은 것만 먹어! {'\n'}평소에 먹어보지
              못한 음식을 먹는 것을 좋아해요.
            </Text>
          </View>
        </StyleListItem>
        <StyleListItem>
          <View style={styles.StyleImage}>
            <Image
              source={require('../assets/images/onBoading/addStyle/addStyleImage1.png')}
              style={{ width: '80%', height: '80%', resizeMode: 'contain' }}
            />
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
              source={require('../assets/images/onBoading/addStyle/addStyleImage2.png')}
              style={{ width: '80%', height: '80%', resizeMode: 'contain' }}
            />
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
              TV, SNS에 나오는 맛집 말고{'\n'} 진짜 맛집을 찾고 싶어{'\n'} 유명하지 않아도 진짜
              맛집을 찾는 것을 좋아해요
            </Text>
          </View>
        </StyleListItem>
        <StyleListItem>
          <View style={styles.StyleImage}>
            <Image
              source={require('../assets/images/onBoading/addStyle/addStyleImage3.png')}
              style={{ width: '80%', height: '80%', resizeMode: 'contain' }}
            />
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
              맛에 취하고 분위기에 취한다. {'\n'}맛집을 찾을 때 분위기도 중요하게 생각해요.
            </Text>
          </View>
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
    width: 234,
    height: 90,
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
