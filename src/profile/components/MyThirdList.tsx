import React, { useState, useEffect } from 'react';
import styled from '@emotion/native';

import {
  Image,
  View,
  Text,
  FlatList,
  Platform,
  StyleSheet,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { useNavigation } from '@react-navigation/native';
import { changeScrollState } from '../../redux/profileSlice';
import { myScreenData3, myScreenFirstData } from '../constants';

interface IMyProps {
  address: string;
  name: string;
  score: number;
  empty?: string;
}

const MyThirdList = () => {
  const dispatch = useAppDispatch();

  const [num, setNum] = useState(0);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    if (num > 20) {
      if (end) {
        dispatch(changeScrollState('Up'));
        setEnd(false);
      }
    }
    if (num < 20) {
      if (end) {
        dispatch(changeScrollState('Down'));
        setEnd(false);
      }
    }
  }, [num, end]);

  const handleNum = (state: number) => {
    let numstate = Math.round(state);
    setNum(numstate);
  };

  const fomatMyListData = (data: any) => {
    let dataLeng = data.length;

    while (dataLeng < 6) {
      data.push({ empty: true, name: '' });
      dataLeng++;
    }
    return data;
  };

  const renderFirstItem = ({ item }: { item: any }) => {
    if (item.empty) {
      return (
        <View
          style={{
            width: Dimensions.get('window').width / 2 - 12,
            height: 150,
          }}
        />
      );
    }
    return (
      <MyscreenFirstReviewCover2>
        <View style={styles.myscreenFirstReviewItem}>
          <Image
            style={{ width: 33, height: 45 }}
            source={require(`../../assets/icons/best.png`)}
          />
        </View>
        <Text style={{ marginTop: 11, fontSize: 20, fontWeight: '700' }}>
          인생맛집을 남겨주세요
        </Text>
        <Text style={{ marginTop: 12, fontSize: 15, fontWeight: '500' }}>
          여러분이 가장 좋은 경험을 하였던
        </Text>
        <Text style={{ fontSize: 15, fontWeight: '500', marginBottom: 30 }}>
          최고의 맛집을 알려주세요.
        </Text>
        <TouchableOpacity style={styles.myScreenFirstReviewButton}>
          <Text style={{ fontSize: 15, fontWeight: '900', color: '#ffffff' }}>
            인생맛집 기록하기
          </Text>
        </TouchableOpacity>
      </MyscreenFirstReviewCover2>
    );
  };

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    if (item.empty) {
      return (
        <View
          style={{
            width: Dimensions.get('window').width / 2 - 12,
            height: 206,
          }}
        />
      );
    }
    if (index === 0) {
      return (
        <View style={styles.myScreenRestaurantCover}>
          <View style={{ width: '100%', height: 37, justifyContent: 'center' }} />
          <TouchableOpacity>
            <View style={{ width: 160 }}>
              <Image
                style={{ width: '100%', height: 153, borderRadius: 16 }}
                source={require(`../../assets/images/profile/Rectangle1.png`)}
              />
              <View style={{ flexWrap: 'wrap' }}>
                <View style={{ width: '70%' }}>
                  <Text style={styles.myScreenRestaurantAddress}>{item.address}</Text>
                  {item.name.length > 7 ? (
                    <Text style={styles.myScreenRestaurantName}>{`${item.name.slice(
                      0,
                      6,
                    )}...`}</Text>
                  ) : (
                    <Text style={styles.myScreenRestaurantName}>{item.name}</Text>
                  )}
                  <View style={styles.myScreenRestaurantContent}>
                    <Image
                      style={{ width: 20, height: 20, marginLeft: 2 }}
                      source={require(`../../assets/icons/star.png`)}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '500',
                        color: '#2A3037',
                        marginLeft: 3,
                      }}>
                      {item.score}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    if (index === 1) {
      return (
        <View style={styles.myScreenRestaurantCover}>
          <View style={{ width: '100%', height: 37 }}></View>
          <TouchableOpacity>
            <View style={{ width: 160 }}>
              <Image
                style={{ width: '100%', height: 153, borderRadius: 16 }}
                source={require(`../../assets/images/profile/Rectangle1.png`)}
              />
              <View style={{ flexWrap: 'wrap' }}>
                <View style={{ width: '70%' }}>
                  <Text style={styles.myScreenRestaurantAddress}>{item.address}</Text>
                  {item.name.length > 7 ? (
                    <Text style={styles.myScreenRestaurantName}>{`${item.name.slice(
                      0,
                      6,
                    )}...`}</Text>
                  ) : (
                    <Text style={styles.myScreenRestaurantName}>{item.name}</Text>
                  )}
                  <View style={styles.myScreenRestaurantContent}>
                    <Image
                      style={{ width: 20, height: 20, marginLeft: 2 }}
                      source={require(`../../assets/icons/star.png`)}
                    />
                    <Text
                      style={{ fontSize: 12, fontWeight: '500', color: '#2A3037', marginLeft: 3 }}>
                      {item.score}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.myScreenRestaurantCover}>
        <TouchableOpacity>
          <View style={{ width: 160 }}>
            <Image
              style={{ width: '100%', height: 153, borderRadius: 16 }}
              source={require(`../../assets/images/profile/Rectangle3.png`)}
            />
            <View style={{ flexWrap: 'wrap' }}>
              <View style={{ width: '70%' }}>
                <Text style={styles.myScreenRestaurantAddress}>{item.address}</Text>
                {item.name.length > 7 ? (
                  <Text style={styles.myScreenRestaurantName}>{`${item.name.slice(0, 6)}...`}</Text>
                ) : (
                  <Text style={styles.myScreenRestaurantName}>{item.name}</Text>
                )}
                <View style={styles.myScreenRestaurantContent}>
                  <Image
                    style={{ width: 20, height: 20, marginLeft: 2 }}
                    source={require(`../../assets/icons/star.png`)}
                  />
                  <Text
                    style={{ fontSize: 12, fontWeight: '500', color: '#2A3037', marginLeft: 3 }}>
                    {item.score}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        height: '99.8%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: '3%',
      }}>
      {Object.keys(myScreenData3[0]).length > 0 && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={fomatMyListData(myScreenData3)}
          renderItem={renderItem}
          numColumns={2}
          onScroll={(e) => {
            handleNum(e.nativeEvent.contentOffset.y);
          }}
          onScrollEndDrag={() => setEnd(true)}
          bounces={false}
        />
      )}
      {Object.keys(myScreenData3[0]).length === 0 && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={fomatMyListData(myScreenFirstData)}
          renderItem={renderFirstItem}
          onScroll={(e) => {
            handleNum(e.nativeEvent.contentOffset.y);
          }}
          onScrollEndDrag={() => setEnd(true)}
          bounces={false}
        />
      )}
    </View>
  );
};

export default MyThirdList;

const styles = StyleSheet.create({
  myScreenRestaurantCover: {
    width: '50%',
    alignItems: 'center',
    paddingTop: 6,
  },
  myScreenRestaurantAddress: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#aaacae',
    marginTop: 5,
  },
  myScreenRestaurantName: {
    fontSize: 17,
    fontWeight: '500',
    color: '#3e5481',
    marginVertical: 5,
  },
  myScreenRestaurantContent: {
    position: 'absolute',
    left: 112,
    marginTop: 8,
    width: '42%',
    height: 30,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  myscreenFirstReviewItem: {
    width: 64,
    height: 64,
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 23,
  },
  myScreenFirstReviewButton: {
    width: 277,
    height: 56,
    borderRadius: 32,
    backgroundColor: '#fe554a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const MyscreenFirstReviewCover2 = styled.View({
  marginTop: 35,
  width: Dimensions.get('window').width,
  height: '60%',
  backgroundColor: '#f5f6f7',
  borderRadius: 10,
  alignItems: 'center',
});
