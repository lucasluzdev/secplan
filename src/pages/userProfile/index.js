import React from 'react';
import {Text, Image, View} from 'react-native';
import {Container} from './styled';

const data = require('../../config/mock.json');
import perfil from '../../assets/img/profile.jpg';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import {primary, accent, primaryDark, secondaryDark} from '../../config/colors';
import {Row} from '../styled';

export default function UserProfileScreen() {
  const {id, name, birth, genre, email, phone, cellphone} = data.user[0];

  return (
    <Container>
      <View
        style={{
          backgroundColor: primary,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 15,
          paddingVertical: 15,
        }}>
        <Text
          style={{
            color: accent,
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          BEM VINDO AO SEU PERFIL
        </Text>
        <Image
          source={perfil}
          style={{
            width: 150,
            height: 150,
            resizeMode: 'stretch',
            borderRadius: 500,
          }}
        />
        <Text style={{color: '#FFF', fontSize: 16}}>Nome Completo: {name}</Text>
        <Text style={{color: '#FFF', fontSize: 16}}>
          Data de nascimento: {birth}
        </Text>
        <Text style={{color: '#FFF', fontSize: 16}}>
          Gênero: {genre == 'M' ? 'Masculino' : 'Feminino'}
        </Text>
        <Text style={{color: '#FFF', fontSize: 16}}>Email: {email}</Text>
        <Text style={{color: '#FFF', fontSize: 16}}>Telefone: {phone}</Text>
        <Text style={{color: '#FFF', fontSize: 16}}>Celular: {cellphone}</Text>

        <Row>
          <Pressable
            style={{
              marginTop: 10,
              backgroundColor: accent,
              flex: 1,
              height: 30,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#FFF', fontSize: 18}}>EDITAR</Text>
          </Pressable>
        </Row>
        <Row>
          <Pressable
            style={{
              marginTop: 10,
              backgroundColor: secondaryDark,
              flex: 1,
              height: 30,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#FFF', fontSize: 18}}>ALTERAR SENHA</Text>
          </Pressable>
        </Row>
        <Row>
          <Pressable
            style={{
              marginTop: 10,
              backgroundColor: primaryDark,
              flex: 1,
              height: 30,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#FFF', fontSize: 18}}>SAIR</Text>
          </Pressable>
        </Row>
      </View>
    </Container>
  );
}
