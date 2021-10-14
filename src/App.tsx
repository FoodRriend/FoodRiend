import 'react-native-gesture-handler';
import * as React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';

import { Image, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {
  SignupScreen,
  SplashScreen,
  LoginScreen,
  AddStyleScreen,
  AddFavFoodScreen,
  AddFriendsScreen,
  SignupCompleteScreen,
} from './onBoarding';
import { FeedScreen } from './feed';
import {
  MyEditScreen,
  MyFriendListScreen,
  MyScreen,
  MyPostReviewScreen,
  AlertScreen,
  PostScreen,
} from './profile';
import {
  SearchScreen,
  ResultSearchScreen,
  RestaurantDetailScreen,
  RestaurantPhotoDetailScreen,
} from './search';
import {
  SettingsScreen,
  AccountScreen,
  SettingAlertScreen,
  TermsPolicyScreen,
  CustomerServiceScreen,
  NoticeScreen,
  NoticeDetailScreen,
  WithdrawalScreen,
} from './setting';
import {
  TermsAgreementScreen,
  TermsDetailScreen,
  PersonalInfoScreen,
  InfoProcessScreen,
} from './termsAgreement';
import FriendPostReviewScreen from './shared/hooks/PostReviewScreen';
import { MyFirstList, MySecondList, MyThirdList } from './profile/components';

// 아이콘 사용 시
// import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const Stack = createStackNavigator();
const MyPageStack = createStackNavigator();
const FeedStack = createStackNavigator();
const SearchStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

// 탭 아이콘 함수
const TabBarIcon = (focused: boolean, name: string) => {
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
const TopTap = () => {
  return (
    <TopTab.Navigator tabBar={(props) => <MyScreen {...props} />}>
      <TopTab.Screen name="먹어봤어요" component={MyFirstList} />
      <TopTab.Screen name="가보고 싶어요" component={MySecondList} />
      <TopTab.Screen name="인생맛집" component={MyThirdList} />
    </TopTab.Navigator>
  );
};

const BottomTap = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        style: {
          ...Platform.select({
            ios: {
              height: 85,
              paddingTop: 25,
              marginTop: 1,
            },
            android: {
              height: 60,
              paddingTop: 10,
              marginTop: 1,
            },
          }),
        },
      }}
      screenOptions={({ route }) => ({
        tabBarLabel: '',
        tabBarIcon: ({ focused }) => TabBarIcon(focused, route.name),
      })}>
      <Tab.Screen name="Feed" component={FeedStackScreen} />
      <Tab.Screen name="Search" component={SearchStackScreen} />
      <Tab.Screen name="MyPage" component={MyPageStackScreen} />
    </Tab.Navigator>
  );
};

const FeedStackScreen = () => {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="Feed" component={FeedScreen} />
      <FeedStack.Screen name="PostReview" component={FriendPostReviewScreen} />
    </FeedStack.Navigator>
  );
};

// 프로팔
const MyPageStackScreen = () => {
  return (
    <MyPageStack.Navigator>
      <MyPageStack.Screen
        options={{
          headerShown: false,
        }}
        name="MyPage"
        component={TopTap}
      />
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

      <MyPageStack.Screen name="Setting" component={SettingsScreen} />
      <MyPageStack.Screen name="SettingAlert" component={SettingAlertScreen} />

      <MyPageStack.Screen name="Notice" component={NoticeScreen} />
      <MyPageStack.Screen name="NoticeDetail" component={NoticeDetailScreen} />
      <MyPageStack.Screen name="CustomerService" component={CustomerServiceScreen} />
      <MyPageStack.Screen name="TermsPolicy" component={TermsPolicyScreen} />
    </MyPageStack.Navigator>
  );
};

// map 가게 상세정보
const SearchStackScreen = () => {
  return (
    <Provider store={store}>
      <SearchStack.Navigator>
        <SearchStack.Screen name="Search" component={SearchScreen} />
        <SearchStack.Screen name="ResultSearch" component={ResultSearchScreen} />
        <SearchStack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
        <SearchStack.Screen name="RestaurantPhotoDetail" component={RestaurantPhotoDetailScreen} />
      </SearchStack.Navigator>
    </Provider>
  );
};

const App: React.FC<void> = () => {
  // const [loding, setLoding] = useState(false);
  // const isTrue = () => {
  //   setLoding(true);
  // };
  // const loding = test();
  // setTimeout(isTrue, 3000);

  return (
    <Provider store={store}>
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
          <Stack.Screen name="PostReview" component={FriendPostReviewScreen} />

          <Stack.Screen name="MyEdit" component={MyEditScreen} />
          <Stack.Screen name="Post" component={PostScreen} />

          <Stack.Screen name="Account" component={AccountScreen} />
          <Stack.Screen name="Withdrawal" component={WithdrawalScreen} />

          <Stack.Screen name="Terms" component={TermsAgreementScreen} />
          <Stack.Screen name="TermsDetail" component={TermsDetailScreen} />
          <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
          <Stack.Screen name="InfoProcess" component={InfoProcessScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
