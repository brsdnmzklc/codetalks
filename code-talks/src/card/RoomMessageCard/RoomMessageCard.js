import React from 'react';
import {View, Text} from 'react-native';
import styles from './RoomMessageCard.style';
const RoomMessageCard = ({item}) => {
  const messages = item.content;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.username}>{messages.user}</Text>
        <Text style={styles.date}>{messages.date}</Text>
      </View>
      <Text style={styles.message}>{messages.message}</Text>
    </View>
  );
};

export default RoomMessageCard;
