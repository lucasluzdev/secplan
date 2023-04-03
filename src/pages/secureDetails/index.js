import React from 'react';
import {Text, View, Pressable, Image} from 'react-native';
import {Container, Row} from '../styled';

import {accent, primary, primaryDark, secondary} from '../../config/colors';

const images = [
  require('../../assets/logos/sulamerica.png'),
  require('../../assets/logos/bradesco.png'),
  require('../../assets/logos/unimed.png'),
  require('../../assets/logos/allianz.png'),
];

export default function SecureDetailsScreen({route, navigation}) {
  const {
    id,
    plan,
    holder,
    description,
    value,
    paymentPeriod,
    contact,
    redirectTo,
  } = route.params.data;

  return (
    <Container>
      <View
        style={{
          flex: 1,
          backgroundColor: primaryDark,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          paddingHorizontal: 15,
        }}>
        <Row style={{alignItems: 'center'}}>
          <Image
            source={images[id - 1]}
            style={{width: 50, height: 50, resizeMode: 'stretch'}}
          />
          <Text style={{color: '#FFF', fontSize: 24, marginLeft: 10}}>
            {holder}
          </Text>
        </Row>

        <Text style={{color: '#FFF', fontSize: 18}}>{plan}</Text>
        <Text style={{color: '#FFF', fontSize: 18, marginVertical: 10}}>
          {description}
        </Text>
        <Text style={{color: '#FFF', fontSize: 18, marginVertical: 10}}>
          Cobertura: 100%
        </Text>
        <Text style={{color: accent, fontSize: 18, marginVertical: 10}}>
          Custo: {value} / {paymentPeriod}
        </Text>
        <Text style={{color: secondary, fontSize: 18}}>
          Entrar em contato com: {contact}
        </Text>
        <Row>
          <Pressable
            style={{
              marginTop: 50,
              backgroundColor: accent,
              flex: 1,
              height: 30,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#FFF', fontSize: 18}}>CONTRATAR</Text>
          </Pressable>
        </Row>
      </View>
    </Container>
  );
}
