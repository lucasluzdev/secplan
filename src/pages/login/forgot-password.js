import React, {useState} from 'react';
import {Text, Alert} from 'react-native';
import {textWhite} from '../../config/colors';
import {Label, Input, SubmitButton, SubmitButtonText} from './styled';

import {Container} from '../styled';
import {CancelButton} from '../customPoliceForm/styled';

export default function ForgotPasswordScreen({navigation}) {
  const [text, setText] = useState('');

  const createTwoButtonAlert = () =>
    Alert.alert('Atenção!', `Enviando link de recuperação para ${text}`, [
      {text: 'OK', onPress: () => navigation.navigate('LoginScreen')},
    ]);

  return (
    <Container style={{padding: 15}}>
      <Text style={{color: textWhite, marginBottom: 80, fontSize: 18}}>
        Digite seu email ou número de celular utilizado no cadastro, para você
        receber um link de recuperação através do seu email, ou via SMS.
      </Text>
      <Label>Email/celular de recuperação</Label>
      <Input
        autoFocus={true}
        onChangeText={value => setText(value)}
        value={text}
        placeholder="Email/celular"
      />

      <SubmitButton
        style={{marginTop: 30}}
        onPress={() => createTwoButtonAlert()}>
        <SubmitButtonText>RECUPERAR</SubmitButtonText>
      </SubmitButton>

      <CancelButton
        style={{marginTop: 30}}
        onPress={() => navigation.navigate('LoginScreen')}>
        <SubmitButtonText>CANCELAR</SubmitButtonText>
      </CancelButton>
    </Container>
  );
}
