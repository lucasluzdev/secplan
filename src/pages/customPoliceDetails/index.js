import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { Container, Row } from '../styled';
import { primaryDark, accent, secondary } from '../../config/colors';

export default function CustomPoliceDetailsScreen({ route, navigation }) {

  const { id, plan, planDetails, estimatedValue, estimatedPaymentPeriod } = route.params.data;

  return (

    <Container>
      <View style={{backgroundColor: primaryDark, justifyContent: 'center', alignItems: 'center', alignContent: 'center', padding: 15}}>
        <Row>
          <Text style={{ color: accent, fontSize: 24}}>{plan}</Text>
        </Row>

        {planDetails.map(plans => (
          <View key={plans.id} style={{flex: 1, marginVertical: 5, marginLeft: 20, width: 350}}>
            <Text style={{ color: '#FFF', fontSize: 14 }}>Tipo: {plans.type}</Text>
            <Text style={{ color: '#FFF', fontSize: 14 }}>Cobertura: {plans.coverage}%</Text>
            <Text style={{ color: '#FFF', fontSize: 14 }}>Descrição: {plans.description}</Text>
          </View>
        ))}

        <Text style={{ color: secondary, fontSize: 18, marginVertical: 10 }}>Valor estimado {estimatedValue} / {estimatedPaymentPeriod}</Text>
        <Row>
          <Pressable style={{ marginTop: 50, backgroundColor: accent, flex: 1, height: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#FFF', fontSize: 18 }}>GERAR DOCUMENTO</Text>
          </Pressable>
        </Row>
      </View>
    </Container>
  );
}
