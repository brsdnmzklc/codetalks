import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import database from '@react-native-firebase/database';
import styles from '../Rooms/Rooms.style';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import ModalRoomMessages from '../../components/Modal/ModalRoomMessages/ModalRoomMessages';
import auth from '@react-native-firebase/auth';
import RoomMessageCard from '../../card/RoomMessageCard/RoomMessageCard';
import parseRooms from '../../utils/parseRooms';
const RoomMessages = ({navigation, route}) => {
  const [messages, setMessages] = useState([]);
  const item = route.params.item;

  navigation.setOptions({headerTitle: item.content.title});
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState(null);
  const toggleModal = () => {
    setVisible(!visible);
  };
  const username = auth().currentUser.email;
  const onSend = () => {
    database()
      .ref(`rooms/${item.id}/contents`)
      .push({
        message: text,
        user: username.split('@')[0],
        date: new Date().toISOString(),
      });
    setVisible(!visible);
  };
  useEffect(() => {
    database()
      .ref(`rooms/${item.id}/contents`)
      .on('value', snapshot => {
        const data = parseRooms(snapshot.val());
        setMessages(data);
      });
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({item}) => <RoomMessageCard item={item} />}
      />
      <FloatingButton onPress={toggleModal} />
      <ModalRoomMessages
        isVisible={visible}
        onClose={toggleModal}
        onChange={setText}
        onSend={onSend}
      />
    </View>
  );
};
export default RoomMessages;
