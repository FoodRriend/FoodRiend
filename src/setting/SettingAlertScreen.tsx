import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/native';

import {
  Text,
  View,
  Pressable,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SwitchToggle from 'react-native-switch-toggle';

const SettingAlertScreen: React.FC = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '알림',
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
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => {
            navigation.navigate('Setting');
          }}>
          <Image source={require(`../assets/icons/Left.png`)}></Image>
        </TouchableOpacity>
      ),
    });
  };

  headerStyle();

  const [toggleValue1, setToggleValue1] = useState(false);
  const [toggleValue2, setToggleValue2] = useState(true);
  const [toggleValue3, setToggleValue3] = useState(false);
  const [toggleValue4, setToggleValue4] = useState(true);
  const [toggleValue5, setToggleValue5] = useState(true);
  const [toggleValue6, setToggleValue6] = useState(false);

  return (
    <Wrapper>
      <FriendAlertCover>
        <Text style={{ fontSize: 12, fontWeight: '800', color: '#2a3037', marginTop: 16 }}>
          친구 알림
        </Text>
        <View style={styles.settingAlertItem}>
          <View style={{ width: '83%', height: '100%', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 15, fontWeight: '500', color: '#2a3037' }}>
              친구 요청 알림
            </Text>
            <Text style={{ fontSize: 13, fontWeight: 'normal', color: '#aaacae' }}>
              친구가 내게 친구 요청 시 알림
            </Text>
          </View>
          <SwitchToggle
            circleColorOff="#fcfcfc"
            circleColorOn="#fcfcfc"
            backgroundColorOn="#fe554a"
            backgroundColorOff="#dfe2e5"
            switchOn={toggleValue1}
            onPress={() => setToggleValue1(!toggleValue1)}
            containerStyle={{
              width: 53,
              height: 28,
              borderRadius: 15.5,
              padding: 2,
            }}
            circleStyle={{
              width: 24,
              height: 24,
              borderRadius: 14.5,
            }}
          />
        </View>
        <View style={styles.settingAlertContent}>
          <View style={{ width: '83%', height: '100%', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 15, fontWeight: '500', color: '#2a3037' }}>
              친구 수락 알림
            </Text>
            <Text style={{ fontSize: 13, fontWeight: 'normal', color: '#aaacae' }}>
              친구가 친구 요청 수락 시 알림
            </Text>
          </View>
          <SwitchToggle
            circleColorOff="#fcfcfc"
            circleColorOn="#fcfcfc"
            backgroundColorOn="#fe554a"
            backgroundColorOff="#dfe2e5"
            switchOn={toggleValue2}
            onPress={() => setToggleValue2(!toggleValue2)}
            containerStyle={{
              width: 53,
              height: 28,
              borderRadius: 15.5,
              padding: 2,
            }}
            circleStyle={{
              width: 24,
              height: 24,
              borderRadius: 14.5,
            }}
          />
        </View>
      </FriendAlertCover>
      <PostAlertCover>
        <Text style={{ fontSize: 12, fontWeight: '800', color: '#2a3037', marginTop: 16 }}>
          게시글 알림
        </Text>
        <View style={styles.settingAlertItem}>
          <View style={{ width: '83%', height: '100%', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 15, fontWeight: '500', color: '#2a3037' }}>
              '먹어봤어요' 알림
            </Text>
            <Text style={{ fontSize: 13, fontWeight: 'normal', color: '#aaacae' }}>
              친구가 게시글을 등록하면 알림
            </Text>
          </View>
          <SwitchToggle
            circleColorOff="#fcfcfc"
            circleColorOn="#fcfcfc"
            backgroundColorOn="#fe554a"
            backgroundColorOff="#dfe2e5"
            switchOn={toggleValue3}
            onPress={() => setToggleValue3(!toggleValue3)}
            containerStyle={{
              width: 53,
              height: 28,
              borderRadius: 15.5,
              padding: 2,
            }}
            circleStyle={{
              width: 24,
              height: 24,
              borderRadius: 14.5,
            }}
          />
        </View>
        <View style={styles.settingAlertContent}>
          <View style={{ width: '83%', height: '100%', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 15, fontWeight: '500', color: '#2a3037' }}>
              '가보고 싶어요' 알림
            </Text>
            <Text style={{ fontSize: 13, fontWeight: 'normal', color: '#aaacae' }}>
              친구가 가보고 싶은 가게를 저장하면 알림
            </Text>
          </View>
          <SwitchToggle
            circleColorOff="#fcfcfc"
            circleColorOn="#fcfcfc"
            backgroundColorOn="#fe554a"
            backgroundColorOff="#dfe2e5"
            switchOn={toggleValue4}
            onPress={() => setToggleValue4(!toggleValue4)}
            containerStyle={{
              width: 53,
              height: 28,
              borderRadius: 15.5,
              padding: 2,
            }}
            circleStyle={{
              width: 24,
              height: 24,
              borderRadius: 14.5,
            }}
          />
        </View>
        <View style={styles.settingAlertContent}>
          <View style={{ width: '83%', height: '100%', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 15, fontWeight: '500', color: '#2a3037' }}>
              '인생맛집' 알림
            </Text>
            <Text style={{ fontSize: 13, fontWeight: 'normal', color: '#aaacae' }}>
              친구가 인생맛집을 등록하면 알림
            </Text>
          </View>
          <SwitchToggle
            circleColorOff="#fcfcfc"
            circleColorOn="#fcfcfc"
            backgroundColorOn="#fe554a"
            backgroundColorOff="#dfe2e5"
            switchOn={toggleValue5}
            onPress={() => setToggleValue5(!toggleValue5)}
            containerStyle={{
              width: 53,
              height: 28,
              borderRadius: 15.5,
              padding: 2,
            }}
            circleStyle={{
              width: 24,
              height: 24,
              borderRadius: 14.5,
            }}
          />
        </View>
      </PostAlertCover>
      <ServiceAlertCover>
        <Text style={{ fontSize: 12, fontWeight: '800', color: '#2a3037', marginTop: 16 }}>
          서비스 알림
        </Text>
        <View style={styles.settingAlertItem}>
          <View style={{ width: '83%', height: '100%', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 15, fontWeight: '500', color: '#2a3037' }}>
              공지사항 및 이벤트 알림
            </Text>
            <Text style={{ fontSize: 13, fontWeight: 'normal', color: '#aaacae' }}>
              업데이트, 이벤트, 할인 혜택 등 알림
            </Text>
          </View>
          <SwitchToggle
            circleColorOff="#fcfcfc"
            circleColorOn="#fcfcfc"
            backgroundColorOn="#fe554a"
            backgroundColorOff="#dfe2e5"
            switchOn={toggleValue6}
            onPress={() => setToggleValue6(!toggleValue6)}
            containerStyle={{
              width: 53,
              height: 28,
              borderRadius: 15.5,
              padding: 2,
            }}
            circleStyle={{
              width: 24,
              height: 24,
              borderRadius: 14.5,
            }}
          />
        </View>
      </ServiceAlertCover>
    </Wrapper>
  );
};

export default SettingAlertScreen;

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
  settingAlertItem: {
    width: '100%',
    height: 78,
    paddingVertical: 16,
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderBottomColor: 'rgba(0, 0, 0, 0.06)',
    borderBottomWidth: 1,
  },
  settingAlertToggle: {
    width: 53,
    height: 28,
    borderRadius: 15.5,
    backgroundColor: '#fe554a',
    justifyContent: 'center',
  },
  settingAlertContent: {
    width: '100%',
    height: 78,
    paddingVertical: 16,
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderBottomColor: 'rgba(0, 0, 0, 0.06)',
    borderBottomWidth: 1,
  },
  settingAlertToggleCircle: {
    width: 24,
    height: 24,
    backgroundColor: '#fff',
    borderRadius: 14.5,
    alignSelf: 'flex-end',
    marginRight: 2,
  },
});

const Wrapper = styled.View({
  backgroundColor: '#fff',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 36,
  paddingRight: 16,
});

const FriendAlertCover = styled.View({
  width: '100%',
  height: 185,
});

const PostAlertCover = styled.View({
  width: '100%',
  height: 261,
});

const ServiceAlertCover = styled.View({
  width: '100%',
  height: 109,
});
