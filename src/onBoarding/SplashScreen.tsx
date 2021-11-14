import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { verifyToken } from '@/redux/userSlice';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    async function goToScreen() {
      const userInfo = await AsyncStorage.getItem('userInfo').then((res) => {
        if (res) {
          return JSON.parse(res);
        }
        return null;
      });
      const { data } = await verifyToken(userInfo.token);
      if (userInfo.token && !userInfo.isNewMember && data) {
        setTimeout(() => navigation.navigate('Feed'), 2000);
      } else {
        setTimeout(() => navigation.navigate('Login'), 2000);
      }
    }
    goToScreen();
  }, []);

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
