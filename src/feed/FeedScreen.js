import React, { useState, useCallback, useEffect } from 'react';
import styled from '@emotion/native';

import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { feedData } from './constants';

const FeedScreen = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: false,
    });
  };

  headerStyle();

  const renderItem = ({ item, index }) => {
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
  };

  return (
    <Wrapper>
      <Image
        style={styles.feedTitleImage}
        resizeMode="contain"
        source={require(`../assets/images/onBoading/login/FoodRiend.png`)}
      />
      <FeedListContainer>
        <FlatList showsVerticalScrollIndicator={false} data={feedData} renderItem={renderItem} />
      </FeedListContainer>
    </Wrapper>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  feedTitleImage: {
    width: 120,
    height: 46,
    position: 'relative',
    right: 120,
  },
  feedListImage: {
    marginTop: 30,
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
    fontWeight: 'normal',
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
    fontWeight: '500',
    color: '#2a3037',
    marginLeft: 7,
    marginTop: 3,
  },
  feedListInfoTime: {
    fontSize: 12,
    fontWeight: '300',
    color: '#111111',
    position: 'absolute',
    left: 220,
    top: 11,
  },
});

const Wrapper = styled.View({
  paddingTop: 46,
  backgroundColor: '#fff',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});

const FeedListContainer = styled.View({
  width: 350,
  height: 660,
});

const FeedListItem = styled.View({
  width: '100%',
  height: 250,
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
