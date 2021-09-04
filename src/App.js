import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';

// import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  SignupScreen,
  SplashScreen,
  LoginScreen,
  AddStyleScreen,
  AddFavFoodScreen,
  AddFriendsScreen,
  SignupCompleteScreen,
} from '@/onBoarding';
// import test from './shared/hooks/test';

// 아이콘 사용 시
// import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const Stack = createStackNavigator();

const App = () => {
  // const [loding, setLoding] = useState(false);
  // const isTrue = () => {
  //   setLoding(true);
  // };
  // const loding = test();
  // setTimeout(isTrue, 3000);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        headerMode="screen"
        // initialRouteName={loding ? 'Login' : 'Splash'}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="AddStyle" component={AddStyleScreen} />
        <Stack.Screen name="AddFavFood" component={AddFavFoodScreen} />
        <Stack.Screen name="AddFriends" component={AddFriendsScreen} />
        <Stack.Screen name="SignupComplete" component={SignupCompleteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
