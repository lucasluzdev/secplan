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
import Icon from 'react-native-vector-icons/FontAwesome';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function SavedListItem({
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

  function handleSaved() {
    Alert.alert('Atenção!', 'Deseja remover esse item dos seus favoritos?', [
      {text: 'SIM', onPress: () => console.log('SIM Pressionado')},
      {text: 'NÃO', onPress: () => console.log('NÃO Pressionado')},
    ]);
  }

  return (
    <CustomListItem>
      <Row>
        <View style={{flex: 5}}>
          <CustomItemTitle>{plan}</CustomItemTitle>
        </View>
        <View style={{flex: 1}}>
          <Pressable onPress={() => handleSaved()}>
            <Icon name="heart" size={30} color={'#e00'} />
          </Pressable>
        </View>
      </Row>
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
