import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Signup');
  };
  return (
    <View>
      <Text>LoginScreen</Text>
      <Pressable onPress={onPress}>
        <Text>Click</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
