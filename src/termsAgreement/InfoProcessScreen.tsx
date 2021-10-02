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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InfoProcessScreen: React.FC  = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '개인정보 처리방침',
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
        <Pressable
          style={styles.backIcon}
          onPress={() => {
            navigation.navigate('TermsPolicy');
          }}>
          <Image source={require(`../assets/icons/Left.png`)}></Image>
        </Pressable>
      ),
    });
  };

  headerStyle();

  const infoProcessData = [
    {
      listTitle: '푸드렌드 개인정보처리방침',
    },
    {
      listTitle: '제1조(개인정보의  수집  및  이용  목적)',
    },
    {
      listTitle: '제2조(수집하는  개인정보의  항목  및  수집방법)',
    },
    {
      listTitle: '제3조(개인정보의  처리  및  보유  기간)',
    },
    {
      listTitle: '제4조(개인정보  파기절차  및  파기방법)',
    },
    {
      listTitle: '제5조(개인정보처리  위탁)',
    },
    {
      listTitle: '제6조(이용자  및  법정대리인의  권리와  그  행사방법)',
    },
    {
      listTitle: '제7조(개인정보  자동  수집  장치의  설치•운영  및  거부에  관한  사항)',
    },
    {
      listTitle: '제8조  (개인정보의  안전성  확보조치)',
    },
    {
      listTitle: '제9조  (개인정보  보호책임자  및  개인정보  열람  청구)',
    },
    {
      listTitle: '제10조  고지의  의무',
    },
  ];

  interface IInfoProcessProps {
    listTitle: string;
  }

  const renderItem = ({ item, index }: { item: IInfoProcessProps; index: number }) => {
    if (index === 0) {
      return (
        <>
          <Text style={styles.InfoProcessTitle}>{item.listTitle}</Text>
          <Text style={styles.InfoProcessListContent}>
            {'\n'}
            푸드렌드는 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 개인정보와 관련된
            법령에 따라 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수
            있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
          </Text>
        </>
      );
    }
    if (index === 1) {
      return (
        <>
          <Text style={styles.InfoProcessListTitle}>{item.listTitle}</Text>
          <Text style={styles.InfoProcessListContent}>
            푸드렌드는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의
            목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」
            제 18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
          </Text>
          <Text style={styles.InfoProcessListContent}>① 홈페이지 회원가입 및 관리</Text>
          <Text style={styles.InfoProcessSmallListContent}>
            회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스
            부정이용 방지, 만14세 미만 아동의 개인정보 처리 시 법정대리인의 동의여부 확인, 각종
            고지·통지, 고충처리 목적으로 개인정보를 처리합니다.
          </Text>
          <Text style={styles.InfoProcessListContent}>② 이용자의 요청사항 처리</Text>
          <Text style={styles.InfoProcessSmallListContent}>
            이용자의 신원 확인, 요청사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 등을
            목적으로 개인정보를 처리합니다.
          </Text>
          <Text style={styles.InfoProcessListContent}>③ 재화 또는 서비스 제공</Text>
          <Text style={styles.InfoProcessSmallListContent}>
            서비스 제공, 콘텐츠 제공, 맞춤서비스 제공, 본인인증 등을 목적으로 개인정보를 처리합니다.
          </Text>
          <Text style={styles.InfoProcessListContent}>④ 마케팅 및 광고에의 활용</Text>
          <Text style={styles.InfoProcessSmallListContent}>
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
          <Text style={styles.InfoProcessListTitle}>{item.listTitle}</Text>
          <Text style={styles.InfoProcessListContent}>① 수집하는 개인정보의 항목</Text>
          <Text style={styles.InfoProcessSmallListContent}>
            이메일, 휴대전화 번호, 비밀번호, 로그인ID, 성별, 연령, 이름, 서비스 이용 기록, 접속
            로그, 쿠키, 접속 IP 정보, 닉네임, 프로필 사진, 사진, 단말기 정보(OS, 화면 사이즈,
            디바이스 아이 디), 위치 정보(선택적), 서비스 이용과정에서 이용자가 작성하는 게시물 기타
            콘텐츠 등 정보, 사용하는 기능, 수행하는 행동이나 활동 시간, 빈도 및 기간 등
          </Text>
          <Text style={styles.InfoProcessListContent}>② 개인정보 수집방법 </Text>
          <Text style={styles.InfoProcessSmallListContent}>
            푸드렌드는 다음과 같은 방법을 통해 개인정보를 수집합니다. {'\n'}1. 회원가입 및 서비스
            이용 과정에서 이용자가 개인정보 수집에 대해 동의를 하고 직접 정보를 입력하는 경우 {'\n'}
            2. 고객센터를 통한 상담 과정에서 고객정보 확인을 위해 수집. 웹 페이지, 메일, 팩스, 전화
            등 온/오프라인에서 진행되는 이벤트/행사 등 참여 {'\n'}3. 제휴서비스 또는 단체 등으로부터
            개인정보를 제공받은 경우 {'\n'}4. 서비스 이용 과정의 로그 수집
          </Text>
        </>
      );
    }
    if (index === 3) {
      return (
        <>
          <Text style={styles.InfoProcessListTitle}>{item.listTitle}</Text>
          <Text style={styles.InfoProcessListContent}>
            푸드렌드는 이용자의 개인정보를 이용목적에 필요한 기간에만 제한적으로 보유, 이용합니다.
            푸드렌드는 이용자로부터 동의를 받은 수집 및 이용목적이 달성된 때에는 해당 개인정보를
            지체 없이 파기합니다. '이용목적이 달성된 때'란 철회 요청, 서비스 계약 만료, 탈퇴 시를
            의미합니다. {'\n'}
            {'\n'}단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 법령에서 정한 일정한
            기간 동 안 개인정보를 보관합니다.
          </Text>
          <Text style={styles.InfoProcessSmallListContent}>
            ■ 서비스 방문기록 {'\n'}- 보존 근거: 통신비밀보호법 {'\n'}- 보존 기간: 3개월
          </Text>
        </>
      );
    }
    if (index === 4) {
      return (
        <>
          <Text style={styles.InfoProcessListTitle}>{item.listTitle}</Text>
          <Text style={styles.InfoProcessListContent}>
            이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되거나 보유 및
            이용기간이 종료된 경우 지체 없이 파기됩니다. {'\n'}회사의 개인정보 파기절차 및 방법은
            다음과 같습니다.
          </Text>
          <Text style={styles.InfoProcessListContent}>① 파기절차</Text>
          <Text style={styles.InfoProcessSmallListContent}>
            - 이용자의 개인정보는 동의를 받은 수집 및 이용목적이 달성된 후 별도의 DB로 옮겨져(종이의
            경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및
            이용기간 참조) 일정 기간 저장된 후 파기 됩니다. 별도 DB로 옮겨진 개인정보는 법률에 의한
            경우가 아니고서는 보유 되거나 이외의 다른 목적으로 이용되지 않습니다.
          </Text>
          <Text style={styles.InfoProcessListContent}>② 파기방법</Text>
          <Text style={styles.InfoProcessSmallListContent}>
            - 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다. {'\n'}- 전자적
            파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
          </Text>
          <Text style={styles.InfoProcessListContent}>③ 개인정보 유효 기간제 (휴면계정 정책)</Text>
          <Text style={styles.InfoProcessSmallListContent}>
            -이용자가 1년 동안 푸드렌드에서 제공하는 서비스를 이용한 기록이 없을 경우, 서비스 미
            이용자의 개인정보는 일반 이용자의 개인정보와 분리하여 별도로 저장 및 관리됩니다(휴면
            계정으로 변경). 푸드렌드는 휴면계정으로 변경되는 시점 도래 30일 전에 해당 내용에 대해
            이메일 등을 통해 이용자에게 공지합니다. 분리 저장된 개인정보는 관련 법령에 특별한 규정이
            있는 경우를 제외하고 해당 개인정보를 이용하거나 제공하지 않으며, 분리 보관된 개인정보는
            4년간 보관 후 지체없이 파기합니다. 다만 파기되지 않은 개인정보는 해당 이용자의 요청에
            따라 서비스 이용을 재개하는 시점에서 다시 제공됩니다.
          </Text>
        </>
      );
    }
    if (index === 5) {
      return (
        <>
          <Text style={styles.InfoProcessListTitle}>{item.listTitle}</Text>
          <Text style={styles.InfoProcessListContent}>
            푸드렌드는 서비스의 원활한 제공을 위해 필요한 때에는 개인정보의 처리를 일부 위탁하고
            있으며, 수탁 받은 업체가 관계 법령을 준수하도록 관리·감독하고 있습니다.
          </Text>
          <Text style={styles.InfoProcessSmallListContent}>
            • 수탁업체: (주)가비아 {'\n'}-위탁내용: 정보 저장{'\n'} -개인정보의 보유 및 이용기간:
            회원 탈퇴시 혹은 위탁계약 종료시까지
          </Text>
        </>
      );
    }
    if (index === 6) {
      return (
        <>
          <Text style={styles.InfoProcessListTitle}>{item.listTitle}</Text>
          <Text style={styles.InfoProcessListContent}>
            ① 이용자 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은 당해 만 14세 미만 아동의
            개인정보를 조회하거나 수정할 수 있으며 동의 철회 또는 가입 해지를 요청할 수도 있습니다.
            {'\n'}② 이용자 혹은 만 14세 미만 아동의 개인정보 조회, 수정을 위하여 개인정보
            보호책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다. {'\n'}③
            이용자가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해
            개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한
            경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다.{' '}
            {'\n'}④ 회사는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는
            개인정보 파기절차 및 파기방법에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는
            이용할 수 없도록 처리하고 있습니다.
          </Text>
        </>
      );
    }
    if (index === 7) {
      return (
        <>
          <Text style={styles.InfoProcessListTitle}>{item.listTitle}</Text>
          <Text style={styles.InfoProcessListContent}>
            ① 푸드렌드는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로
            불러오는 ‘쿠키(cookie)’를 사용합니다.
          </Text>
          <Text style={styles.InfoProcessSmallListContent}>
            1. 쿠키란: 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게
            보내는 소량의 정보이며 이용자들의 PC 컴퓨터 내의 하드디스크에 저장되기도 합니다. {'\n'}
            2. 쿠키의 사용 목적: 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태,
            인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해
            사용됩니다. {'\n'}3. 쿠키의 설치•운영 및 거부: 웹브라우저 상단의 도구{'>'}인터넷 옵션
            {'>'}
            개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다. 다만, 어플리케이션의
            경우 쿠키 설정 옵션이 지원되지 않을 수 있습니다. {'\n'}4. 쿠키 저장을 거부할 경우 맞춤형
            서비스 이용에 어려움이 발생할 수 있습니다.
          </Text>
          <Text style={styles.InfoProcessListContent}>
            ② 푸드렌드는 이용자의 ADID/IDFA를 수집할 수 있습니다.
          </Text>
          <Text style={styles.InfoProcessSmallListContent}>
            1. ADID(Android OS)/IDFA(iOS)란: 모바일 앱 이용자의 광고 식별 값입니다. {'\n'}2.
            ADID/IDFA 사용목적: 온라인 맞춤형 광고 등 이용자에게 최적화된 맞춤형 서비스 및 혜택 을
            제공하기 위하여 수집 및 이용됩니다. {'\n'}3. ADID/IDFA 수집방법: 이용자의 앱 방문/실행
            시 자동 수집 {'\n'}4. ADID/IDFA 보유/이용 기간: 수집일로부터 1년 {'\n'}5. 이용자 통제권
            행사 방법]
          </Text>
          <Text style={styles.InfoProcessSmallListContent}>
            • Android: 설정-{'>'}구글(구글설정)-{'>'}광고-{'>'}광고 맞춤설정 선택 해제 {'\n'}• iOS:
            설정-
            {'>'}개인정보보호-{'>'}광고-{'>'}광고 추적 제한
          </Text>
        </>
      );
    }
    if (index === 8) {
      return (
        <>
          <Text style={styles.InfoProcessListTitle}>{item.listTitle}</Text>
          <Text style={styles.InfoProcessListContent}>
            푸드렌드는 개인정보의 안전성 확보를 위해 다음과 같은 관리적, 물리적, 기술적 조치를
            취하고 있습니다.
          </Text>
          <Text style={styles.InfoProcessListContent}>① 관리적 조치</Text>
          <Text style={styles.InfoProcessSmallListContent}>
            1. 개인정보취급자 최소 유지: 개인정보를 처리하는 직원을 최소한으로 관리하고 있으며, 퇴직
            및 직무변경 등 인사이동이 있는 경우 지체 없이 권한을 변경, 말소하여 개인정보 접근 권한을
            통 제하고 있습니다. {'\n'}2. 개인정보 교육: 개인정보 취급자에 대한 정기적인 교육, 전사
            임직원에 대한 수시 교육을 통하여 이용자의 개인정보 보호가 회사의 중요한 가치임을
            끊임없이 강조하고 있습니다.
          </Text>
          <Text style={styles.InfoProcessListContent}>② 물리적 조치</Text>
          <Text style={styles.InfoProcessSmallListContent}>
            1. 비인가자 출입 통제: 개인정보 접근을 제한하기 위하여 출입 통제를 진행하고 있고,
            개인정보를 포함한 문서는 잠금 장치가 되어 있는 안전한 공간에 보관하고 있습니다.
          </Text>
          <Text style={styles.InfoProcessListContent}>③ 기술적 조치</Text>
          <Text style={styles.InfoProcessSmallListContent}>
            1. 개인정보 암호화: 회사는 비밀번호, 고유식별정보 등을 포함한 이용자의 개인정보를
            암호화하여 보관하고 있습니다. {'\n'}2. 해킹 등에 대비한 대책: 회사는 최신 보안프로그램
            설치 및 이용자의 개인정보를 주기적으로 백업하고 있으며, 암호화 알고리즘에 의해
            네트워크상에서 안전하게 전송됩니다. 또한, 회사는 가 능한 기술적 장치를 모두 갖추려고
            노력하는 등 이용자의 개인정보를 안전하게 보관하기 위해 노력하고 있습니다.
          </Text>
        </>
      );
    }
    if (index === 9) {
      return (
        <>
          <Text style={styles.InfoProcessListTitle}>{item.listTitle}</Text>
          <Text style={styles.InfoProcessListContent}>
            ① 푸드렌드는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한
            이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고
            있습니다.
          </Text>
          <Text style={styles.InfoProcessListContent}>• 개인정보 보호책임자</Text>
          <Text style={styles.InfoProcessSmallListContent}>
            -성명: 김주현 {'\n'}-직위: 개인정보 관리책임자
          </Text>
          <Text style={styles.InfoProcessListContent}>-연락처: foodriend@gmail.com</Text>
          <Text style={styles.InfoProcessListContent}>
            ② 정보주체는 「개인정보 보호법」 제35조에 따른 개인정보의 열람 청구를 위 개인정보
            보호책임자를 통해 할 수 있습니다. {'\n'}③ 개인정보 침해에 대한 신고, 상담 등이 필요하신
            경우는 아래 기관에 문의하실 수 있습니다. 다만, 아래 기관에 바로 문의할 경우에는 오히려
            피해구제가 어려우므로, 개인정보처리자에 대 한 문의, 피해구제를 통해 해결 되지 않을 경우
            문의하는 것을 안내 드립니다.
          </Text>
          <Text style={styles.InfoProcessSmallListContent}>
            1. 개인정보분쟁조정위원회: (국번없이) 1833-6972 (www.kopico.go.kr) {'\n'}2.
            개인정보침해신고센터: (국번없이) 118(privacy.kisa.or.kr) {'\n'}3. 대검찰청: (국번없이)
            1301(www.spo.go.kr) {'\n'}4. 경찰청: (국번없이) 182(cyberbureau.police.go.kr)
          </Text>
        </>
      );
    }
    if (index === 10) {
      return (
        <>
          <Text style={styles.InfoProcessListTitle}>{item.listTitle}</Text>
          <Text style={styles.InfoProcessListContent}>
            푸드렌드는 법률이나 서비스의 변경사항을 반영하기 위한 목적 등으로 개인정보처리방침을
            수정할 수 있습니다. 개인정보처리방침이 변경되는 경우 푸드렌드는 변경 사항을 게시하며,
            변경 된 개인정보처리방침은 게시한 날로부터 7일 후부터 효력이 발생합니다. 다만,
            개인정보의 수집 및 활용, 제3자 제공 등과 같이 이용자 권리의 중요한 변경이 있을 경우에는
            최소 30일 전에 고지합니다. {'\n'}○ 이 개인정보처리방침은 2021년 9월 30일부터 적용됩니다.
            {'\n'}
          </Text>
        </>
      );
    }
    return <></>;
  };

  return (
    <Wrapper>
      <InfoProcessContainer>
        <InfoProcessItem>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={infoProcessData}
            renderItem={renderItem}
          />
        </InfoProcessItem>
      </InfoProcessContainer>
      {Platform.OS === 'ios' ? <View style={{ width: '100%', height: 40 }}></View> : <></>}
    </Wrapper>
  );
};

export default InfoProcessScreen;

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
  InfoProcessTitle: {
    color: '#2A3037',
    fontSize: 18,
    marginTop: 30,
  },
  InfoProcessListTitle: {
    marginTop: 15,
    color: '#2A3037',
    fontSize: 16,
    fontWeight: 'bold',
  },
  InfoProcessListContent: {
    color: '#2A3037',
    marginTop: 5,
    lineHeight: 20,
  },
  InfoProcessSmallListContent: {
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

const InfoProcessContainer = styled.View({
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

const InfoProcessItem = styled.View({
  width: '95%',
  height: '100%',
});
