import React from 'react';

import { View, Pressable, StyleSheet, TextInput, Image, Platform } from 'react-native';

interface SearchTextInputProps {
  searchInput: string;
  onSubmitHandler: () => void;
  handleSearchInput: (e: string) => void;
  styleAndroidWidth: number;
  styleAndroidMargin: number;
  styleIosMargin: number;
}

const SearchTextInput: React.FC<SearchTextInputProps> = ({
  searchInput,
  onSubmitHandler,
  handleSearchInput,
  styleAndroidWidth,
  styleAndroidMargin,
  styleIosMargin,
}) => {
  return (
    <View
      style={{
        ...Platform.select({
          ios: {
            width: 309,
            height: 37,
            marginTop: styleIosMargin,
          },
          android: {
            width: styleAndroidWidth,
            height: 41,
            marginTop: styleAndroidMargin,
          },
        }),
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        flexWrap: 'wrap',
      }}>
      <Pressable onPress={onSubmitHandler}>
        <Image
          source={require(`../../assets/icons/search_gray.png`)}
          style={styles.searchInputImage}
        />
      </Pressable>
      <TextInput
        autoCapitalize={'none'}
        placeholder="음식점/ 닉네임 검색"
        value={searchInput}
        onSubmitEditing={onSubmitHandler}
        onChangeText={handleSearchInput}
        style={styles.searchInputText}
      />
    </View>
  );
};

export default SearchTextInput;

const styles = StyleSheet.create({
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
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
      android: {
        fontWeight: '600',
      },
    }),
    color: '#2a3037',
  },
});
