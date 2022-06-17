import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './RoomCard.style';
const RoomCard = ({item, navigation}) => {
  const handleOnPress = () => {
    navigation.navigate('RoomMessages', {item});
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <Text style={styles.title}>{item.content.title}</Text>
    </TouchableOpacity>
  );
};

export default RoomCard;
