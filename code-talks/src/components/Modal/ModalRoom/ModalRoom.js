import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import Button from '../../Button/Button';
import styles from './ModalRoom.style';
const ContentInputModal = ({isVisible, onChange, onClose, onSend}) => {
  return (
    <Modal
      style={styles.modal}
      isVisible={isVisible}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Oda ekle..."
            onChangeText={onChange}
            multiline
          />
        </View>
        <Button title="Ekle" onPress={onSend} />
      </View>
    </Modal>
  );
};

export default ContentInputModal;
0;
