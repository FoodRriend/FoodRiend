import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
  Dimensions,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import favFoodData from './constants/FavFoodData';

import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { addFoodType } from '../redux/userSlice';

interface IRenderItemProps {
  title: string;
  empty: boolean;
  usl?: string;
}

const fomatFavFoodData = (favFoodData: any, numColumns: number) => {
  const numberOfFullRows = Math.floor(favFoodData.length / numColumns);
  let numberOfElementsLastRow = favFoodData.length - numberOfFullRows * numColumns;

  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    favFoodData.push({ title: 'blank', empty: true });
    numberOfElementsLastRow++;
  }

  return favFoodData;
};

const numColumns = 3;

const AddFavFoodScreen: React.FC = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '취향선택',
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
        <>
          {foodSelect ? (
            <Pressable
              style={styles.rightIcon}
              onPress={() => {
                navigation.navigate('AddFriends');
              }}>
              <Image source={require(`../assets/icons/RightVector.png`)}></Image>
            </Pressable>
          ) : (
            <Pressable
              style={styles.rightIcon}
              onPress={() => {
                // alert('좋아하는 음식을 선택해주세요.');
              }}>
              <Image source={require(`../assets/icons/RightVector.png`)}></Image>
            </Pressable>
          )}
        </>
      ),
    });
  };

  headerStyle();

  const dispatch = useAppDispatch();

  const [foodSelect, setFoodSelect] = useState<string>('');

  const hadleFavFood = (food: string): void => {
    setFoodSelect(food);
  };

  useEffect(() => {
    console.log('foodSelect', foodSelect);
    dispatch(addFoodType(foodSelect));
  }, [foodSelect]);

  const renderItem = ({ item, index }: { item: IRenderItemProps; index: number }) => {
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
            <Image
              style={styles.platformImage}
              source={require(`../assets/images/onBoading/favFood/grapes.png`)}
            />
          </View>
          <Text style={styles.itemLargeText}>{item.title}</Text>
        </Pressable>
      );
    }
    if (index === 1) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => hadleFavFood(item.title)}>
          <View style={styles.itemImage}>
            <Image
              style={styles.platformImage}
              source={require(`../assets/images/onBoading/favFood/coffee.png`)}
            />
          </View>
          <Text style={styles.itemLargeText}>{item.title}</Text>
        </Pressable>
      );
    }
    if (index === 2) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => hadleFavFood(item.title)}>
          <View style={styles.itemImage}>
            <Image
              style={styles.platformImage}
              source={require(`../assets/images/onBoading/favFood/pudding.png`)}
            />
          </View>
          <Text style={styles.itemSmallText}>{item.title}</Text>
        </Pressable>
      );
    }
    if (index === 3) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => hadleFavFood(item.title)}>
          <View style={styles.itemImage}>
            <Image
              style={styles.platformImage}
              source={require(`../assets/images/onBoading/favFood/octopus.png`)}
            />
          </View>
          <Text style={styles.itemLargeText}>{item.title}</Text>
        </Pressable>
      );
    }
    if (index === 4) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => hadleFavFood(item.title)}>
          <View style={styles.itemImage}>
            <Image
              style={styles.platformImage}
              source={require(`../assets/images/onBoading/favFood/friedChicken.png`)}
            />
          </View>
          <Text style={styles.itemLargeText}>{item.title}</Text>
        </Pressable>
      );
    }
    if (index === 5) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => hadleFavFood(item.title)}>
          <View style={styles.itemImage}>
            <Image
              style={styles.platformImage}
              source={require(`../assets/images/onBoading/favFood/pizza.png`)}
            />
          </View>
          <Text style={styles.itemLargeText}>{item.title}</Text>
        </Pressable>
      );
    }
    if (index === 6) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => hadleFavFood(item.title)}>
          <View style={styles.itemImage}>
            <Image
              style={styles.platformImage}
              source={require(`../assets/images/onBoading/favFood/noodles.png`)}
            />
          </View>
          <Text style={styles.itemLargeText}>{item.title}</Text>
        </Pressable>
      );
    }
    if (index === 7) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => hadleFavFood(item.title)}>
          <View style={styles.itemImage}>
            <Image
              style={styles.platformImage}
              source={require(`../assets/images/onBoading/favFood/tteokbokki.png`)}
            />
          </View>
          <Text style={styles.itemLargeText}>{item.title}</Text>
        </Pressable>
      );
    }
    if (index === 8) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => hadleFavFood(item.title)}>
          <View style={styles.itemImage}>
            <Image
              style={styles.platformImage}
              source={require(`../assets/images/onBoading/favFood/salad.png`)}
            />
          </View>
          <Text style={styles.itemLargeText}>{item.title}</Text>
        </Pressable>
      );
    }
    if (index === 9) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => hadleFavFood(item.title)}>
          <View style={styles.itemImage}>
            <Image
              style={styles.platformImage}
              source={require(`../assets/images/onBoading/favFood/riceSoup.png`)}
            />
          </View>
          <Text style={styles.itemLargeText}>{item.title}</Text>
        </Pressable>
      );
    }
    if (index === 10) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => hadleFavFood(item.title)}>
          <View style={styles.itemImage}>
            <Image
              style={styles.platformImage}
              source={require(`../assets/images/onBoading/favFood/stew.png`)}
            />
          </View>
          <Text style={styles.itemLargeText}>{item.title}</Text>
        </Pressable>
      );
    }
    if (index === 11) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => hadleFavFood(item.title)}>
          <View style={styles.itemImage}>
            <Image
              style={styles.platformImage}
              source={require(`../assets/images/onBoading/favFood/chop.png`)}
            />
          </View>
          <Text style={styles.itemLargeText}>{item.title}</Text>
        </Pressable>
      );
    }
    return <></>;
  };

  return (
    <Wrapper>
      <Text style={styles.textTitle}>내가 좋아하는 음식 선택</Text>
      <FlatList
        data={fomatFavFoodData(favFoodData, numColumns)}
        keyExtractor={(item) => item.toString()}
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
    ...Platform.select({
      ios: {
        color: '#2a3037',
        fontSize: 24,
        fontWeight: 'bold',
      },
      android: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
      },
    }),
    alignSelf: 'center',
  },
  favFoodItem: {
    ...Platform.select({
      ios: { width: (Dimensions.get('window').width - 46) / 3, height: 146 },
      android: {
        width: (Dimensions.get('window').width - 46) / 3,
        height: 146,
      },
    }),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingBottom: 20,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  itemImage: {
    backgroundColor: '#fe554a20',
    borderRadius: 50,
    // padding: 10,
    ...Platform.select({
      ios: { width: '86%', height: '70%', alignItems: 'center', justifyContent: 'center' },
      android: {
        width: '80%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
      },
    }),
  },
  itemSelectImage: {
    backgroundColor: '#00000020',
    borderRadius: 0,
    padding: 10,
    ...Platform.select({
      ios: { width: '86%', height: '70%', alignItems: 'center', justifyContent: 'center' },
      android: {
        width: '80%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
      },
    }),
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  favFoodContainer: {
    ...Platform.select({
      ios: {
        marginTop: 61,
      },
      android: {
        marginTop: 31,
      },
    }),
  },
  itemLargeText: {
    paddingTop: 8,
    fontStyle: 'normal',
    color: '#2a3037',
    ...Platform.select({
      ios: { fontSize: 18, fontWeight: '500' },
      android: {
        fontSize: 16,
        fontWeight: '600',
      },
    }),
  },
  itemSmallText: {
    paddingTop: 8,
    fontStyle: 'normal',
    color: '#2a3037',
    ...Platform.select({
      ios: { fontSize: 16, fontWeight: '500' },
      android: {
        fontSize: 14,
        fontWeight: '600',
      },
    }),
  },
  platformImage: {
    ...Platform.select({
      ios: { resizeMode: 'contain' },
      android: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
      },
    }),
  },
});

const Wrapper = styled.View({
  ...Platform.select({
    ios: {
      paddingTop: 36,
    },
    android: {
      paddingTop: 20,
    },
  }),
  backgroundColor: '#fff',
  flex: 1,
  alignItems: 'center',
  paddingHorizontal: 23,
});
