import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import { Text, View, StyleSheet, TextInput, Image, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddFavFoodScreen = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '취향선택',
      headerLeft: () => (
        <Pressable
          style={styles.BackIcon}
          onPress={() => {
            navigation.navigate('AddStyle');
          }}>
          <Image source={require(`../assets/icons/Left.png`)}></Image>
        </Pressable>
      ),
      headerRight: () => (
        <Pressable
          style={styles.RightIcon}
          onPress={() => {
            navigation.navigate('AddFriends');
          }}>
          <Image source={require(`../assets/icons/RightVector.png`)}></Image>
        </Pressable>
      ),
    });
  };

  headerStyle();
  return (
    <Wrapper>
      <Text>AddFavFoodScreen</Text>
    </Wrapper>
  );
};

export default AddFavFoodScreen;

const styles = StyleSheet.create({
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
