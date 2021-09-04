import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Button,
  Pressable,
  FlatList,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import favFoodData from './constants/FavFoodData';

const fomatFavFoodData = (favFoodData, numColumns) => {
  const numberOfFullRows = Math.floor(favFoodData.length / numColumns);
  let numberOfElementsLastRow = favFoodData.length - numberOfFullRows * numColumns;

  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    favFoodData.push({ title: 'blank', empty: true });
    numberOfElementsLastRow++;
  }

  return favFoodData;
};

const numColumns = 3;

const AddFavFoodScreen = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '취향선택',
      headerLeft: () => (
        <Pressable
          style={styles.backIcon}
          onPress={() => {
            navigation.navigate('AddStyle');
          }}>
          <Image source={require(`../assets/icons/Left.png`)}></Image>
        </Pressable>
      ),
      headerRight: () => (
        <Pressable
          style={styles.rightIcon}
          onPress={() => {
            navigation.navigate('AddFriends');
          }}>
          <Image source={require(`../assets/icons/RightVector.png`)}></Image>
        </Pressable>
      ),
    });
  };

  headerStyle();

  const [foodSelect, setFoodSelect] = useState('');

  const hadleFavFood = (food) => {
    setFoodSelect(food);
  };

  const renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.favFoodItem, styles.itemInvisible]} />;
    }
    if (item.title === foodSelect) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => hadleFavFood(item.title)}>
          <View style={styles.itemSelectImage}>
            {/* <Image source={require(`../assets/images/onBoading/favFood/grapes.png`)} /> */}
          </View>
          <Text style={styles.itemLargeText}>{item.title}</Text>
        </Pressable>
      );
    }
    if (index === 0) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => hadleFavFood(item.title)}>
          <View style={styles.itemImage}>
            <Image source={require(`../assets/images/onBoading/favFood/grapes.png`)} />
          </View>
          <Text style={styles.itemLargeText}>{item.title}</Text>
        </Pressable>
      );
    }
    if (index === 1) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => hadleFavFood(item.title)}>
          <View style={styles.itemImage}>
            <Image source={require(`../assets/images/onBoading/favFood/coffee.png`)} />
          </View>
          <Text style={styles.itemLargeText}>{item.title}</Text>
        </Pressable>
      );
    }
    if (index === 2) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => hadleFavFood(item.title)}>
          <View style={styles.itemImage}>
            <Image source={require(`../assets/images/onBoading/favFood/pudding.png`)} />
          </View>
          <Text style={styles.itemSmallText}>{item.title}</Text>
        </Pressable>
      );
    }
    if (index === 3) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => hadleFavFood(item.title)}>
          <View style={styles.itemImage}>
            <Image source={require(`../assets/images/onBoading/favFood/octopus.png`)} />
          </View>
          <Text style={styles.itemLargeText}>{item.title}</Text>
        </Pressable>
      );
    }
    if (index === 4) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => hadleFavFood(item.title)}>
          <View style={styles.itemImage}>
            <Image source={require(`../assets/images/onBoading/favFood/friedChicken.png`)} />
          </View>
          <Text style={styles.itemLargeText}>{item.title}</Text>
        </Pressable>
      );
    }
    if (index === 5) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => hadleFavFood(item.title)}>
          <View style={styles.itemImage}>
            <Image source={require(`../assets/images/onBoading/favFood/pizza.png`)} />
          </View>
          <Text style={styles.itemLargeText}>{item.title}</Text>
        </Pressable>
      );
    }
    if (index === 6) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => hadleFavFood(item.title)}>
          <View style={styles.itemImage}>
            <Image source={require(`../assets/images/onBoading/favFood/noodles.png`)} />
          </View>
          <Text style={styles.itemLargeText}>{item.title}</Text>
        </Pressable>
      );
    }
    if (index === 7) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => hadleFavFood(item.title)}>
          <View style={styles.itemImage}>
            <Image source={require(`../assets/images/onBoading/favFood/tteokbokki.png`)} />
          </View>
          <Text style={styles.itemLargeText}>{item.title}</Text>
        </Pressable>
      );
    }
    if (index === 8) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => hadleFavFood(item.title)}>
          <View style={styles.itemImage}>
            <Image source={require(`../assets/images/onBoading/favFood/salad.png`)} />
          </View>
          <Text style={styles.itemLargeText}>{item.title}</Text>
        </Pressable>
      );
    }
    if (index === 9) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => hadleFavFood(item.title)}>
          <View style={styles.itemImage}>
            <Image source={require(`../assets/images/onBoading/favFood/riceSoup.png`)} />
          </View>
          <Text style={styles.itemLargeText}>{item.title}</Text>
        </Pressable>
      );
    }
    if (index === 10) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => hadleFavFood(item.title)}>
          <View style={styles.itemImage}>
            <Image source={require(`../assets/images/onBoading/favFood/stew.png`)} />
          </View>
          <Text style={styles.itemLargeText}>{item.title}</Text>
        </Pressable>
      );
    }
    if (index === 11) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => hadleFavFood(item.title)}>
          <View style={styles.itemImage}>
            <Image source={require(`../assets/images/onBoading/favFood/chop.png`)} />
          </View>
          <Text style={styles.itemLargeText}>{item.title}</Text>
        </Pressable>
      );
    }
    // return (
    //   <View style={styles.favFoodItem}>
    //     <View style={styles.itemImage}>
    //       <Image source={require('../assets/images/onBoading/favFood/grapes.png')} />
    //     </View>
    //     <Text style={styles.itemLargeText}>{item.title}</Text>
    //   </View>
    // );
  };

  return (
    <Wrapper>
      <Text style={styles.textTitle}>내가 좋아하는 음식 선택</Text>
      <FlatList
        data={fomatFavFoodData(favFoodData, numColumns)}
        style={styles.favFoodContainer}
        renderItem={renderItem}
        numColumns={numColumns}
      />
    </Wrapper>
  );
};

export default AddFavFoodScreen;

const styles = StyleSheet.create({
  backIcon: {
    width: 50,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 13,
    paddingRight: 20,
  },
  rightIcon: {
    width: 50,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 13,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#2a3037',
  },
  favFoodItem: {
    width: (Dimensions.get('window').width - 46) / 3,
    height: 146,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  itemImage: {
    backgroundColor: '#fe554a20',
    borderRadius: 50,
    padding: 10,
  },
  itemSelectImage: {
    backgroundColor: '#00000020',
    borderRadius: 0,
    padding: 10,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  favFoodContainer: {
    marginTop: 61,
  },
  itemLargeText: {
    paddingTop: 8,
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#2a3037',
  },
  itemSmallText: {
    paddingTop: 8,
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#2a3037',
  },
});

const Wrapper = styled.View({
  paddingTop: 36,
  backgroundColor: '#fff',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingHorizontal: 23,
});
