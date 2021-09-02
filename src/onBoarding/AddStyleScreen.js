import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import { Text, View, Pressable, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';

const AddStyleScreen = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '취향선택',
      headerBackTitleVisible: false,
      // headerLeft: () => (
      //   <Icon
      //     name="ios-person"
      //     size={25}
      //     onPress={() => {
      //       navigation.navigate('Login');
      //     }}></Icon>
      // ),
    });
  };

  headerStyle();

  return (
    <View>
      <Text>AddStyleScreen</Text>
    </View>
  );
};

export default AddStyleScreen;
