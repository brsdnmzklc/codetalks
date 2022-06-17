import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import styles from './Login.style';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSign = () => {
    navigation.navigate('SignPage');
  };

  const handleFormSubmit = async () => {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(email, password);
      setLoading(false);
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
      <Button title="Giriş Yap" onPress={handleFormSubmit} loading={loading} />
      <Button title="Kayıt Ol" onPress={handleSign} />
    </View>
  );
};

export default Login;
