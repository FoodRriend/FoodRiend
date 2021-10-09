import React, { useState, useEffect } from 'react';
import styled from '@emotion/native';

import {
  Text,
  Pressable,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
  Animated,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

interface ITab {
  isFocused: boolean;
  label: string;
  onPress: () => void;
  setToValue: (params: number) => void;
  setWidth: (params: number) => void;
}

const Tap = ({ isFocused, label, onPress, setToValue, setWidth }: ITab) => {
  const [layout, setLayout] = useState<any>(null);

  useEffect(() => {
    if (isFocused && layout) {
      setToValue(layout.x);
      setWidth(layout.width);
    }
  }, [isFocused, layout, setToValue, setWidth]);

  const onLayout = (e: any) => {
    const { x, width } = e.nativeEvent.layout;
    setLayout({ x, width });
  };
  return (
    <TouchableOpacity
      onLayout={onLayout}
      onPress={() => onPress()}
      style={styles.myScreenFavInfoItem}>
      <Text style={styles.myScreenFavInfoNumber}>5</Text>
      {isFocused ? (
        <Text style={styles.myScreenFavInfoTouchText}>{label}</Text>
      ) : (
        <Text style={styles.myScreenFavInfoText}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Tap;

const styles = StyleSheet.create({
  myScreenFavInfoItem: {
    height: 43,
    width: Dimensions.get('window').width / 3 - 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  myScreenFavInfoNumber: {
    fontSize: 17,
    fontWeight: '500',
    color: '#3e5481',
  },
  myScreenFavInfoText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#9fa5c0',
    marginTop: 3,
  },
  myScreenFavInfoTouchText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#2A3037',
    marginTop: 3,
  },
});
