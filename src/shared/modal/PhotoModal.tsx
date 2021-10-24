import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import Modal from 'react-native-modal';
import { showPhotoModal } from '../../redux/modalSlice';

const PhotoModal = ({
  openCamara,
  openImageLibrary,
}: {
  openCamara: any;
  openImageLibrary: any;
}) => {
  const dispatch = useAppDispatch();
  const { photoModal } = useAppSelector((state) => state.modals);

  const closeModal = () => {
    dispatch(showPhotoModal(false));
  };

  return (
    <Modal
      onBackdropPress={() => closeModal()}
      isVisible={photoModal}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}>
      <TouchableOpacity
        onPress={() => {
          openCamara();
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 359,
            height: 55,
            borderTopStartRadius: 10,
            borderTopEndRadius: 10,
            backgroundColor: '#fff',
          }}>
          <Text style={{ fontSize: 20, color: '#007aff', fontWeight: 'normal' }}>사진 찍기</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={async () => {
          await openImageLibrary();
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 359,
            height: 55,
            borderBottomStartRadius: 10,
            borderBottomEndRadius: 10,
            backgroundColor: '#fff',
          }}>
          <Text style={{ fontSize: 20, color: '#007aff', fontWeight: 'normal' }}>사진 앨범</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => closeModal()}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 359,
            height: 55,
            borderRadius: 10,
            marginTop: 10,
            backgroundColor: '#fff',
          }}>
          <Text style={{ fontSize: 20, fontWeight: '600', color: '#007aff' }}>취소</Text>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default PhotoModal;
