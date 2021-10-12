import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import Modal from 'react-native-modal';
import { showSelectModal } from '../../redux/modalSlice';

const SelectModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectModal } = useAppSelector((state) => state.modals);


  const closeModal = () => {
    dispatch(showSelectModal(false));
  };

  return (
    <Modal
      onBackdropPress={() => closeModal()}
      isVisible={selectModal}
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
          <Text style={{ fontSize: 17, fontWeight: '600', marginTop: 19 }}>친구 삭제</Text>
          <Text style={{ fontSize: 13, marginTop: 2 }}>정말로 친구와 관계를 끊겠습니까?</Text>
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
            <Text style={{ color: '#007AFF', fontSize: 17, fontWeight: '600' }}>삭제</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default SelectModal;
