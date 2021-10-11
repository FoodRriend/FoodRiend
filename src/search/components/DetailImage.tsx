import { Animated, StyleSheet, View } from 'react-native';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Text } from 'react-native-elements';

const DetailImage = ({ scrollY }: { scrollY: any }) => {
  return (
    <Animated.Image
      source={{
        uri: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80',
      }}
      style={[
        styles.topImage,
        {
          transform: [
            {
              scale: scrollY.interpolate({
                inputRange: [0, 450],
                outputRange: [1.2, 1],
              }),
            },
          ],
        },
      ]}
    />
  );
};

export default DetailImage;

const styles = StyleSheet.create({
  topImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    height: 450,
  },
});
