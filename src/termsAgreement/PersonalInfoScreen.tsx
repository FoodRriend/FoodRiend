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

const PersonalInfoScreen: React.FC = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '개인정보 수집 및 이용',
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
            navigation.navigate('Terms');
          }}>
          <Image source={require(`../assets/icons/Left.png`)}></Image>
        </TouchableOpacity>
      ),
    });
  };

  headerStyle();

  const personalInfoData = [
    {
      listTitle:
        '푸드렌드는  아래와  같이  개인정보를  수집하며,  이용자의  개인정보를  안전하게  취급하는데  최선을  다하겠습니다. ',
    },
    {
      listTitle: '1. 개인정보의 수집 및 이용목적',
    },
    {
      listTitle: '2. 수집하는 개인정보의 항목',
    },
    {
      listTitle: '3.  개인정보의  보유  및  이용  기간',
    },
    {
      listTitle: '4.  개인정보  수집  및  이용  동의를  거부할  권리',
    },
  ];

  interface IPersonalInfoProps {
    listTitle: string;
  }

  const renderItem = ({ item, index }: { item: IPersonalInfoProps; index: number }) => {
    if (index === 0) {
      return <Text style={styles.personalInfoListContent}>{item.listTitle}</Text>;
    }
    if (index === 1) {
      return (
        <>
          <Text style={styles.personalInfoTitle}>{item.listTitle}</Text>
          <Text style={styles.personalInfoListContent}>① 홈페이지 회원가입 및 관리</Text>
          <Text style={styles.personalInfoSmallListContent}>
            회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스
            부정이용 방지, 만14세 미만 아동의 개인정보 처리 시 법정대리인의 동의여부 확인, 각종
            고지·통지, 고충처리 목적으로 개인정보를 처리합니다.
          </Text>
          <Text style={styles.personalInfoListContent}>② 이용자의 요청사항 처리</Text>
          <Text style={styles.personalInfoSmallListContent}>
            이용자의 신원 확인, 요청사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 등을
            목적으로 개인정보를 처리합니다.
          </Text>
          <Text style={styles.personalInfoListContent}>③ 재화 또는 서비스 제공</Text>
          <Text style={styles.personalInfoSmallListContent}>
            서비스 제공, 콘텐츠 제공, 맞춤서비스 제공, 본인인증 등을 목적으로 개인정보를 처리합니다.
          </Text>
          <Text style={styles.personalInfoListContent}>④ 마케팅 및 광고에의 활용</Text>
          <Text style={styles.personalInfoSmallListContent}>
            신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공,
            인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성, 접속빈도 파악 또는
            이용자의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.
          </Text>
        </>
      );
    }
    if (index === 2) {
      return (
        <>
          <Text style={styles.personalInfoTitle}>{item.listTitle}</Text>
          <Text style={styles.personalInfoListContent}>
            ① 회원가입, 원활한 고객상담, 서비스의 제공을 위해 회원가입 시 및 서비스 이용 시 아래와
            같은 개인정보를 수집합니다
          </Text>
          <Text style={styles.personalInfoSmallListContent}>
            -이메일, 휴대전화 번호, 비밀번호, 로그인ID, 성별, 연령, 이름
          </Text>
          <Text style={styles.personalInfoListContent}>
            ② 서비스 이용과정이나 처리 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수
            있습니다.
          </Text>
          <Text style={styles.personalInfoSmallListContent}>
            -서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보, 닉네임, 프로필 사진, 사진, 단말기 정보
            (OS, 화면 사이즈, 디바이스 아이디), 위치 정보(선택적), 서비스 이용과정에서 이용자가
            작성하는 게시물 기타 콘텐츠 등 정보, 사용하는 기능, 수행하는 행동이나 활동 시간, 빈도 및
            기간 등
          </Text>
        </>
      );
    }
    if (index === 3) {
      return (
        <>
          <Text style={styles.personalInfoTitle}>{item.listTitle}</Text>
          <Text style={styles.personalInfoListContent}>
            회사는 이용자의 개인정보를 이용목적에 필요한 기간에만 제한적으로 보유, 이용합니다.
            회사는 이용자가 개인정보의 수집 및 이용에 대한 동의를 철회하는 경우, 개인정보의 수집 및
            이용목적이 달성된 경우 해당 개인정보를 지체 없이 파기합니다.
            {'\n'}
            {'\n'}
            단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 법령에서 정한 일정한 기간 동
            안 개인정보를 보관합니다.
          </Text>
        </>
      );
    }
    if (index === 4) {
      return (
        <>
          <Text style={styles.personalInfoTitle}>{item.listTitle}</Text>
          <Text style={styles.personalInfoListContent}>
            이용자는 개인정보의 수집 및 이용 동의를 거부할 권리가 있습니다. 다만 본 안내에 따른
            개인정보 수집 및 이용은 서비스 제공에 필수적인 동의 사항이므로, 본 동의를 거부할 경우
            회원가입이 불가능합니다.{'\n'}
          </Text>
        </>
      );
    }
    return <></>;
  };

  return (
    <Wrapper>
      <PersonalInfoContainer>
        <PersonalInfoItem>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={personalInfoData}
            renderItem={renderItem}
          />
        </PersonalInfoItem>
      </PersonalInfoContainer>
      {Platform.OS === 'ios' ? <View style={{ width: '100%', height: 40 }}></View> : <></>}
    </Wrapper>
  );
};

export default PersonalInfoScreen;

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
  personalInfoTitle: {
    marginTop: 15,
    color: '#2A3037',
    fontSize: 16,
    fontWeight: 'bold',
  },
  personalInfoListContent: {
    color: '#2A3037',
    marginTop: 5,
    lineHeight: 20,
  },
  personalInfoSmallListContent: {
    color: '#2A3037',
    marginTop: 3,
    marginLeft: 10,
    lineHeight: 20,
  },
});

const Wrapper = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-end',
});

const PersonalInfoContainer = styled.View({
  width: '95%',
  ...Platform.select({
    ios: {
      height: '93%',
    },
    android: {
      height: '98%',
    },
  }),
  backgroundColor: '#fff',
  borderColor: '#AAACAE',
  borderWidth: 1,
  alignItems: 'center',
  justifyContent: 'flex-end',
});

const PersonalInfoItem = styled.View({
  width: '95%',
  height: '100%',
});
