import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './Input.style';
const Button = ({placeholder, isSecure, value, onChange}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={isSecure}
        onChangeText={onChange}
      />
    </View>
  );
};
export default Button;
