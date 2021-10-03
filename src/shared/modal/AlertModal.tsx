import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import Modal from 'react-native-modal';
import { showAlertModal } from '../../redux/modalSlice';

const AlertModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { alertModal } = useAppSelector((state) => state.modals);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (alertModal) {
      setModalVisible(true);
    }
  }, [alertModal]);

  const closeModal = () => {
    setModalVisible(false);
    dispatch(showAlertModal(false));
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
          height: 122,
          borderRadius: 10,
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            width: '100%',
            height: 78,
            borderBottomWidth: 0.5,
            borderBottomColor: '#DFE2E6',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 17, fontWeight: '600', marginTop: 19 }}>친구 요청</Text>
          <Text style={{ fontSize: 13, marginTop: 2 }}>OOO님에게 친구요청을 보냈습니다.</Text>
        </View>
        <Pressable
          onPress={() => closeModal()}
          style={{ width: '100%', height: 44, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: '#007AFF', fontWeight: '600', fontSize: 17 }}>확인</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default AlertModal;
