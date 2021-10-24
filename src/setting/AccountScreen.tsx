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

const AccountScreen: React.FC = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '계정',
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
            navigation.navigate('Setting');
          }}>
          <Image source={require(`../assets/icons/Left.png`)}></Image>
        </TouchableOpacity>
      ),
    });
  };

  headerStyle();

  return (
    <View style={{ width: '100%', height: '100%', display: 'flex', backgroundColor: '#fff' }}>
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: '#fff',
          borderBottomColor: '#dfe2e5',
          borderBottomWidth: 0.6,
          marginTop: 32,
        }}>
        <TouchableOpacity style={{ flexWrap: 'wrap', alignContent: 'space-between' }}>
          <View
            style={{
              width: '90%',
              height: '100%',
              flexWrap: 'wrap',
              alignContent: 'space-between',
              justifyContent: 'center',
            }}>
            <Text style={styles.accountCatagory}>카카오계정</Text>
            <Text style={styles.accountCatagoryID}>asdsdsf@kakao.com</Text>
          </View>
          <Image source={require('../assets/icons/click.png')} style={styles.accountButton} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: '#fff',
          borderBottomColor: '#dfe2e5',
          borderBottomWidth: 0.6,
        }}>
        <TouchableOpacity style={{ flexWrap: 'wrap', alignContent: 'space-between' }}>
          <Text style={styles.accountCatagory}>로그아웃</Text>
          <Image source={require('../assets/icons/click.png')} style={styles.accountButton} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: '#fff',
          borderBottomColor: '#dfe2e5',
          borderBottomWidth: 0.6,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Withdrawal');
          }}
          style={{ flexWrap: 'wrap', alignContent: 'space-between' }}>
          <Text style={styles.accountCatagory}>회원탈퇴</Text>
          <Image source={require('../assets/icons/click.png')} style={styles.accountButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountScreen;

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
  accountCatagory: {
    ...Platform.select({
      ios: {
        fontWeight: '400',
      },
      android: {
        fontWeight: '500',
      },
    }),
    fontSize: 15,
    marginLeft: 35,
    marginVertical: 16,
    width: '30%',
  },
  accountButton: {
    width: 8,
    height: 15,
    marginTop: 16,
    marginRight: 15,
  },
  accountCatagoryID: {
    fontWeight: '400',
    fontSize: 12,
    color: '#7E8389',
  },
});
