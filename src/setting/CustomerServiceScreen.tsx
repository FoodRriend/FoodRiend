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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomerServiceScreen = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '고객센터',
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
        <Pressable
          style={styles.backIcon}
          onPress={() => {
            navigation.navigate('Setting');
          }}>
          <Image source={require(`../assets/icons/Left.png`)}></Image>
        </Pressable>
      ),
    });
  };

  headerStyle();

  return (
    <Wrapper>
      <Text style={{ fontSize: 15, fontWeight: 'normal' }}>
        서비스 이용과 관련하여 어려운 점이 있거나 개선해야 할 내용이 있으면 아래 이메일로 연락
        부탁드리겠습니다.
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'normal',
          marginTop: 16,
        }}>
        Email: foodriend@gmail.com
      </Text>
    </Wrapper>
  );
};

export default CustomerServiceScreen;

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
});

const Wrapper = styled.View({
  paddingTop: 16,
  paddingHorizontal: 36,
  backgroundColor: '#fff',
  width: '100%',
  height: '100%',
  display: 'flex',
});
