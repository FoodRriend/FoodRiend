import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import { Text, View, StyleSheet, TextInput, Image, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddFriendsScreen = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '친구추가',
      headerLeft: () => (
        <Pressable
          style={styles.BackIcon}
          onPress={() => {
            navigation.navigate('AddFavFood');
          }}>
          <Image source={require(`../assets/icons/Left.png`)}></Image>
        </Pressable>
      ),
    });
  };

  headerStyle();

  return (
    <View>
      <Text>AddFriendsScreen</Text>
    </View>
  );
};

export default AddFriendsScreen;

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
});
