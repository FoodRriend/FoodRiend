import React, { useState } from 'react';

import { Platform, View, SafeAreaView, Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DetailImage from './components/DetailImage';
import DetailBottom from './components/DetailBottom';
import { Image } from 'react-native-elements/dist/Image';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RestaurantDetailScreen: React.FC = () => {
  const navigation = useNavigation();
  const param = navigation.getState().routes[2].params;
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const headerStyle = () => {
    navigation.setOptions({
      headerShown: false,
    });
  };

  headerStyle();
  return (
    <>
      <View style={styles.wrap}>
        <View style={styles.fakeBlurStyle}>
          <TouchableOpacity onPress={() => navigation.navigate('ResultSearch')}>
            <Image
              source={require('../assets/icons/left(사진).png')}
              style={{ resizeMode: 'contain', height: 12, width: 12 }}
            />
          </TouchableOpacity>
        </View>
        <SafeAreaView>
          <DetailImage scrollY={scrollY} />
          <DetailBottom scrollY={scrollY} param={param} />
        </SafeAreaView>
      </View>
    </>
  );
};

export default RestaurantDetailScreen;

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff',
    display: 'flex',
    flex: 1,
    height: '100%',
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fakeBlurStyle: {
    position: 'absolute',
    zIndex: 1,
    ...Platform.select({
      ios: {
        top: 50,
      },
      android: {
        top: 20,
      },
    }),

    left: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});
