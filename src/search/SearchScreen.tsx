import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import { Alert, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchSearchData } from '@/redux/searchSlice';
import SearchTextInput from './components/SearchTextInput';

import messaging from '@react-native-firebase/messaging';

const SearchScreen: React.FC = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '검색하기',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        ...Platform.select({
          ios: {
            fontWeight: '600',
            fontSize: 17,
          },
          android: {
            fontWeight: 'bold',
            fontSize: 15,
          },
        }),
      },
      headerStyle: {
        ...Platform.select({
          android: {
            borderWidth: 0.8,
          },
        }),
        borderColor: '#dfe2e5',
      },
      headerLeft: () => <></>,
    });
  };

  headerStyle();

  const [searchInput, setSearchInput] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleSearchInput = useCallback((e: string) => {
    setSearchInput(e);
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  });

  const onSubmitHandler = async () => {
    setSearchInput('');
    dispatch(fetchSearchData({ searchInput: searchInput }));
    navigation.navigate('ResultSearch');
  };

  return (
    <Wrapper>
      <SearchTextInput
        searchInput={searchInput}
        onSubmitHandler={onSubmitHandler}
        handleSearchInput={handleSearchInput}
        styleIosMargin={0}
        styleAndroidMargin={0}
        styleAndroidWidth={320}
      />
    </Wrapper>
  );
};

export default SearchScreen;

const Wrapper = styled.View({
  paddingTop: 17,
  backgroundColor: '#fff',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});
