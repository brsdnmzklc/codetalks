import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './Rooms.style';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import ModalRoom from '../../components/Modal/ModalRoom/ModalRoom';
import database from '@react-native-firebase/database';
import parseRooms from '../../utils/parseRooms';
import RoomCard from '../../card/RoomCard/RoomCard';
import auth from '@react-native-firebase/auth';
const Rooms = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState(null);
  const [rooms, setRooms] = useState([]);
  const toggleModal = () => {
    setVisible(!visible);
  };

  const onSend = () => {
    database().ref('rooms/').push({
      title: text,
      user: auth().currentUser.email,
    });
    setVisible(!visible);
  };
  useEffect(() => {
    database()
      .ref('rooms/')
      .on('value', snapshot => {
        const parsedData = parseRooms(snapshot.val());
        setRooms(parsedData);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={rooms}
        renderItem={({item}) => (
          <RoomCard item={item} navigation={navigation} />
        )}
      />
      <FloatingButton onPress={toggleModal} />
      <ModalRoom
        isVisible={visible}
        onClose={toggleModal}
        onChange={setText}
        onSend={onSend}
      />
    </View>
  );
};
export default Rooms;
