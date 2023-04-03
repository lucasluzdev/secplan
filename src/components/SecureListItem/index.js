import React from 'react';
import {Row} from '../../pages/styled';
import {
  CustomItemText,
  CustomListItem,
  CustomItemTitle,
  InfoButton,
  ContractButton,
  InfoButtonText,
  ContractButtonText,
} from './styled';
import {View, Alert} from 'react-native';

export default function SecureListItem({
  id,
  plan,
  holder,
  description,
  value,
  paymentPeriod,
  contact,
  navigation,
}) {
  function handleInformation() {
    navigation.navigate('SecureDetailsScreen', {
      data: {id, plan, holder, description, value, paymentPeriod, contact},
    });
  }

  function handleContract() {
    Alert.alert('Atenção!', 'Botão de contrato', [
      {text: 'OK', onPress: () => console.log('Contrato Pressed')},
    ]);
  }

  return (
    <CustomListItem>
      <CustomItemTitle>{plan}</CustomItemTitle>
      <CustomItemText>Seguradora: {holder}</CustomItemText>
      <CustomItemText>{description}</CustomItemText>
      <CustomItemText>
        {value}/{paymentPeriod}
      </CustomItemText>
      <CustomItemText>Entrar em contato com:{contact}</CustomItemText>

      <Row>
        <InfoButton onPress={() => handleInformation()}>
          <InfoButtonText>MAIS INFO</InfoButtonText>
        </InfoButton>
        <View style={{flex: 1}} />
        <ContractButton onPress={() => handleContract()}>
          <ContractButtonText>CONTRATAR</ContractButtonText>
        </ContractButton>
      </Row>
    </CustomListItem>
  );
}
