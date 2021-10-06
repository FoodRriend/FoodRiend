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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { feedData, feedDataFirst } from './constants';

const FeedScreen: React.FC = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: false,
    });
  };

  headerStyle();

  const [bounce, setBounce] = useState(0);

  interface IFeedRenderItemProps {
    name?: string;
    score?: number;
    time?: string;
    content?: string;
  }

  const renderItem = ({ item, index }: { item: IFeedRenderItemProps; index: number }) => {
    if (index === 0) {
      return (
        <FeedListItem>
          <Image
            source={require(`../assets/images/feed/Restaurant1.png`)}
            style={styles.feedListImage}
          />
          <FeedListInfoContainer>
            <Image
              source={require(`../assets/images/onBoading/friends/friend4.png`)}
              style={styles.feedListInfoImage}
            />
            <View style={{ paddingLeft: 10, width: '87%', height: 70 }}>
              <FeedListInfoItem>
                <Text style={styles.feedListInfoName}>{item.name}</Text>
                <Image
                  style={{ width: 18, height: 18 }}
                  source={require(`../assets/icons/star.png`)}
                />
                <Text style={styles.feedListInfoNumber}>{item.score}</Text>
                <Text style={styles.feedListInfoTime}>{item.time}</Text>
              </FeedListInfoItem>
              <Text style={styles.feedListInfoContent}>{item.content}</Text>
            </View>
          </FeedListInfoContainer>
        </FeedListItem>
      );
    }
    if (index === 1) {
      return (
        <FeedListItem>
          <Image
            source={require(`../assets/images/feed/Restaurant2.png`)}
            style={styles.feedListImage}
          />
          <FeedListInfoContainer>
            <Image
              source={require(`../assets/images/onBoading/friends/friend2.png`)}
              style={styles.feedListInfoImage}
            />
            <View style={{ paddingLeft: 10, width: '87%', height: 70 }}>
              <FeedListInfoItem>
                <Text style={styles.feedListInfoName}>{item.name}</Text>
                <Image
                  style={{ width: 18, height: 18 }}
                  source={require(`../assets/icons/star.png`)}
                />
                <Text style={styles.feedListInfoNumber}>{item.score}</Text>
                <Text style={styles.feedListInfoTime}>{item.time}</Text>
              </FeedListInfoItem>
              <Text style={styles.feedListInfoContent}>{item.content}</Text>
            </View>
          </FeedListInfoContainer>
        </FeedListItem>
      );
    }
    if (index === 2) {
      return (
        <FeedListItem>
          <Image
            source={require(`../assets/images/feed/Restaurant3.png`)}
            style={styles.feedListImage}
          />
          <FeedListInfoContainer>
            <Image
              source={require(`../assets/images/onBoading/friends/friend1.png`)}
              style={styles.feedListInfoImage}
            />
            <View style={{ paddingLeft: 10, width: '87%', height: 70 }}>
              <FeedListInfoItem>
                <Text style={styles.feedListInfoName}>{item.name}</Text>
                <Image
                  style={{ width: 18, height: 18 }}
                  source={require(`../assets/icons/star.png`)}
                />
                <Text style={styles.feedListInfoNumber}>{item.score}</Text>
                <Text style={styles.feedListInfoTime}>{item.time}</Text>
              </FeedListInfoItem>
              <Text style={styles.feedListInfoContent}>{item.content}</Text>
            </View>
          </FeedListInfoContainer>
        </FeedListItem>
      );
    }
    if (index === 3) {
      return (
        <FeedListItem>
          <Image
            source={require(`../assets/images/feed/Restaurant3.png`)}
            style={styles.feedListImage}
          />
          <FeedListInfoContainer>
            <Image
              source={require(`../assets/images/onBoading/friends/friend5.png`)}
              style={styles.feedListInfoImage}
            />
            <View style={{ paddingLeft: 10, width: '87%', height: 70 }}>
              <FeedListInfoItem>
                <Text style={styles.feedListInfoName}>{item.name}</Text>
                <Image
                  style={{ width: 18, height: 18 }}
                  source={require(`../assets/icons/star.png`)}
                />
                <Text style={styles.feedListInfoNumber}>{item.score}</Text>
                <Text style={styles.feedListInfoTime}>{item.time}</Text>
              </FeedListInfoItem>
              <Text style={styles.feedListInfoContent}>{item.content}</Text>
            </View>
          </FeedListInfoContainer>
        </FeedListItem>
      );
    }
    return <></>;
  };

  return (
    <Wrapper>
      <Image
        style={styles.feedTitleImage}
        resizeMode="contain"
        source={require(`../assets/images/onBoading/login/FoodRiend.png`)}
      />
      <FeedListContainer>
        {Object.keys(feedData[0]).length === 0 ? (
          <View style={styles.rederItemFirstCover}>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>
              FoodRiend에 오신 것을 환영합니다.
            </Text>
            <Text style={{ marginTop: 20, fontSize: 15, fontWeight: '500' }}>
              친구를 초대하면 피드에서 친구가 방문한 가게와
            </Text>
            <Text style={{ fontSize: 15, fontWeight: '500' }}>리뷰를 볼 수 있습니다.</Text>
            <Pressable style={styles.renderItemFirstBtn}>
              <Text style={{ fontSize: 15, fontWeight: '900', color: '#ffffff' }}>초대하기</Text>
            </Pressable>
          </View>
        ) : (
          <FlatList
            onScroll={(e) => {
              setBounce(e.nativeEvent.contentOffset.y);
            }}
            bounces={bounce <= 10 ? true : false}
            showsVerticalScrollIndicator={false}
            data={feedData}
            renderItem={renderItem}
          />
        )}
      </FeedListContainer>
    </Wrapper>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  feedTitleImage: {
    width: 120,
    height: 46,
    ...Platform.select({
      ios: {
        height: 46,
      },
      android: {
        width: 130,
        height: 50,
        marginBottom: 2,
      },
    }),
    position: 'relative',
    right: 120,
  },
  feedListImage: {
    marginTop: 30,
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
});

const Wrapper = styled.View({
  ...Platform.select({
    ios: {
      paddingTop: 46,
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
      height: 665,
    },
    android: {
      width: 360,
      height: 645,
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
