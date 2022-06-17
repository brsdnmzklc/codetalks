import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import styles from './Button.style';
import colors from '../../styles/colors';
const Button = ({title, onPress, loading}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={colors.ImperialRed} size="large" />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
export default Button;
