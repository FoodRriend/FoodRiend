import React, { useState, useCallback, useEffect } from 'react';
import styled from '@emotion/native';

import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  Pressable,
  Platform,
  Animated,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchFeedData, userType } from '@/redux/feedSlice';

const FeedScreen: React.FC = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: false,
      headerLeft: null,
    });
  };

  headerStyle();

  const dispatch = useAppDispatch();

  const { data: feedData2, loading } = useAppSelector((state) => state.feed);

  useEffect(() => {
    dispatch(fetchFeedData());
  }, []);

  useEffect(() => {
    if (navigation.getState()?.routeNames[0] === 'Feed') {
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
      });
    }
  }, []);

  // 스크롤 이벤트
  const scrollY = new Animated.Value(0);
  const translateY = scrollY.interpolate({
    inputRange: [0, 90],
    outputRange: [90, 0],
  });
  const translateOpacity = scrollY.interpolate({
    inputRange: [0, 90],
    outputRange: [1, 0],
  });

  const SlideData = [
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' },
  ];

  const renderSliceItem = ({ item, index }: { item: any; index: number }) => {
    if (index === 0) {
      return (
        <View
          style={{ width: 74, height: 76, alignItems: 'center', marginTop: 10, marginLeft: 12 }}>
          <TouchableOpacity>
            <View style={styles.feedSlideImageBorder}>
              <Image
                source={require(`../assets/images/onBoading/friends/friend5.png`)}
                style={{ width: 50, height: 50 }}
              />
            </View>
          </TouchableOpacity>
          <Text style={{ fontSize: 12, fontWeight: '400', marginTop: 6 }}>김대먼</Text>
        </View>
      );
    }
    return (
      <FeedSlideItem>
        <TouchableOpacity>
          <View style={styles.feedSlideImageBorder}>
            <Image
              source={require(`../assets/images/onBoading/friends/friend5.png`)}
              style={{ width: 50, height: 50 }}
            />
          </View>
        </TouchableOpacity>

        <Text style={{ fontSize: 12, fontWeight: '400', marginTop: 6 }}>김대먼</Text>
      </FeedSlideItem>
    );
  };

  const renderItem = ({ item, index }: { item: userType; index: number }) => {
    return (
      <>
        {/* 여기 원리가 뭔지 궁금하네요  flatList에 index가 왜 0번째에 추가해야만 UI가안꺠지는 궁금합니다.*/}
        {!index && (
          <View
            style={{
              width: '30%',
              height: 33,
              justifyContent: 'center',
              marginTop: 100,
            }}>
            <TouchableOpacity>
              <Text style={{ fontSize: 12, fontWeight: '600' }}>전체보기</Text>
            </TouchableOpacity>
          </View>
        )}
        <FeedListItem>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PostReview', {
                type: 'feed',
                index: index,
              });
            }}>
            <Image source={{ uri: item.profileImg }} style={styles.feedListImage} />
          </TouchableOpacity>
          <FeedListInfoContainer>
            <TouchableOpacity>
              <Image source={{ uri: item.profileImg }} style={styles.feedListInfoImage} />
            </TouchableOpacity>
            <View style={{ paddingLeft: 10, width: '87%', height: 70 }}>
              <FeedListInfoItem>
                <Text style={styles.feedListInfoName}>{item.name}</Text>
                <Image
                  style={{ width: 18, height: 18 }}
                  source={require(`../assets/icons/star.png`)}
                />
                <Text style={styles.feedListInfoNumber}>{item.rating}</Text>
                <Text style={styles.feedListInfoTime}>{item.created_at}</Text>
              </FeedListInfoItem>
              <TouchableOpacity>
                <Text style={styles.feedListInfoContent}>{item.comments}</Text>
              </TouchableOpacity>
            </View>
          </FeedListInfoContainer>
        </FeedListItem>
      </>
    );
  };

  if (loading) {
    return (
      <View style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <Wrapper>
      {/* 상단 프로필 이미지가 안보이게 가리시는 용도로 사용하셨네요 ㅋㅋ 뭔지 한참 찾았습니다 */}
      {Platform.OS === 'ios' ? (
        <View
          style={{
            width: '100%',
            height: 44,
            backgroundColor: '#fff',
            position: 'absolute',
            top: 0,
            zIndex: 3,
          }}
        />
      ) : (
        <></>
      )}

      <View
        style={{
          width: '100%',

          position: 'absolute',
          zIndex: 2,
          backgroundColor: '#fff',
          ...Platform.select({
            ios: {
              top: 44,
              height: 46,
            },
            android: {
              top: 0,
              height: 56,
              paddingTop: 10,
            },
          }),
        }}>
        <Image
          style={styles.feedTitleImage}
          resizeMode="contain"
          source={require(`../assets/images/onBoading/login/FoodRiend.png`)}
        />
      </View>
      {!feedData2?.data?.isData ? (
        <View style={styles.rederItemFirstCover}>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>FoodRiend에 오신 것을 환영합니다.</Text>
          <Text style={{ marginTop: 20, fontSize: 15, fontWeight: '500' }}>
            친구를 초대하면 피드에서 친구가 방문한 가게와
          </Text>
          <Text style={{ fontSize: 15, fontWeight: '500' }}>리뷰를 볼 수 있습니다.</Text>
          <Pressable style={styles.renderItemFirstBtn}>
            <Text style={{ fontSize: 15, fontWeight: '900', color: '#ffffff' }}>초대하기</Text>
          </Pressable>
        </View>
      ) : (
        <>
          <Animated.View
            style={{
              transform: [{ translateY: translateY }],
              position: 'absolute',
              left: 0,
              zIndex: 1,
              right: 0,
              ...Platform.select({
                ios: {
                  top: 0,
                },
                android: {
                  top: -34,
                },
              }),
              opacity: translateOpacity,
            }}>
            <FeedSlideContainer>
              <FlatList
                showsHorizontalScrollIndicator={false}
                bounces={false}
                data={SlideData}
                renderItem={renderSliceItem}
                horizontal
              />
            </FeedSlideContainer>
          </Animated.View>
          <FeedListContainer>
            <FlatList
              onScroll={(e) => {
                scrollY.setValue(e.nativeEvent.contentOffset.y);
              }}
              bounces={false}
              showsVerticalScrollIndicator={false}
              data={feedData2.data.users}
              renderItem={renderItem}
              scrollEventThrottle={16}
            />
          </FeedListContainer>
        </>
      )}
    </Wrapper>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  feedTitleImage: {
    width: 120,
    height: 46,
    marginLeft: 20,
  },
  feedListImage: {
    ...Platform.select({
      ios: {
        marginTop: 30,
      },
      android: {
        marginTop: 20,
      },
    }),
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  feedListInfoImage: {
    width: 48,
    height: 48,
    borderRadius: 25,
    marginTop: 8,
  },
  feedListInfoContent: {
    width: '100%',
    height: 38,
    fontSize: 12,
    ...Platform.select({
      ios: {
        fontWeight: 'normal',
      },
      android: {
        fontWeight: '500',
        marginTop: 1,
      },
    }),
    color: '#7e8389',
  },
  feedListInfoName: {
    width: 60,
    height: 18,
    fontSize: 15,
    fontWeight: '800',
    color: '#2a3037',
    marginTop: 5,
  },
  feedListInfoNumber: {
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
    marginLeft: 7,
    marginTop: 3,
  },
  feedListInfoTime: {
    fontSize: 12,
    color: '#111111',
    position: 'absolute',
    top: 11,
    ...Platform.select({
      ios: {
        fontWeight: '300',
        left: 220,
      },
      android: {
        fontWeight: '400',
        left: 238,
      },
    }),
  },
  rederItemFirstCover: {
    display: 'flex',
    width: '100%',
    ...Platform.select({
      ios: {
        top: '10%',
      },
      android: {
        top: '5%',
      },
    }),
    height: Dimensions.get('window').height / 2,
    alignItems: 'center',
    paddingTop: 60,
  },
  renderItemFirstBtn: {
    marginTop: 60,
    width: 277,
    height: 56,
    borderRadius: 32,
    backgroundColor: '#fe554a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedSlideImageBorder: {
    width: 58,
    height: 58,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Wrapper = styled.View({
  ...Platform.select({
    ios: {
      paddingTop: 0,
    },
    android: {
      paddingTop: 10,
    },
  }),
  backgroundColor: '#fff',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});

const FeedListContainer = styled.View({
  ...Platform.select({
    ios: {
      width: 350,
      height: 670,
    },
    android: {
      width: 360,
      height: 657,
    },
  }),
  ...Platform.select({
    ios: {
      marginTop: 85,
    },
    android: {
      marginTop: 41,
    },
  }),
});

const FeedListItem = styled.View({
  width: '100%',
  ...Platform.select({
    ios: {
      height: 250,
    },
    android: {
      height: 240,
    },
  }),
});

const FeedListInfoContainer = styled.View({
  width: '100%',
  height: 70,
  flexWrap: 'wrap',
  paddingTop: 2,
});

const FeedListInfoItem = styled.View({
  width: '100%',
  height: 29,
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
});

const FeedSlideContainer = styled.View({
  width: '100%',
  height: 93,
  justifyContent: 'center',
  borderBottomWidth: 0.9,
  borderBottomColor: '#B3B3B3',
  backgroundColor: '#fff',
});

const FeedSlideItem = styled.View({
  width: 74,
  height: 76,
  alignItems: 'center',
  marginTop: 10,
});
