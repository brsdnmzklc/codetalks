import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import styles from './Sign.style';
import auth from '@react-native-firebase/auth';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
const Sign = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleFormSubmit = async () => {
    if (password !== rePassword) {
      Alert.alert('codetalks', 'Parolalar Uyuşmuyor');
      return;
    }
    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(email, password);
      setLoading(false);
      navigation.navigate('LoginPage');
    } catch (error) {
      const errorMessage = authErrorMessageParser(error.code);
      Alert.alert('codetalks', errorMessage);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>codetalks</Text>
      </View>
      <Input
        placeholder="E-posta Giriniz..."
        value={email}
        onChange={setEmail}
      />
      <Input
        placeholder="Şifre Giriniz..."
        isSecure={true}
        value={password}
        onChange={setPassword}
      />
      <Input
        placeholder="Tekrar Şifre Giriniz..."
        isSecure={true}
        value={rePassword}
        onChange={setRePassword}
      />
      <Button title="Kayıt Ol" onPress={handleFormSubmit} loading={loading} />
      <Button title="Geri" onPress={handleGoBack} />
    </View>
  );
};
export default Sign;
