import { Animated, Platform, StyleSheet, View } from 'react-native';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Text } from 'react-native-elements';
import { useAppSelector } from '@/redux/hooks';
import { Image } from 'react-native-elements/dist/Image';
import { shortLoction } from '../helper';

interface DetailBottomProps {
  param: any;
  scrollY: any;
}

const DetailBottom: React.FC<DetailBottomProps> = ({ param, scrollY }) => {
  const shopInfo = useAppSelector((state) => state.search.data);
  const detailShopInfo = shopInfo?.data.shopInfo[param.index];

  const animateBorderRadius = scrollY.interpolate({
    inputRange: [0, 450],
    outputRange: [40, 0],
  });

  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 500,
        backgroundColor: 'transparent',
        marginTop: -100,
      }}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
        useNativeDriver: true,
      })}
      style={{
        paddingTop: 450,
        ...Platform.select({
          android: {
            width: 417,
          },
        }),
      }}>
      <Animated.View
        style={[
          styles.block,
          {
            borderTopLeftRadius: animateBorderRadius,
            borderTopRightRadius: animateBorderRadius,
          },
        ]}>
        <View
          style={{
            backgroundColor: '#DFE2E6',
            width: 40,
            height: 4,
            marginTop: 14,
            borderRadius: 100,
          }}
        />
        <View style={{ display: 'flex', width: 390, padding: 24 }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '50%' }}>
              <Text style={styles.componentSubject}>{detailShopInfo?.title}</Text>
              <Image
                source={require('../../assets/icons/star.png')}
                style={{ position: 'relative', marginRight: 4.5, bottom: 30 }}
              />
              <Text>{detailShopInfo?.aveRating}</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                width: '50%',
                top: 7,
              }}>
              <Image
                source={require('../../assets/icons/write2.png')}
                style={{ position: 'relative', width: 19, height: 19, marginRight: 14 }}
              />
              <Image
                source={require('../../assets/icons/share.png')}
                style={{ position: 'relative', width: 22, height: 19, marginRight: 14 }}
              />
              <Image
                source={require('../../assets/icons/bookmark.png')}
                style={{ position: 'relative', width: 19, height: 20 }}
              />
            </View>
          </View>
          <View>
            <Text style={styles.colorAaacaeText}>{shortLoction(detailShopInfo?.location)}</Text>
          </View>
          <View
            style={{
              backgroundColor: '#D0DBEA',
              height: 1,
              marginTop: 14,
              marginBottom: 12,
            }}></View>
          {detailShopInfo?.friends ? (
            <>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.componentSubject}>친구들의 리뷰</Text>
                <Text style={styles.colorAaacaeText}>
                  {detailShopInfo?.friends?.length}명의 친구 리뷰가 있어요
                </Text>
                {detailShopInfo.friends.length >= 2 && (
                  <View style={{ width: '32.5%' }}>
                    <Text style={{ textAlign: 'right', color: '#0057FF' }}>더보기</Text>
                  </View>
                )}
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', width: '70%' }}>
                <View style={{ marginRight: 10 }}>
                  <View
                    style={{
                      marginTop: 10,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '100%',
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '50%',
                      }}>
                      <Image
                        source={require('../../assets/images/onBoading/friends/friend1.png')}
                        style={{ position: 'relative', marginRight: 12 }}
                      />
                      <Text style={{ fontWeight: 'bold' }}>{detailShopInfo?.friends[0].name}</Text>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '50%',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={require('../../assets/icons/star.png')}
                        style={{ position: 'relative' }}
                      />
                      <Text style={{ textAlign: 'right', marginLeft: 4.5 }}>
                        {detailShopInfo.aveRating}
                      </Text>
                    </View>
                  </View>
                  <View style={{ marginTop: 12 }}>
                    <Text numberOfLines={3} ellipsizeMode="tail" style={styles.colorAaacaeText}>
                      {/* {detailShopInfo.friends[0].comments} */}이 집은 둘이 먹다 한 명이 죽어도
                      모를 맛집이다. 삼겹살의 육즙은... 단연 최고. 밑반찬도 다른 집들과 달리
                      푸짐하고 하나하나가 최고인 삼겹살 집 인정합니다. 다음에 또 다시올날을 기약하며
                    </Text>
                  </View>
                </View>
                {detailShopInfo.friends.length >= 2 && (
                  <View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '50%',
                        marginTop: 10,
                      }}>
                      <Image
                        source={require('../../assets/images/onBoading/friends/friend2.png')}
                        style={{ position: 'relative', marginRight: 12 }}
                      />
                      <Text style={{ fontWeight: 'bold' }}>{detailShopInfo?.friends[0].name}</Text>
                    </View>
                  </View>
                )}
              </View>
            </>
          ) : null}
          <View
            style={{
              backgroundColor: '#D0DBEA',
              height: 1,
              marginTop: 14,
              marginBottom: 12,
            }}
          />
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={styles.componentSubject}>사진</Text>
            <Text style={{ textAlign: 'right', width: '86.5%', color: '#0057FF' }}>더보기</Text>
          </View>
          {/* 수정 */}
          <View style={{ display: 'flex', flexDirection: 'row', marginTop: 12 }}>
            <Image
              source={require('../../assets/images/profile/Rectangle3.png')}
              style={{ position: 'relative', marginRight: 8, width: 186, height: 187 }}
            />
            <Image
              source={require('../../assets/images/profile/Rectangle1.png')}
              style={{
                position: 'relative',
                marginRight: 8,
                width: 186,
                height: 187,
                borderRadius: 10,
              }}
            />
            <Image
              source={require('../../assets/images/profile/Rectangle3.png')}
              style={{ position: 'relative', marginRight: 8, width: 186, height: 187 }}
            />
          </View>
        </View>
      </Animated.View>
    </Animated.ScrollView>
  );
};

export default DetailBottom;

const styles = StyleSheet.create({
  componentSubject: {
    fontWeight: 'bold',
    fontSize: 17,
    marginRight: 17.5,
  },
  colorAaacaeText: { color: '#AAACAE', fontSize: 12 },
  block: {
    backgroundColor: '#fff',
    width: '100%',
    height: 450,
    alignItems: 'center',
  },
});
