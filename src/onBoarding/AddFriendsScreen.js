import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import { Text, View, StyleSheet, Image, Pressable, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddFriendsScreen = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '친구추가',
      headerLeft: () => (
        <Pressable
          style={styles.BackIcon}
          onPress={() => {
            navigation.navigate('AddFavFood');
          }}>
          <Image source={require(`../assets/icons/Left.png`)}></Image>
        </Pressable>
      ),
    });
  };

  headerStyle();

  const [friendChecked1, setFriendChecked1] = useState(false);
  const [friendChecked2, setFriendChecked2] = useState(false);
  const [friendChecked3, setFriendChecked3] = useState(false);
  const [friendChecked4, setFriendChecked4] = useState(false);
  const [friendChecked5, setFriendChecked5] = useState(false);
  const [friendChecked6, setFriendChecked6] = useState(false);

  const friendsData = [
    { name: '최현', checked: false },
    { name: '김대먼', checked: false },
    { name: '김베드로', checked: false },
    { name: '크리스티나', checked: false },
    { name: '황철민', checked: false },
    { name: '남자', checked: false },
    { name: '여자', checked: false },
    { name: '소녀', checked: false },
    { name: '소년', checked: false },
  ];

  // const onUnChecked = (index) => {
  //   friendsData[index].checked = true;
  //   setFriendChecked(index);
  // console.log(index, friendsData[index], friendsData[index].checked, '1');
  // console.log(friendsData, 'friendsData');
  // console.log(friendChecked, 'friendChecked');
  // };

  // const onChecked = (index) => {
  //   friendsData[index].checked = false;
  //   setFriendChecked(index);
  // console.log(index, friendsData[index], friendsData[index].checked, '0');
  // console.log(friendsData, 'friendsData');
  // console.log(friendChecked, 'friendChecked');
  // };

  // const onPress = (index) => {
  //   setFriendChecked(!friendsData[index].checked);
  // };

  const renderItem = ({ item, index }) => {
    if (index === 0) {
      return (
        <AddFriendsItems>
          <View style={styles.friendImageItem}>
            <Image source={require(`../assets/images/onBoading/friends/friend1.png`)} />
          </View>
          <AddFriendsInfo>
            <Text style={styles.friendInfoText}>{item.name}</Text>
            <View style={styles.friendInfoImageItem}>
              <Image
                style={styles.friendInfoImage}
                source={require(`../assets/images/onBoading/favFood/pudding.png`)}
              />
              <Image
                style={styles.friendInfoImageTwo}
                source={require(`../assets/images/onBoading/addStyle/addStyleImage0.png`)}
              />
            </View>
          </AddFriendsInfo>
          <FriendButtonItem>
            {friendChecked1 ? (
              <Pressable
                onPress={() => {
                  setFriendChecked1(false);
                }}>
                <View style={styles.friendButtonChecked}>
                  <Text style={styles.friendButtonCheckedText}>친구요청</Text>
                </View>
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  setFriendChecked1(true);
                }}>
                <View style={styles.friendButtonUnChecked}>
                  <Text style={styles.friendButtonUnCheckedText}>친구요청</Text>
                </View>
              </Pressable>
            )}
          </FriendButtonItem>
        </AddFriendsItems>
      );
    }
    if (index === 1) {
      return (
        <AddFriendsItems>
          <View style={styles.friendImageItem}>
            <Image source={require(`../assets/images/onBoading/friends/friend2.png`)} />
          </View>
          <AddFriendsInfo>
            <Text style={styles.friendInfoText}>{item.name}</Text>
            <View style={styles.friendInfoImageItem}>
              <Image
                style={styles.friendInfoImage}
                source={require(`../assets/images/onBoading/favFood/grapes.png`)}
              />
              <Image
                style={styles.friendInfoImageTwo}
                source={require(`../assets/images/onBoading/addStyle/addStyleImage1.png`)}
              />
            </View>
          </AddFriendsInfo>
          <FriendButtonItem>
            {friendChecked2 ? (
              <Pressable
                onPress={() => {
                  setFriendChecked2(false);
                }}>
                <View style={styles.friendButtonChecked}>
                  <Text style={styles.friendButtonCheckedText}>친구요청</Text>
                </View>
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  setFriendChecked2(true);
                }}>
                <View style={styles.friendButtonUnChecked}>
                  <Text style={styles.friendButtonUnCheckedText}>친구요청</Text>
                </View>
              </Pressable>
            )}
          </FriendButtonItem>
        </AddFriendsItems>
      );
    }
    if (index === 2) {
      return (
        <AddFriendsItems>
          <View style={styles.friendImageItem}>
            <Image source={require(`../assets/images/onBoading/friends/friend3.png`)} />
          </View>
          <AddFriendsInfo>
            <Text style={styles.friendInfoText}>{item.name}</Text>
            <View style={styles.friendInfoImageItem}>
              <Image
                style={styles.friendInfoImage}
                source={require(`../assets/images/onBoading/favFood/chop.png`)}
              />
              <Image
                style={styles.friendInfoImageTwo}
                source={require(`../assets/images/onBoading/addStyle/addStyleImage2.png`)}
              />
            </View>
          </AddFriendsInfo>
          <FriendButtonItem>
            {friendChecked3 ? (
              <Pressable
                onPress={() => {
                  setFriendChecked3(false);
                }}>
                <View style={styles.friendButtonChecked}>
                  <Text style={styles.friendButtonCheckedText}>친구요청</Text>
                </View>
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  setFriendChecked3(true);
                }}>
                <View style={styles.friendButtonUnChecked}>
                  <Text style={styles.friendButtonUnCheckedText}>친구요청</Text>
                </View>
              </Pressable>
            )}
          </FriendButtonItem>
        </AddFriendsItems>
      );
    }
    if (index === 3) {
      return (
        <AddFriendsItems>
          <View style={styles.friendImageItem}>
            <Image source={require(`../assets/images/onBoading/friends/friend4.png`)} />
          </View>
          <AddFriendsInfo>
            <Text style={styles.friendInfoText}>{item.name}</Text>
            <View style={styles.friendInfoImageItem}>
              <Image
                style={styles.friendInfoImage}
                source={require(`../assets/images/onBoading/favFood/coffee.png`)}
              />
              <Image
                style={styles.friendInfoImageTwo}
                source={require(`../assets/images/onBoading/addStyle/addStyleImage3.png`)}
              />
            </View>
          </AddFriendsInfo>
          <FriendButtonItem>
            {friendChecked4 ? (
              <Pressable
                onPress={() => {
                  setFriendChecked4(false);
                }}>
                <View style={styles.friendButtonChecked}>
                  <Text style={styles.friendButtonCheckedText}>친구요청</Text>
                </View>
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  setFriendChecked4(true);
                }}>
                <View style={styles.friendButtonUnChecked}>
                  <Text style={styles.friendButtonUnCheckedText}>친구요청</Text>
                </View>
              </Pressable>
            )}
          </FriendButtonItem>
        </AddFriendsItems>
      );
    }
    if (index === 4) {
      return (
        <AddFriendsItems>
          <View style={styles.friendImageItem}>
            <Image source={require(`../assets/images/onBoading/friends/friend5.png`)} />
          </View>
          <AddFriendsInfo>
            <Text style={styles.friendInfoText}>{item.name}</Text>
            <View style={styles.friendInfoImageItem}>
              <Image
                style={styles.friendInfoImage}
                source={require(`../assets/images/onBoading/favFood/octopus.png`)}
              />
              <Image
                style={styles.friendInfoImageTwo}
                source={require(`../assets/images/onBoading/addStyle/addStyleImage4.png`)}
              />
            </View>
          </AddFriendsInfo>
          <FriendButtonItem>
            {friendChecked5 ? (
              <Pressable
                onPress={() => {
                  setFriendChecked5(false);
                }}>
                <View style={styles.friendButtonChecked}>
                  <Text style={styles.friendButtonCheckedText}>친구요청</Text>
                </View>
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  setFriendChecked5(true);
                }}>
                <View style={styles.friendButtonUnChecked}>
                  <Text style={styles.friendButtonUnCheckedText}>친구요청</Text>
                </View>
              </Pressable>
            )}
          </FriendButtonItem>
        </AddFriendsItems>
      );
    }

    return (
      <AddFriendsItems>
        <View style={styles.friendImageItem}>
          {/* <Image source={require(`../assets/images/onBoading/friends/friend5.png`)} /> */}
        </View>
        <AddFriendsInfo>
          <Text style={styles.friendInfoText}>{item.name}</Text>
          <View style={styles.friendInfoImageItem}>
            <Image
              style={styles.friendInfoImage}
              // source={require(`../assets/images/onBoading/favFood/octopus.png`)}
            />
            <Image
              style={styles.friendInfoImageTwo}
              // source={require(`../assets/images/onBoading/addStyle/addStyleImage4.png`)}
            />
          </View>
        </AddFriendsInfo>
        <FriendButtonItem>
          {friendChecked6 ? (
            <Pressable
              onPress={() => {
                setFriendChecked6(false);
              }}>
              <View style={styles.friendButtonChecked}>
                <Text style={styles.friendButtonCheckedText}>친구요청</Text>
              </View>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                setFriendChecked6(true);
              }}>
              <View style={styles.friendButtonUnChecked}>
                <Text style={styles.friendButtonUnCheckedText}>친구요청</Text>
              </View>
            </Pressable>
          )}
        </FriendButtonItem>
      </AddFriendsItems>
    );
  };

  return (
    <Wrapper>
      <Text style={styles.textTitle}>친구 추가하기</Text>
      <AddFriendsContainer>
        <AddFriendsItemContainer>
          <FlatList data={friendsData} renderItem={renderItem} />
        </AddFriendsItemContainer>
        <PhoneNumberConnectContainer>
          <Text style={styles.phoneNumberConnectTitle}>
            같이 이용하고 싶은 친구를 초대해보세요.
          </Text>
          <PhoneNumberConnectItem>
            <Image
              source={require(`../assets/icons/ListsIcon.png`)}
              style={styles.phoneNumberItemImage}></Image>
            <View
              style={{
                width: 195,
                height: 41,
                paddingLeft: 16,
              }}>
              <Text style={styles.phoneNumberItemTitle}>연락처 연결</Text>
              <Text style={styles.phoneNumberItemcontent}>내 친구를 연결해보세요</Text>
            </View>
            <Pressable style={styles.phoneNumberButton}>
              <Text style={styles.phoneNumberButtonText}>연결</Text>
            </Pressable>
          </PhoneNumberConnectItem>
        </PhoneNumberConnectContainer>
      </AddFriendsContainer>
      <AddFriendsButton>
        <Pressable
          onPress={() => {
            navigation.navigate('SignupComplete');
          }}
          style={styles.addFriendsButton}>
          <Text style={styles.addFriendsButtonText}>다음에 하기</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('SignupComplete');
          }}
          style={styles.addFriendsButton}>
          <Text style={styles.addFriendsButtonText}>완료</Text>
        </Pressable>
      </AddFriendsButton>
    </Wrapper>
  );
};

export default AddFriendsScreen;

const styles = StyleSheet.create({
  BackIcon: {
    width: 50,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 13,
    paddingRight: 20,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#2a3037',
  },
  addFriendsButton: {
    width: 126,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#fe554a',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 28,
  },
  addFriendsButtonText: {
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'normal',
    color: '#fcfcfc',
  },
  friendImageItem: {
    width: 56,
    height: 56,
  },
  friendInfoText: {
    width: 158,
    height: 25,
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: '#2a3037',
    paddingTop: 3,
    paddingLeft: 10,
  },
  friendInfoImageItem: {
    width: 55,
    height: 30,
    flexWrap: 'wrap',
  },
  friendInfoImage: {
    width: 24,
    height: 24,
    marginTop: 1,
    marginLeft: 10,
  },
  friendInfoImageTwo: {
    width: 24,
    height: 24,
    marginTop: 1,
    marginLeft: 5,
  },
  friendButtonUnChecked: {
    width: 66,
    height: 30,
    borderRadius: 18,
    backgroundColor: '#f0f0f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  friendButtonChecked: {
    width: 66,
    height: 30,
    borderRadius: 18,
    backgroundColor: '#fe554a',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  friendButtonUnCheckedText: {
    fontSize: 13,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#2a3037',
  },
  friendButtonCheckedText: {
    fontSize: 13,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#fcfcfc',
  },
  phoneNumberConnectTitle: {
    width: 311,
    height: 50,
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#2a3037',
    paddingTop: 20,
    paddingLeft: 2,
  },
  phoneNumberItemImage: {
    width: 36,
    height: 36,
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 10,
  },
  phoneNumberItemTitle: {
    width: 170,
    height: 22,
    fontSize: 15,
    fontWeight: '700',
    fontStyle: 'normal',
    color: '#2a3037',
  },
  phoneNumberItemcontent: {
    width: 170,
    height: 20,
    fontSize: 13,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#7E8389',
  },
  phoneNumberButton: {
    width: 41,
    height: 30,
    marginTop: 5,
    marginLeft: 9,
    borderRadius: 18,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneNumberButtonText: {
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#424242',
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

const AddFriendsContainer = styled.View({
  marginTop: 22,
  borderWidth: 1,
  borderColor: '#fe554a75',
  backgroundColor: '#ffffff',
  width: 335,
  height: 525,
  borderRadius: 10,
  display: 'flex',
  shadowColor: '#fe554a',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.6,
  shadowRadius: 4.65,
  elevation: 6,
  alignItems: 'center',
});

const AddFriendsItemContainer = styled.View({
  width: 335,
  height: 400,
});

const AddFriendsItems = styled.View({
  marginHorizontal: 14,
  borderBottomWidth: 1,
  borderBottomColor: '#DFE2E6',
  width: 280,
  height: 80,
  justifyContent: 'center',
  flexWrap: 'wrap',
});

const AddFriendsInfo = styled.View({
  width: 158,
  height: 56,
});

const PhoneNumberConnectContainer = styled.View({
  width: 335,
  height: 125,
  paddingHorizontal: 12,
});

const PhoneNumberConnectItem = styled.View({
  width: 311,
  height: 68,
  flexWrap: 'wrap',
  paddingTop: 7,
});

const FriendButtonItem = styled.View({
  width: 70,
  height: 56,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const AddFriendsButton = styled.View({
  marginTop: 31,
  width: 336,
  height: 36,
  borderRadius: 10,
  flexWrap: 'wrap',
});
