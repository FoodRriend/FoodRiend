import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';

import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  SignupScreen,
  SplashScreen,
  LoginScreen,
  AddStyleScreen,
  AddFavFoodScreen,
  AddFriendsScreen,
  SignupCompleteScreen,
} from '@/onBoarding';
import { FeedScreen } from '@/feed';
import {
  MyEditScreen,
  MyFriendListScreen,
  MyScreen,
  MyPostReviewScreen,
  AlertScreen,
} from '@/profile';
import { SearchScreen } from '@/search';
import { SettingsScreen, AccountScreen, SettingAlertScreen, TermsPolicyScreen } from '@/setting';
import {
  TermsAgreementScreen,
  TermsDetailScreen,
  PersonalInfoScreen,
  InfoProcessScreen,
} from '@/termsAgreement';

// import test from './shared/hooks/test';

// 아이콘 사용 시
// import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const Stack = createStackNavigator();
const MyPageStack = createStackNavigator();
const SearchStack = createStackNavigator();
const TermsStack = createStackNavigator();
const SettingStack = createStackNavigator();
const Tab = createBottomTabNavigator();

// 탭 아이콘 함수
const TabBarIcon = (focused, name) => {
  let iconImagePath;
  if (name === 'Feed') {
    iconImagePath = focused
      ? require('./assets/icons/home_black.png')
      : require('./assets/icons/home_white.png');
  } else if (name === 'Search') {
    iconImagePath = require('./assets/icons/search.png');
  } else if (name === 'MyPage') {
    iconImagePath = focused
      ? require('./assets/icons/profile_black.png')
      : require('./assets/icons/profile_whtie.png');
  }
  return <Image source={iconImagePath} style={{ width: 22, height: 22 }} />;
};

// 회원가입
const SignupContainer = () => {
  return (
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="AddStyle" component={AddStyleScreen} />
      <Stack.Screen name="AddFavFood" component={AddFavFoodScreen} />
      <Stack.Screen name="AddFriends" component={AddFriendsScreen} />
      <Stack.Screen name="SignupComplete" component={SignupCompleteScreen} />
    </Stack.Navigator>
  );
};

// tap 메뉴
const BottomTap = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        style: { height: 85, paddingTop: 25, marginTop: 1 },
      }}
      screenOptions={({ route }) => ({
        tabBarLabel: '',
        tabBarIcon: ({ focused }) => TabBarIcon(focused, route.name),
      })}>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Search" component={SearchStackScreen} />
      <Tab.Screen name="MyPage" component={MyPageStackScreen} />
    </Tab.Navigator>
  );
};

// 프로팔
const MyPageStackScreen = () => {
  return (
    <MyPageStack.Navigator>
      <MyPageStack.Screen name="MyPage" component={MyScreen} />
      <MyPageStack.Screen name="MyFriendList" component={MyFriendListScreen} />
      <MyPageStack.Screen
        options={{
          headerStyle: {
            elevation: 0, //  android
            shadowOpacity: 0, // ios
            borderBottomWidth: 0,
          },
        }}
        name="MyPostReview"
        component={MyPostReviewScreen}
      />
      <MyPageStack.Screen name="Alert" component={AlertScreen} />
    </MyPageStack.Navigator>
  );
};

// map 가게 상세정보
const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchScreen} />
    </SearchStack.Navigator>
  );
};

// 설정
const SettingStackScreen = () => {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name="Setting" component={SettingsScreen} />
      <SettingStack.Screen name="SettingAlert" component={SettingAlertScreen} />
    </SettingStack.Navigator>
  );
};

// 개인정보 약관
const TermsStackScreen = () => {
  return (
    <TermsStack.Navigator>
      <TermsStack.Screen name="Terms" component={TermsAgreementScreen} />
      <TermsStack.Screen name="TermsDetail" component={TermsDetailScreen} />
      <TermsStack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
      <TermsStack.Screen name="InfoProcess" component={InfoProcessScreen} />
    </TermsStack.Navigator>
  );
};

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
        initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />

        <Stack.Screen name="Signup" component={SignupContainer} />

        <Stack.Screen name="Feed" component={BottomTap} />

        <Stack.Screen name="MyEdit" component={MyEditScreen} />

        <Stack.Screen name="Account" component={AccountScreen} />

        <Stack.Screen name="Setting" component={SettingStackScreen} />
        <Stack.Screen name="TermsPolicy" component={TermsPolicyScreen} />

        <Stack.Screen name="Terms" component={TermsStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
