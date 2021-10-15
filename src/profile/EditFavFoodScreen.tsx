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
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import favFoodData from '../onBoarding/constants/FavFoodData';

import { useAppSelector, useAppDispatch } from '../redux/hooks';
import {  addFoodEditType, addFoodEditStateType } from '../redux/userSlice';

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

const EditFavFoodScreen: React.FC = () => {
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
        <>
          <TouchableOpacity style={styles.backIcon} onPress={() => onPress()}>
            <Image source={require(`../assets/icons/Left.png`)}></Image>
          </TouchableOpacity>
        </>
      ),
    });
  };

  headerStyle();

  const dispatch = useAppDispatch();
  const { foodType, foodEditStateType, foodEditType } = useAppSelector((state) => state.users);

  const [foodSelect, setFoodSelect] = useState<string | undefined>('');

  useEffect(() => {
    if (!foodEditStateType && foodType) {
      setFoodSelect(foodType);
    }
    if (foodEditStateType && foodEditType) {
      setFoodSelect(foodEditType);
    }
  }, []);

  const handleFavFood = (food: string): void => {
    setFoodSelect(food);
  };

  const onPress = () => {
    if (foodSelect) {
      dispatch(addFoodEditType(foodSelect));
      dispatch(addFoodEditStateType(true));
      navigation.navigate('MyEdit');
    }
  };

  const HandleFavFoodImage = (name: string) => {
    let FavFoodImagePath;
    switch (name) {
      case '술':
        FavFoodImagePath = require('../assets/images/onBoading/favFood/grapes.png');
        break;
      case '커피':
        FavFoodImagePath = require(`../assets/images/onBoading/favFood/coffee.png`);
        break;
      case '베이커리/디저트':
        FavFoodImagePath = require('../assets/images/onBoading/favFood/pudding.png');
        break;
      case '해산물':
        FavFoodImagePath = require('../assets/images/onBoading/favFood/octopus.png');
        break;
      case '치킨':
        FavFoodImagePath = require('../assets/images/onBoading/favFood/friedChicken.png');
        break;
      case '피자':
        FavFoodImagePath = require('../assets/images/onBoading/favFood/pizza.png');
        break;
      case '면':
        FavFoodImagePath = require('../assets/images/onBoading/favFood/noodles.png');
        break;
      case '분식':
        FavFoodImagePath = require('../assets/images/onBoading/favFood/tteokbokki.png');
        break;
      case '샐러드':
        FavFoodImagePath = require('../assets/images/onBoading/favFood/salad.png');
        break;
      case '국밥':
        FavFoodImagePath = require('../assets/images/onBoading/favFood/riceSoup.png');
        break;
      case '찌개/탕':
        FavFoodImagePath = require('../assets/images/onBoading/favFood/stew.png');
        break;
      case '고기':
        FavFoodImagePath = require('../assets/images/onBoading/favFood/chop.png');
        break;
    }

    return <Image source={FavFoodImagePath} style={styles.itemLargeText} />;
  };

  const renderItem = ({ item }: { item: IRenderItemProps }) => {
    if (item.empty === true) {
      return <View style={[styles.favFoodItem, styles.itemInvisible]} />;
    }
    if (item.title === foodSelect) {
      return (
        <Pressable style={styles.favFoodItem} onPress={() => handleFavFood(item.title)}>
          <View style={styles.itemSelectImage}>
            <View style={styles.itemSelectImageCheck}>
              <Image source={require('../assets/icons/Checkmark.png')} />
            </View>
            {HandleFavFoodImage(item.title)}
          </View>
          <Text style={styles.itemLargeText}>{item.title}</Text>
        </Pressable>
      );
    }
    return (
      <TouchableOpacity style={styles.favFoodItem} onPress={() => handleFavFood(item.title)}>
        <View style={styles.itemImage}>{HandleFavFoodImage(item.title)}</View>
        <Text style={styles.itemLargeText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Wrapper>
      <Text style={styles.textTitle}>내가 좋아하는 음식 선택</Text>
      <FlatList
        data={fomatFavFoodData(favFoodData, numColumns)}
        style={styles.favFoodContainer}
        renderItem={renderItem}
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
      />
    </Wrapper>
  );
};

export default EditFavFoodScreen;

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
  itemSelectImageCheck: {
    width: '80%',
    height: '80%',
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
