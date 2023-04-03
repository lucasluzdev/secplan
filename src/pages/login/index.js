import React, {useState} from 'react';
import {Image, Alert} from 'react-native';
import {Link} from '@react-navigation/native';
import {
  Label,
  Input,
  SubmitButton,
  SubmitButtonText,
  SignUpText,
  SignUpButton,
} from './styled';

import {Container} from '../styled';

import banner from '../../assets/img/banner.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {accent} from '../../config/colors';

export default function LoginScreen({navigation}) {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');

  const createTwoButtonAlert = () =>
    Alert.alert('Atenção!', 'Login ou senha incorretos! Tente novamente!', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(`Login: ${text}`);
    console.log(`Senha: ${password}`);

    if (text.length === 0 && password.length === 0) {
      createTwoButtonAlert();
    } else {
      await AsyncStorage.setItem('authkey', '1');
      setText('');
      setPassword('');
      navigation.navigate('HomeScreen');
    }
  }

  function goToSignUpPage(e) {
    e.preventDefault();
    navigation.navigate('SignUpScreen');
  }

  return (
    <Container>
      <Image source={banner} width={100} height={100} />

      <Label>Email/celular</Label>
      <Input
        autoFocus={true}
        onChangeText={value => setText(value)}
        value={text}
        placeholder="Email/celular"
      />

      <Label>Senha</Label>
      <Input
        onChangeText={value => setPassword(value)}
        value={password}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <Link
        to="/ForgotPasswordScreen"
        style={{
          color: `${accent}`,
          alignSelf: 'flex-end',
          fontSize: 12,
          marginTop: 6,
        }}>
        ESQUECEU SUA SENHA?
      </Link>

      <SubmitButton onPress={e => handleSubmit(e)}>
        <SubmitButtonText>ACESSAR</SubmitButtonText>
      </SubmitButton>

      <SignUpButton onPress={e => goToSignUpPage(e)}>
        <SignUpText>FAÇA SEU CADASTRO AGORA!</SignUpText>
      </SignUpButton>
    </Container>
  );
}
