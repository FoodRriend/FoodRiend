import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import Modal from 'react-native-modal';
import { showProfilePhotoModal } from '../../redux/modalSlice';

const ProfilePhotoModal = ({
  openCamara,
  openImageLibrary,
  defaultImageHandler,
}: {
  openCamara: any;
  openImageLibrary: any;
  defaultImageHandler: any;
}) => {
  const dispatch = useAppDispatch();
  const { profilePhotoModal } = useAppSelector((state) => state.modals);

  const closeModal = () => {
    dispatch(showProfilePhotoModal(false));
  };

  return (
    <Modal
      onBackdropPress={() => closeModal()}
      isVisible={profilePhotoModal}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}>
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
            borderTopStartRadius: 10,
            borderTopEndRadius: 10,
            backgroundColor: '#fff',
          }}>
          <Text style={{ fontSize: 20, color: '#007aff', fontWeight: 'normal' }}>사진 앨범</Text>
        </View>
      </TouchableOpacity>

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
            backgroundColor: '#fff',
          }}>
          <Text style={{ fontSize: 20, color: '#007aff', fontWeight: 'normal' }}>사진 찍기</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => defaultImageHandler()}>
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
          <Text style={{ fontSize: 20, color: '#007aff', fontWeight: 'normal' }}>
            기본 이미지로 변경
          </Text>
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

export default ProfilePhotoModal;
