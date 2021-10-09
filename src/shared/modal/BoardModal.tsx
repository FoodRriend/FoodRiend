import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import Modal from 'react-native-modal';
import { showBoardModal } from '../../redux/modalSlice';

const BoardModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { boardModal } = useAppSelector((state) => state.modals);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (boardModal) {
      setModalVisible(true);
    }
  }, [boardModal]);

  const closeModal = () => {
    setModalVisible(false);
    dispatch(showBoardModal(false));
  };

  return (
    <Modal
      onBackdropPress={() => closeModal()}
      isVisible={modalVisible}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}>
      <View
        style={{
          alignSelf: 'center',
          width: 270,
          height: 135,
          borderRadius: 10,
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            width: '100%',
            height: 91,
            borderBottomWidth: 0.5,
            borderBottomColor: '#DFE2E6',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 17, fontWeight: '600', marginTop: 19 }}>게시물 삭제</Text>
          <Text style={{ fontSize: 13, marginTop: 2 }}>
            게시물을 삭제하면 작성한 리뷰를 다시 볼 수
          </Text>
          <Text style={{ fontSize: 13 }}>없어요. 게시글을 정말 삭제하시겠어요?</Text>
        </View>
        <View style={{ width: '100%', height: 44, flexWrap: 'wrap' }}>
          <Pressable
            onPress={() => closeModal()}
            style={{
              width: '50%',
              height: 44,
              borderRightWidth: 0.5,
              borderRightColor: '#DFE2E6',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ color: '#007AFF', fontSize: 17 }}>취소</Text>
          </Pressable>
          <Pressable
            onPress={() => closeModal()}
            style={{ width: '50%', height: 44, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#FF0000', fontSize: 17, fontWeight: '600' }}>삭제</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default BoardModal;
