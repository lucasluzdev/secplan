import React from 'react';
import {
  Text,
  View,
  Pressable
} from 'react-native';
import { Container, Row } from '../styled';
import Icon from 'react-native-vector-icons/FontAwesome';
import { primaryDark, accent } from '../../config/colors';

const data = require('../../config/mock.json');

export default function NotificationDetailsScreen({ route, navigation }) {

  const { id, title, description, img, checked, redirectTo } = route.params.data;

  return (

    <Container>
      <View style={{flex: 1, backgroundColor: primaryDark, justifyContent: 'center', alignItems: 'center', alignContent: 'center', padding: 25}}>
      <Row style={{alignItems: 'center'}}>
      <Icon name='bell' size={40} color={"#ba0"} />
        <Text style={{ color: accent, fontSize: 24, marginLeft: 10}}>{title}</Text>
      </Row>
      
      <Text style={{ color: '#FFF', fontSize: 18, marginVertical: 10}}>{description}</Text>
      <Row>
        <Pressable style={{marginTop: 50, backgroundColor: accent, flex: 1, height: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#FFF', fontSize: 18}}>QUERO VER AGORA!</Text>
        </Pressable>
      </Row>
      </View>
    </Container>

  );
};