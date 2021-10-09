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

const SettingsScreen: React.FC = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '설정',
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
            navigation.navigate('MyPage');
          }}>
          <Image source={require(`../assets/icons/Left.png`)}></Image>
        </TouchableOpacity>
      ),
    });
  };

  headerStyle();

  return (
    <View style={{ display: 'flex' }}>
      <MySettingTopCover>
        <View
          style={{
            width: '100%',
            height: 50,
            marginTop: 17,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Account')}
            style={{ flexWrap: 'wrap', alignContent: 'space-between' }}>
            <Text style={styles.mySettingCatagory}>계정</Text>
            <Image source={require('../assets/icons/click.png')} style={styles.mySettingButton} />
          </TouchableOpacity>
        </View>
      </MySettingTopCover>
      <View
        style={{
          width: '100%',
          height: 50,
          marginTop: 13,
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SettingAlert')}
          style={{ flexWrap: 'wrap', alignContent: 'space-between' }}>
          <Text style={styles.mySettingCatagory}>알림</Text>
          <Image source={require('../assets/icons/click.png')} style={styles.mySettingButton} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: 50,
          marginTop: 10,
          backgroundColor: '#fff',
          borderBottomColor: '#dfe2e5',
          borderBottomWidth: 0.6,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Notice')}
          style={{ flexWrap: 'wrap', alignContent: 'space-between' }}>
          <Text style={styles.mySettingCatagory}>공지사항</Text>
          <Image source={require('../assets/icons/click.png')} style={styles.mySettingButton} />
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
          onPress={() => navigation.navigate('CustomerService')}
          style={{ flexWrap: 'wrap', alignContent: 'space-between' }}>
          <Text style={styles.mySettingCatagory}>고객센터</Text>
          <Image source={require('../assets/icons/click.png')} style={styles.mySettingButton} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity style={{ flexWrap: 'wrap', alignContent: 'space-between' }}>
          <Text style={styles.mySettingCatagory}>도움말</Text>
          <Image source={require('../assets/icons/click.png')} style={styles.mySettingButton} />
        </TouchableOpacity>
      </View>
      <MySettingBottomCover>
        <View
          style={{
            width: '100%',
            height: 50,
            borderBottomColor: '#dfe2e5',
            borderBottomWidth: 0.6,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('TermsPolicy')}
            style={{ flexWrap: 'wrap', alignContent: 'space-between' }}>
            <Text style={styles.mySettingCatagory}>약관 및 정책</Text>
            <Image source={require('../assets/icons/click.png')} style={styles.mySettingButton} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
            borderBottomColor: '#dfe2e5',
            borderBottomWidth: 0.6,
          }}>
          <TouchableOpacity style={{ flexWrap: 'wrap', alignContent: 'space-between' }}>
            <Text style={styles.mySettingCatagory}>접근권한 설정</Text>
            <Image source={require('../assets/icons/click.png')} style={styles.mySettingButton} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 50,
          }}>
          <TouchableOpacity style={{ flexWrap: 'wrap', alignContent: 'space-between' }}>
            <Text style={styles.mySettingCatagory}>정보</Text>
            <Image source={require('../assets/icons/click.png')} style={styles.mySettingButton} />
          </TouchableOpacity>
        </View>
      </MySettingBottomCover>
    </View>
  );
};

export default SettingsScreen;

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
  mySettingCatagory: {
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
  },
  mySettingButton: {
    width: 8,
    height: 15,
    marginTop: 16,
    marginRight: 15,
  },
});

const MySettingTopCover = styled.View({
  width: '100%',
  height: 67,
  backgroundColor: '#fff',
});

const MySettingBottomCover = styled.View({
  width: '100%',
  height: '60%',
  marginTop: 10,
  backgroundColor: '#fff',
});
