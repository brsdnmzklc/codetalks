import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './FloatingButton.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FloatingButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="plus-circle-outline" size={70} color="#F1FAEE" />
    </TouchableOpacity>
  );
};

export default FloatingButton;
