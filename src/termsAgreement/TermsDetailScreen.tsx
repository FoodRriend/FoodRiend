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

const TermsDetailScreen: React.FC = () => {
  const navigation = useNavigation();

  const headerStyle = () => {
    navigation.setOptions({
      headerShown: true,
      title: '이용약관',
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
            navigation.navigate('Terms');
          }}>
          <Image source={require(`../assets/icons/Left.png`)}></Image>
        </Pressable>
      ),
    });
  };

  headerStyle();

  const termsDetailData = [
    { title: '푸드렌드 서비스 이용약관' },
    {
      listTitle: '제 1 조 (목적)',
    },
    {
      listTitle: '제 2 조 (약관의 명시, 효력 및 개정)',
    },
    {
      listTitle: '제 3 조 (약관 동의 및 서비스 이용계약의 체결)',
    },
    {
      listTitle: '제 4 조 (개인정보의 보호 및 관리)',
    },
    {
      listTitle: '제 5 조 (서비스의 제공 및 이용)',
    },
    {
      listTitle: '제 6 조 (서비스의 변경, 중단, 일시 중지)',
    },
    {
      listTitle: '제 7 조 (권리의 귀속 및 저작물의 이용)',
    },
    {
      listTitle: '제 8 조 (게시물의 관리 및 임시조치)',
    },
    {
      listTitle: '제 9 조 (푸드렌드의 의무)',
    },
    {
      listTitle: '제 10 조 (회원의 의무)',
    },
    {
      listTitle: '제 11 조 (서비스 이용의 제한 및 중지)',
    },
    {
      listTitle: '제 12 조 (계정의 관리책임)',
    },
    {
      listTitle: '제 13 조 (양도금지)',
    },
    {
      listTitle: '제 14 조 (이용계약의 해지)',
    },
    {
      listTitle: '제 15 조 (손해배상)',
    },
    {
      listTitle: '제 16 조 (회원에 대한 통지)',
    },
    {
      listTitle: '제 17 조 (약관의 해석)',
    },
    {
      listTitle: '제 18 조 (준거법 및 재판관할)',
    },
  ];

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    if (index === 0) {
      return <Text style={styles.termsDetailTitle}>{item.title}</Text>;
    }
    if (index === 1) {
      return (
        <>
          <Text style={styles.termsDetailListTitle}>{item.listTitle}</Text>
          <Text style={styles.termsDetailListContent}>
            본 약관은 회원(본 약관에 동의한 자를 말합니다 이하 "회원"이라고 합니다.)이 푸드렌드(이하
            "푸드렌드"라고 합니다)가 제공하는 푸드렌드 서비스(이하 "서비스"라고 합니다)를 이용함에
            있어 푸드렌드와 회원의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
          </Text>
        </>
      );
    }
    if (index === 2) {
      return (
        <>
          <Text style={styles.termsDetailListTitle}>{item.listTitle}</Text>
          <Text style={styles.termsDetailListContent}>
            ① 푸드렌드는 본 약관의 내용을 회원이 알 수 있도록 서비스 페이지에 게시함으로써 이를
            공지합니다. {'\n'}② 푸드렌드는 콘텐츠산업 진흥법, 정보통신망 이용촉진 및 정보보호 등에
            관한 법률, 약관의 규제에 관한 법률, 소비자기본법 등 관련 법령을 위배하지 않는 범위에서
            본 약관을 개정할 수 있습니다. {'\n'}③ 푸드렌드가 약관을 개정할 경우에는 개정약관 및
            개정약관의 시행일자와 개정사유를 명시하 여 그 시행일자 7일 전부터 시행일 이후 상당한
            기간 동안 본 서비스 페이지에 게시하며, 개정 된 약관은 그 시행일에 효력이 발생합니다. 단,
            개정 내용이 회원에게 불리한 경우에는 그 시행 일자 30일 전부터 시행일 이후 상당한 기간
            동안 본 서비스 페이지에 게시하거나 팝업화면을 게시하는 등 회원이 충분히 인지할 수 있는
            합리적으로 가능한 방법으로 공지하며, 개정된 약 관은 그 시행일에 효력이 발생됩니다.
            {'\n'}④ 푸드렌드가 전항에 따라 회원에게 통지하면서 공지일로부터 개정약관 시행일까지
            거부의사 를 표시하지 아니하면 승인한 것으로 본다는 뜻을 명확하게 고지하였음에도 불구하고
            회원의 거부의 의사표시가 없는 경우에는 변경된 약관에 동의한 것으로 봅니다. 회원이
            개정약관에 동 의하지 않을 경우 회원은 제14조 제1항의 규정에 따라 이용계약을 해지할 수
            있습니다.
          </Text>
        </>
      );
    }
    if (index === 3) {
      return (
        <>
          <Text style={styles.termsDetailListTitle}>{item.listTitle}</Text>
          <Text style={styles.termsDetailListContent}>
            ① 푸드렌드와 회원 간의 서비스 이용계약은 회원이 본 약관 내용에 대해 동의하고 서비스
            이용신청을 하면 푸드렌드가 그 신청을 승낙함으로써 성립합니다.
            {'\n'}② 푸드렌드는 회원이 서비스 회원가입 페이지의 “동의함” 버튼을 클릭하거나 회원이 본
            서비스의 이용을 시작한 경우 본 약관에 동의한 것으로 간주합니다. {'\n'}③ 푸드렌드는
            회원이 필수사항 등을 성실히 입력하여 서비스 이용신청을 완료하였을 때에는 신청 내용을
            확인한 후 지체 없이 이를 승낙하여야 합니다. 단, 푸드렌드는 아래 각 호에 해당 하는
            경우에는 승낙을 유보할 수 있습니다.
          </Text>
          <Text style={styles.termsDetailSmallListContent}>
            1. 서비스의 설비용량에 현실적인 여유가 없는 경우 {'\n'}2. 서비스를 제공하기에는
            기술적으로 문제가 있다고 판단되는 경우
          </Text>
          <Text style={styles.termsDetailListContent}>
            ④ 푸드렌드는 아래 각 호에 해당하는 경우에는 본 서비스 이용계약에 대한 승낙을 하지 않거나
            사후에 이용계약을 해지할 수 있습니다.
          </Text>
          <Text style={styles.termsDetailSmallListContent}>
            1. 회원이 서비스 이용신청 시 허위의 정보를 기재하거나 푸드렌드가 요청하는 사항을 기재
            하지 아니한 경우 {'\n'}2. 제10조 제3항에 의해 푸드렌드가 본 서비스 이용계약을 해지했던
            회원이 다시 서비스 이 용신청을 하는 경우, 단 푸드렌드로부터 재가입 승낙을 받은 경우는
            예외로 함{'\n'}3. 회원의 귀책사유로 인하여 승낙이 불가능하거나 관련 법령 등에 위반하여
            서비스 이용신 청을 하는 경우 {'\n'}4. 법정대리인의 동의에 대한 확인절차를 거치지않은
            14세 미만 이용자의 경우
          </Text>
          <Text style={styles.termsDetailListContent}>
            ⑤ 본 조 제3항 및 제4항에 따라 푸드렌드가 이용신청에 대해 승낙을 유보하거나 승낙을 하지
            않을 경우, 푸드렌드는 그 사실을 회원에게 알리도록 합니다. {'\n'}⑥ 본 서비스 이용계약은
            푸드렌드가 신청절차 상에서 가입 완료를 표시한 시점에 성립합니다.
          </Text>
        </>
      );
    }
    if (index === 4) {
      return (
        <>
          <Text style={styles.termsDetailListTitle}>{item.listTitle}</Text>
          <Text style={styles.termsDetailListContent}>
            ① 푸드렌드는 서비스를 제공하기 위하여 회원으로부터 서비스 이용에 필요한 개인정보를 수집
            할 수 있습니다. {'\n'}② 푸드렌드는 관련 법령이 정하는 바에 따라 회원의 개인정보를
            보호하기 위해 노력하며, 회 원의 개인정보의 보호 및 사용에 대해서는 푸드렌드가 별도로
            고지하는 개인정보 처리방침을 적용합니다. {'\n'}③ 푸드렌드는 푸드렌드의 귀책 없이 회원의
            귀책사유로 인하여 회원의 정보가 노출된 경우 이 에 대해서는 책임을 지지 않습니다.
          </Text>
        </>
      );
    }
    if (index === 5) {
      return (
        <>
          <Text style={styles.termsDetailListTitle}>{item.listTitle}</Text>
          <Text style={styles.termsDetailListContent}>
            ① 푸드렌드가 제공하는 서비스의 종류는 아래 각 호로 합니다.
          </Text>
          <Text style={styles.termsDetailSmallListContent}>
            1. 인터넷(PC, 모바일)을 통하여 각종 콘텐츠를 제공하는 서비스 {'\n'}2. 정보 검색과 관련된
            제반서비스 {'\n'}3. 위치기반 서비스 {'\n'}4. 위 각호의 서비스에 부가하여 푸드렌드가 추가
            개발하거나 제휴계약을 통해 회원에게 제공하는 일체의 서비스
          </Text>
          <Text style={styles.termsDetailListContent}>
            ② 서비스 이용시간은 푸드렌드의 업무상 또는 기술상 불가능한 경우를 제외하고는 연중무휴
            1일 24시간(00:00-24:00)으로 함을 원칙으로 합니다. 다만, 푸드렌드는 서비스 설비의
            정기점검 등의 사유로 일정 기간 동안 서비스 제공을 일시 중지하거나 서비스 제공 시간을
            제한할 수 있 으며, 이 경우 푸드렌드는 회원에 대해 그 사유를 사전에 통지합니다. 단,
            푸드렌드는 사전 고 지가 불가능한 긴급한 사유가 있는 경우 사후에 통지할 수 있습니다.
          </Text>
        </>
      );
    }
    if (index === 6) {
      return (
        <>
          <Text style={styles.termsDetailListTitle}>{item.listTitle}</Text>
          <Text style={styles.termsDetailListContent}>
            ① 푸드렌드는 서비스의 일부 또는 전부를 푸드렌드의 사업 계획 및 서비스 운영정책에 따라
            수정·변경 및 중단할 수 있으며, 이에 대하여 관련 법령에 특별한 규정이 없는 한 회원에게
            별도의 보상을 하지 않습니다.
            {'\n'}② 푸드렌드는 서비스용 설비 점검·보수·공사 및 기간통신사업자의 전기통신 서비스의
            중지, 서 비스 이용의 폭주나 국가비상사태 등을 사유로 서비스 제공에 장애가 발생한 경우 그
            사유가 해소될 때까지 서비스를 일시 중지할 수 있습니다. {'\n'}③ 푸드렌드는 본 조에 따른
            서비스의 변경·중단·일시 중지의 사유가 발생한 경우, 서비스를 통 해 공지하는 등의 방법으로
            회원에게 통지합니다.
          </Text>
        </>
      );
    }
    if (index === 7) {
      return (
        <>
          <Text style={styles.termsDetailListTitle}>{item.listTitle}</Text>
          <Text style={styles.termsDetailListContent}>
            ① 푸드렌드가 회원에게 제공하는 서비스에 대한 지식재산권을 포함한 일체의 권리는 푸드렌드
            에 귀속됩니다. {'\n'}② 회원이 서비스를 이용하는 과정에서 작성한 게시물, 댓글, 태그, 사진
            등(이하 “게시물 등”이 라 합니다)에 대한 저작권을 포함한 일체의 권리는 별도의 의사표시가
            없는 한 각 회원에게 귀 속됩니다. {'\n'}③ 회원은 자신이 서비스에 게시한 게시물 등을
            푸드렌드가 국내ᆞ외에서 다음 각 호의 목적으 로 사용하는 것을 허락합니다.
          </Text>
          <Text style={styles.termsDetailSmallListContent}>
            1. 서비스 내에 게시하는 게시물은 관련 프로모션, 광고 등에 노출될 수 있으며, 해당 노출을
            위해 필요한 범위 내에서는 일부 수정, 복제, 편집되어 게시될 수 있음. 이 경우, 푸드렌드는
            저작권법 규정을 준수하며, 회원은 언제든지 고객센터를 통해 해당 게시물에 대해 삭제, 검색
            결과 제외, 비공개 등의 조치를 요청할 수 있음 {'\n'}2 .푸드렌드의 서비스를 홍보하기 위한
            목적으로 미디어·통신사 등에 게시물의 전부 또는 일 부를 보도·방영하게 하는 것. 이 경우
            푸드렌드는 회원의 개별 동의 없이 미디어·통신사 등에 게 회원정보를 제공하지 않음
          </Text>
          <Text style={styles.termsDetailListContent}>
            ④ 푸드렌드는 전항 이외의 방법으로 회원의 게시물 등을 이용하고자 하는 경우에는 사전에
            회원의 동의를 얻습니다.
            {'\n'}⑤ 회원이 서비스에 게시물을 게재하는 것은 다른 회원이 게시물을 서비스 내에서
            사용하거나 푸드렌드가 검색결과로 사용하는 것을 허락한 것으로 봅니다. {'\n'}⑥ 푸드렌드는
            서비스의 정책 또는 푸드렌드가 운영하는 서비스 간 통합 등의 사유로 게시물의 게재위치를
            변경·이전할 수 있으며, 이 경우 사전에 공지합니다.
          </Text>
        </>
      );
    }
    if (index === 8) {
      return (
        <>
          <Text style={styles.termsDetailListTitle}>{item.listTitle}</Text>
          <Text style={styles.termsDetailListContent}>
            ① 서비스 내 모든 게시물 및 콘텐츠의 관리와 운영 권한은 해당 게시물 및 콘텐츠를 게시한
            회원에게 있으며, 회원은 콘텐츠 삭제, 비공개 등의 관리 기능이 제공되는 경우 이를 통하여
            직접 자신의 게시물을 관리할 수 있습니다. 단, 회원의 요청이 있거나 기타 푸드렌드가
            서비스의 원활한 운영을 위하여 필요하다고 판단되는 경우, 푸드렌드는 게시물의 관리 등과
            관련한 사항 을 개선, 지원하는 등의 활동을 할 수 있습니다. {'\n'}② 회원의 게시물 등이
            관련 법령에 위반되는 내용을 포함하는 경우, 푸드렌드는 해당 관련 법 령이나 적법한
            권리자의 요청에 따라 해당 게시물 등에 대한 게시중단 및 삭제 등의 조치를 취할 수
            있습니다. {'\n'}③ 푸드렌드는 다음 각 호와 같은 내용의 게시물이 서비스 내에 게재되는 경우
            해당 게시물에 대해 조치를 취할 수 있습니다.
          </Text>
          <Text style={styles.termsDetailSmallListContent}>
            1. 사생활 침해, 명예훼손, 욕설, 비속어로 타인에게 불쾌감을 주는 경우 {'\n'}2. 공서양속
            저해 및 특정 집단, 단체, 종교 비하로 타인에게 불쾌감을 주는 경우 {'\n'}3. 확인되지
            않거나 근거 없는 내용으로 타인의 권리를 침해하는 경우 {'\n'}4. 타인의 저작권을 침해하는
            경우 {'\n'}5. 타인의 개인정보가 포함된 경우 {'\n'}6. 광고/홍보 내용이 포함된 경우 {'\n'}
            7. 동일 내용의 게시물을 반복 게재하는 경우 {'\n'}8. 악성코드 등 푸드렌드의 원활한 서비스
            제공을 방해하는 경우 {'\n'}9. 기타 회원의 원활한 서비스 이용에 불건전한 영향을 미칠 수
            있다고 판단되는 경우
          </Text>
          <Text style={styles.termsDetailListContent}>
            ④ 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 “정보통신망법”이라 합니다)의
            규정에 의해 다른 회원의 공개된 게시물 등이 본인의 사생활을 침해하거나 명예를 훼손하는 등
            권리를 침해 받은 회원 또는 제3자(이하 “삭제 등 신청인”이라 합니다)는 그 침해사실을
            소명하여 푸드렌드에 해당 게시물 등의 삭제 또는 반박 내용의 게재를 요청할 수 있습니다. 이
            경우 푸드렌드는 해당 게시물 등의 권리 침해 여부를 판단할 수 없거나 당사자 간의 다툼이
            예상되는 경우 해당 게시물 등에 대한 접근을 임시적으로 차단하는 조치(이하 “임시조치”라
            합니다)를 최장 30일까지 취합니다. {'\n'}⑤ 전항에 의해 본인의 게시물 등이 임시조치된
            회원(이하 “게시자”라 합니다)은 임시조치기간 중 푸드렌드에 해당 게시물 등을 복원해 줄
            것을 요청(이하 “재게시 청구”라 합니다)할 수 있으며, 푸드렌드는 임시조치된 게시물의
            명예훼손 등 판단에 대한 방송통신심의위원회 심의 요청에 대해 게시자 및 삭제 등 신청인의
            동의가 있는 경우 게시자 및 삭제 등 신청인을 대리하여 이를 요청하고 동의가 없는 경우
            푸드렌드가 이를 판단하여 게시물 등의 복원 여부를 결정합니다. 게시자의 재게시 청구가 있는
            경우 임시조치 기간 내에 방송통신심의위원회 또는 푸드렌드의 결정이 있으면 그 결정에
            따르고 그 결정이 임시조치 기간 내에 있지 않는 경우 해당 게시물 등은 임시조치 만료일 이후
            복원됩니다. 재게시 청구가 없는 경우 해당 게시물 등은 임시조치 기간 만료 이후 삭제됩니다.
            {'\n'}⑥ 푸드렌드는 서비스 내에 게시된 게시물 등이 사생활 침해 또는 명예훼손 등 제3자의
            권리를 침해한다고 인정하는 경우 회원 또는 제3자의 신고가 없는 경우에도 임시조치(이하
            “임의의 임시조치”라 합니다)를 취할 수 있습니다. 임의의 임시조치된 게시물의 처리 절차는
            본 조 제2 항 후단 및 제4항의 규정에 따릅니다. {'\n'}⑦ 회원의 게시물 등으로 인한 법률상
            이익 침해를 근거로, 다른 회원 또는 제3자가 회원 또는 푸드렌드를 대상으로 하여
            민·형사상의 법적 조치(예: 형사고소, 가처분 신청∙손해배상청구 등 민사소송의 제기)를
            취하는 경우, 푸드렌드는 동 법적 조치의 결과인 법원의 확정판결이 있을 때까지 관련 게시물
            등에 대한 접근을 잠정적으로 제한할 수 있습니다. 게시물 등의 접근 제한 과 관련한 법적
            조치의 소명, 법원의 확정 판결에 대한 소명 책임은 게시물 등에 대한 조치를 요청하는 자가
            부담합니다.
          </Text>
        </>
      );
    }
    if (index === 9) {
      return (
        <>
          <Text style={styles.termsDetailListTitle}>{item.listTitle}</Text>
          <Text style={styles.termsDetailListContent}>
            ① 푸드렌드는 안정적인 서비스 제공을 위해 이에 필요한 설비를 유지·점검하며 문제가 발생한
            경우 복구 등의 조치를 이행합니다. {'\n'}② 푸드렌드는 서비스 회원으로부터 제기되는
            의견이나 불만이 정당하다고 인정될 경우에는 즉 시 처리합니다. 다만, 즉시 처리가 곤란한
            경우에는 서비스 회원에게 사전에 동의 받아 수집한 이메일 등으로 그 사유와 처리 일정을
            통보할 수 있습니다.
          </Text>
        </>
      );
    }
    if (index === 10) {
      return (
        <>
          <Text style={styles.termsDetailListTitle}>{item.listTitle}</Text>
          <Text style={styles.termsDetailListContent}>
            ① 푸드렌드가 회원에게 제공하는 서비스에 대한 지적재산권을 포함한 일체의 권리는 푸드렌드
            에 귀속됩니다. 회원은 푸드렌드에서 제공받은 모든 콘텐츠를 푸드렌드의 사전 동의 없이
            복제, 전시, 배포, 판매, 방송 등 저작권을 침해하는 일체의 행위를 해서는 안됩니다. {'\n'}②
            회원은 아래 각 호에 해당하는 행위를 하여서는 안됩니다.
          </Text>
          <Text style={styles.termsDetailSmallListContent}>
            1. 회원정보에 허위내용을 등록하는 행위 {'\n'}2. 푸드렌드의 서비스에 게시된 정보를
            변경하거나 서비스를 이용하여 얻은 정보를 푸드렌드 의 사전 승낙 없이 영리 또는 비영리의
            목적으로 복제·출판·방송 등에 사용하거나 제3자에게 제공하는 행위 {'\n'}3. 푸드렌드가
            제공하는 서비스를 이용하여 제3자에게 본인을 홍보할 기회를 제공하거나 제3 자의 홍보를
            대행하는 등의 방법으로 금전을 수수하거나 서비스를 이용할 권리를 양도하고 이를 대가로
            금전을 수수하는 행위 {'\n'}4. 푸드렌드 기타 제3자의 명예를 훼손하거나 지식재산권을
            침해하는 등 푸드렌드나 제3자의 권리를 침해하는 행위 {'\n'}5. 다른 회원의 계정을 도용하여
            부당하게 서비스를 이용하는 행위 {'\n'}6. 외설 또는 폭력적인 메시지·화상·음성 등이 담긴
            내용을 게시하거나 공공질서 또는 공서양 속에 반하는 정보를 공개 또는 게시하는 행위 {'\n'}
            7. 정보통신망법 등 관련 법령에 의하여 그 전송 또는 게시가 금지되는 정보(컴퓨터 프로그램
            등)를 전송·게시하거나 청소년보호법에서 규정하는 청소년유해매체물을 게시하는 행위 {'\n'}
            8. 푸드렌드의 직원이나 서비스의 관리자를 가장하거나 사칭하여 또는 타인의 명의를 도용하여
            게시물 등을 작성하거나 이메일을 발송하는 행위 {'\n'}9. 컴퓨터 소프트웨어, 하드웨어,
            전기통신 장비의 정상적인 가동을 방해·파괴할 목적으로 고안된 소프트웨어 바이러스, 기타
            다른 컴퓨터 코드·파일·프로그램을 포함하고 있는 자료를 게시하거나 다른 회원에게 발송하는
            행위 {'\n'}10. 스토킹(stalking). 스팸성 댓글의 게재 등 다른 회원의 정상적인 서비스
            이용을 방해하는 행위
            {'\n'}11. 다른 회원의 개인정보를 그 동의 없이 수집·저장·공개하거나 부정하게 사용하는
            행위 {'\n'}12. 광고 또는 선전 등 영리 목적으로 서비스를 이용하는 행위 {'\n'}13.
            푸드렌드가 제공하는 소프트웨어 등을 개작하거나 리버스 엔지니어링, 디컴파일, 디스어 셈블
            하는 행위 {'\n'}14. 자기 또는 타인에게 재산상의 이익을 주거나 타인에게 손해를 가할
            목적으로 허위의 정보를 유통시키는 행위 {'\n'}15. 본 약관 및 푸드렌드가 규정한 서비스
            약관 또는 정책을 위반하는 행위
          </Text>
          <Text style={styles.termsDetailListContent}>
            ③ 푸드렌드는 회원이 전항 각 호의 행위를 하는 경우 해당 게시물 등을 삭제 또는 임시조치할
            수 있고 회원의 서비스 이용을 제한하거나 그 사유가 중대한 경우 일방적으로 본 계약을 해지
            할 수 있습니다. {'\n'}④ 회원이 본 조 제2항 각 호의 행위를 함으로써 푸드렌드에 손해가
            발생한 경우, 푸드렌드는 해당 회원에 대해 손해배상을 청구할 수 있습니다. {'\n'}⑤ 본
            서비스 내에서 푸드렌드의 관여 없이 회원 간 이루어지는 일체의 행위(거래 행위 포함)와
            관련하여 발생하는 모든 의무와 책임은 해당 회원에게 있으며, 푸드렌드는 그 내용에 대하여
            책임을 지지 않습니다.
          </Text>
        </>
      );
    }
    if (index === 11) {
      return (
        <>
          <Text style={styles.termsDetailListTitle}>{item.listTitle}</Text>
          <Text style={styles.termsDetailListContent}>
            ① 푸드렌드는 아래 각 호에 해당하는 사유가 발생한 경우에는 회원의 서비스 이용을
            제한하거나 중지시킬 수 있습니다.
          </Text>
          <Text style={styles.termsDetailSmallListContent}>
            1. 회원이 푸드렌드의 서비스 운영을 고의 또는 과실로 방해하는 경우 {'\n'}2. 회원이
            제10조의 의무를 위반한 경우 {'\n'}3. 기타 중대한 사유로 인하여 푸드렌드가 해당 회원에
            대해 서비스 제공을 지속하는 것이 상당하지 않다고 판단되는 경우
          </Text>
          <Text style={styles.termsDetailListContent}>
            ② 푸드렌드는 전항의 규정에 의하여 서비스의 이용을 제한하거나 중지한 때에는 그 사유 및
            제한 기간 등을 회원에게 알립니다.
          </Text>
        </>
      );
    }
    if (index === 12) {
      return (
        <>
          <Text style={styles.termsDetailListTitle}>{item.listTitle}</Text>
          <Text style={styles.termsDetailListContent}>
            회원은 본인의 계정 관리에 대한 책임을 부담하며, 본인 계정을 제3자가 무단 이용하는 등
            회원의 귀책사유로 인해 발생하는 모든 불이익에 대한 책임을 부담합니다. 단, 푸드렌드의
            고의∙ 과실로 인하여 야기된 경우에는 푸드렌드가 책임을 부담합니다.
          </Text>
        </>
      );
    }
    if (index === 13) {
      return (
        <>
          <Text style={styles.termsDetailListTitle}>{item.listTitle}</Text>
          <Text style={styles.termsDetailListContent}>
            회원의 서비스 받을 권리는 이를 양도 내지 증여의 대상으로 하거나 질권의 목적으로 활용할
            수 없습니다.
          </Text>
        </>
      );
    }
    if (index === 14) {
      return (
        <>
          <Text style={styles.termsDetailListTitle}>{item.listTitle}</Text>
          <Text style={styles.termsDetailListContent}>
            ① 회원이 본 서비스 이용계약을 해지하고자 하는 때에는 푸드렌드가 제공하는 서비스 내의
            회원탈퇴 기능을 이용하여 탈퇴를 요청할 수 있습니다. 푸드렌드는 탈퇴를 요청한 시점에서
            불가 피한 사정이 없는 한 즉시 탈퇴요청을 처리합니다. {'\n'}② 회원이 서비스를 이용하는
            도중, 연속하여 1 년 동안 푸드렌드의 서비스에 log-in한 기록이 없는 경우 해당 회원이
            등록한 이메일 주소를 통해 회원에게 통지 후 푸드렌드는 회원의 개인 정보를 4년간 분리
            보관합니다(단, 관련 법령에서 별도의 기간을 정한 경우에는 해당 기간에 따릅니다). 분리
            보관 기간 내에 회원의 log-in 시도 없이 보관기간이 경과된 경우 푸드렌드는 별도의 통지
            없이 해당 회원의 계정을 탈퇴처리 합니다. {'\n'}③ 본 이용 계약이 해지된 경우 회원의
            게시물 등은 삭제됩니다.
          </Text>
        </>
      );
    }
    if (index === 15) {
      return (
        <>
          <Text style={styles.termsDetailListTitle}>{item.listTitle}</Text>
          <Text style={styles.termsDetailListContent}>
            ① 회사는 법령상 허용되는 한도 내에서 서비스와 관련하여 본 약관에 명시되지 않은 어떠한
            구체적인 사항에 대한 약정이나 보증을 하지 않습니다. 또한, 회사는 CP(Contents Provider)가
            제공하거나 회원이 작성하는 등의 방법으로 서비스에 게재된 정보, 자료, 사실의 신뢰도,
            정확성 등에 대해서는 보증을 하지 않으며, 회사의 과실 없이 발생된 여러분의 손해에
            대하여는 책임을 부담하지 아니합니다. {'\n'}② 회사는 회사의 과실로 인하여 여러분이 손해를
            입게 될 경우 본 약관 및 관련 법령에 따라 여러분의 손해를 배상하겠습니다. 다만 회사는
            회사의 과실 없이 발생된 아래와 같은 손해에 대해서는 책임을 부담하지 않습니다. 또한
            회사는 법률상 허용되는 한도 내에서 간접 손해, 특 별 손해, 결과적 손해, 징계적 손해, 및
            징벌적 손해에 대한 책임을 부담하지 않습니다.
          </Text>
          <Text style={styles.termsDetailSmallListContent}>
            1. 천재지변 또는 이에 준하는 불가항력의 상태에서 발생한 손해 {'\n'}2. 여러분의
            귀책사유로 서비스 이용에 장애가 발생한 경우 {'\n'}3. 서비스에 접속 또는 이용과정에서
            발생하는 개인적인 손해 {'\n'}4. 제3자가 불법적으로 회사의 서버에 접속하거나 서버를
            이용함으로써 발생하는 손해 {'\n'}5. 제3자가 회사 서버에 대한 전송 또는 회사 서버로부터의
            전송을 방해함으로써 발생하는 손해
            {'\n'}6. 제3자가 악성 프로그램을 전송 또는 유포함으로써 발생하는 손해 {'\n'}7. 전송된
            데이터의 생략, 누락, 파괴 등으로 발생한 손해, 명예훼손 등 제3자가 서비스를 이용하는
            과정에서 발생된 손해 {'\n'}8. 기타 회사의 고의 또는 과실이 없는 사유로 인해 발생한 손해
          </Text>
        </>
      );
    }
    if (index === 16) {
      return (
        <>
          <Text style={styles.termsDetailListTitle}>{item.listTitle}</Text>
          <Text style={styles.termsDetailListContent}>
            ① 푸드렌드가 회원에 대한 통지를 하는 경우, 본 약관에 별도 규정이 없는 한 회원이
            푸드렌드에 제공한 이메일 주소, 푸시 알림, 휴대폰 번호 등으로 통지할 수 있습니다. {'\n'}②
            푸드렌드가 회원 전체에게 통지를 하는 경우, 7일 이상 푸드렌드의 서비스 초기화면 또는
            서비스 내 공지사항 등에 게시함으로써 전항의 통지에 갈음할 수 있습니다.
          </Text>
        </>
      );
    }
    if (index === 17) {
      return (
        <>
          <Text style={styles.termsDetailListTitle}>{item.listTitle}</Text>
          <Text style={styles.termsDetailListContent}>
            본 약관에 명시되지 않은 사항에 대해서는 푸드렌드와 회원 간 합의하여 결정하고, 합의가
            되지 않는 경우 관련 법령 또는 상관례에 따릅니다. 사용자가 본 약관을 준수하지 않는
            경우에, 푸드렌드가 즉시 조치를 취하지 않더라도 푸드렌드가 가지고 있는 권리를 포기하는
            것이 아니며, 본 약관 중 일부 조항의 집행이 불가능하게 되더라도 다른 조항에는 영향을
            미치지 않습니다.
          </Text>
        </>
      );
    }
    if (index === 18) {
      return (
        <>
          <Text style={styles.termsDetailListTitle}>{item.listTitle}</Text>
          <Text style={styles.termsDetailListContent}>
            ① 본 약관은 대한민국법에 의하여 규정되고 이행되며, 푸드렌드와 회원 간에 제기된 소송에는
            대한민국법을 적용합니다. {'\n'}② 서비스 이용과 관련하여 푸드렌드와 회원 간에 발생한
            분쟁은 서울중앙지방법원 또는 민사 소송법 상의 관할법원에 제기합니다. {'\n'}-공고일자:
            2021년 9월 30일
            {'\n'}-시행일자: 2021년 9월 30일{'\n'}
          </Text>
          <Text style={styles.termsDetailSmallListContent}></Text>
        </>
      );
    }
    return <></>;
  };

  return (
    <Wrapper>
      <TermsDetailContainer>
        <TermsDetailItem>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={termsDetailData}
            renderItem={renderItem}
          />
        </TermsDetailItem>
      </TermsDetailContainer>
      {Platform.OS === 'ios' ? <View style={{ width: '100%', height: 40 }}></View> : <></>}
    </Wrapper>
  );
};

export default TermsDetailScreen;

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
  termsDetailTitle: {
    color: '#2A3037',
    fontSize: 18,
    marginTop: 30,
  },
  termsDetailListTitle: {
    marginTop: 15,
    color: '#2A3037',
    fontSize: 16,
    fontWeight: 'bold',
  },
  termsDetailListContent: {
    color: '#2A3037',
    marginTop: 5,
    lineHeight: 20,
  },
  termsDetailSmallListContent: {
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

const TermsDetailContainer = styled.View({
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

const TermsDetailItem = styled.View({
  width: '95%',
  height: '100%',
});
