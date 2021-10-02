import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();

  setTimeout(() => navigation.navigate('Login'), 2000);
  return (
    <View>
      <Image
        style={styles.image}
        source={require('../assets/images/onBoading/splash.png')}
        resizeMode="cover"
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});
