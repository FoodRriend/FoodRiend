import React from 'react';
import { Text, View, Image, Dimensions, StyleSheet, Platform } from 'react-native';
import Slick from 'react-native-slick';
import foodTypeImage from '@/assets/images/onBoading/favFood';
import foodStyleFile from '@/assets/images/onBoading/addStyle';
import { useNavigation } from '@react-navigation/core';

const renderPagination = (index: any, total: any, context: any) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: 'grey', fontSize: 12 }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  );
};

const RestaurantPhotoDetailScreen: React.FC = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: false,
    });
  };

  headerStyle();

  return (
    <View style={{ alignItems: 'center', backgroundColor: '#fff', height: '100%' }}>
      {/* <Image source={require('../assets/icons/closeButton.svg')} style={styles.headerIcon} /> */}
      <View style={styles.headerText}>
        <Text style={{ fontSize: 15, fontWeight: '600' }}>전통 삼겹살</Text>
      </View>
      <View style={{ width: '100%', height: 500, top: '10%' }}>
        <Slick
          style={styles.wrapper}
          renderPagination={renderPagination}
          loop={true}
          showsButtons={true}
          buttonWrapperStyle={styles.clickLocation}
          nextButton={
            <View style={styles.fackBlurStyle}>
              <Image
                source={require('../assets/icons/right(사진).png')}
                style={styles.buttonStyle}
              />
            </View>
          }
          prevButton={
            <View style={styles.fackBlurStyle}>
              <Image
                source={require('../assets/icons/left(사진).png')}
                style={styles.buttonStyle}
              />
            </View>
          }>
          <View style={styles.slide}>
            <View style={styles.userProfile}>
              <View style={{ marginRight: 10 }}>
                <Image
                  source={require('../assets/images/onBoading/friends/friend2.png')}
                  style={{ width: 70, height: 70 }}
                />
              </View>
              <View>
                <Text style={{ fontWeight: '600' }}>김서현</Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <Image
                    source={foodTypeImage['고기']}
                    style={{ width: 33, height: 62, resizeMode: 'contain', marginRight: 5 }}
                  />
                  <Image
                    source={foodStyleFile['분야별 맛집 전문가']}
                    style={{ width: 33, resizeMode: 'contain', marginRight: 5 }}
                  />
                </View>
              </View>
            </View>
            <Image
              style={styles.image}
              source={require('../assets/images/profile/Rectangle1.png')}
            />
          </View>
          <View style={styles.slide}>
            <View style={styles.userProfile}>
              <View style={{ marginRight: 10 }}>
                <Image
                  source={require('../assets/images/onBoading/friends/friend2.png')}
                  style={{ width: 70, height: 70 }}
                />
              </View>
              <View>
                <Text style={{ fontWeight: '600' }}>김서현</Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <Image
                    source={foodTypeImage['고기']}
                    style={{ width: 33, height: 62, resizeMode: 'contain', marginRight: 5 }}
                  />
                  <Image
                    source={foodStyleFile['분야별 맛집 전문가']}
                    style={{ width: 33, resizeMode: 'contain', marginRight: 5 }}
                  />
                </View>
              </View>
            </View>
            <Image
              style={styles.image}
              source={require('../assets/images/profile/Rectangle2.png')}
            />
          </View>
          <View style={styles.slide}>
            <View style={styles.userProfile}>
              <View style={{ marginRight: 10 }}>
                <Image
                  source={require('../assets/images/onBoading/friends/friend1.png')}
                  style={{ width: 70, height: 70 }}
                />
              </View>
              <View>
                <Text style={{ fontWeight: '600' }}>김서현</Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <Image
                    source={foodTypeImage['고기']}
                    style={{ width: 33, height: 62, resizeMode: 'contain', marginRight: 5 }}
                  />
                  <Image
                    source={foodStyleFile['분야별 맛집 전문가']}
                    style={{ width: 33, resizeMode: 'contain', marginRight: 5 }}
                  />
                </View>
              </View>
            </View>
            <Image
              style={styles.image}
              source={require('../assets/images/profile/Rectangle3.png')}
            />
          </View>
          <View style={styles.slide}>
            <View style={styles.userProfile}>
              <View style={{ marginRight: 10 }}>
                <Image
                  source={require('../assets/images/onBoading/friends/friend4.png')}
                  style={{ width: 70, height: 70 }}
                />
              </View>
              <View>
                <Text style={{ fontWeight: '600' }}>김서현</Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <Image
                    source={foodTypeImage['고기']}
                    style={{ width: 33, height: 62, resizeMode: 'contain', marginRight: 5 }}
                  />
                  <Image
                    source={foodStyleFile['분야별 맛집 전문가']}
                    style={{ width: 33, resizeMode: 'contain', marginRight: 5 }}
                  />
                </View>
              </View>
            </View>
            <Image
              style={styles.image}
              source={require('../assets/images/profile/Rectangle4.png')}
            />
          </View>
        </Slick>
      </View>
    </View>
  );
};

export default RestaurantPhotoDetailScreen;

const styles = StyleSheet.create({
  wrapper: {},
  clickLocation: {
    top: 60,
  },
  headerIcon: {
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: 53,
      },
      android: {
        top: 24,
      },
    }),
    left: 20,
  },
  buttonStyle: {
    resizeMode: 'contain',
    height: 12,
    width: 12,
  },
  headerText: {
    ...Platform.select({
      ios: {
        top: 50,
      },
      android: {
        top: 20,
      },
    }),
    width: '93%',
    height: 40,
    borderBottomWidth: 0.8,
    borderColor: '#C4C4C4',
    borderRadius: 5,
    borderStyle: 'solid',
    alignItems: 'center',
  },
  slide: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  userProfile: {
    display: 'flex',
    flexDirection: 'row',
    top: 50,
    height: '20%',
    ...Platform.select({
      ios: {
        marginBottom: 30,
      },
      android: {
        marginBottom: 40,
      },
    }),
    marginLeft: 12,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '80%',
  },
  fackBlurStyle: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 430,
    right: 10,
  },
  paginationText: {
    color: '#AAACAE',
    fontSize: 15,
  },
});
