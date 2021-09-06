import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import { Text, View, Pressable, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '검색하기',
      headerLeft: () => <></>,
    });
  };

  headerStyle();

  const refSearch = useRef(null);

  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    refSearch.current.focus();
  }, []);

  const handleSearchInput = useCallback(
    (e) => {
      setSearchInput(e);
      console.log(e);
    },
    [searchInput],
  );

  return (
    <Wrapper>
      <View style={styles.searchInputItem}>
        <Image
          source={require(`../assets/icons/search_gray.png`)}
          style={styles.searchInputImage}
        />
        <TextInput
          autoCapitalize={'none'}
          placeholder="음식점/ 닉네임 검색"
          value={searchInput}
          onChangeText={handleSearchInput}
          style={styles.searchInputText}
          ref={refSearch}
        />
      </View>
    </Wrapper>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchInputItem: {
    width: 309,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    flexWrap: 'wrap',
  },
  searchInputImage: {
    width: 16,
    height: 16,
    marginTop: 10,
    marginLeft: 12,
  },
  searchInputText: {
    width: '80%',
    height: '100%',
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '500',
    color: '#2a3037',
  },
});

const Wrapper = styled.View({
  paddingTop: 17,
  backgroundColor: '#fff',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});
