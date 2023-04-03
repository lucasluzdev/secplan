import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {Column, Container, Row} from '../styled';
import {
  Input,
  Label,
  CancelButton,
  CancelButtonText,
  SubmitButton,
  SubmitButtonText,
} from './styled';
import {Alert} from 'react-native';

export default function CustomPoliceFormScreen({route, navigation}) {
  const [customName, setCustomName] = useState('');
  const [firstPlanType, setFirstPlanType] = useState('');
  const [firstPlanCoverage, setFirstPlanCoverage] = useState('');
  const [firstPlanDescription, setFirstPlanDescription] = useState('');
  const [secondPlanType, setSecondPlanType] = useState('');
  const [secondPlanCoverage, setSecondPlanCoverage] = useState('');
  const [secondPlanDescription, setSecondPlanDescription] = useState('');
  const [thirdPlanType, setThirdPlanType] = useState('');
  const [thirdPlanCoverage, setThirdPlanCoverage] = useState('');
  const [thirdPlanDescription, setThirdPlanDescription] = useState('');

  const submitAlert = data =>
    Alert.alert('Atenção!', 'Cadastro efetuado com sucesso!', [
      {text: 'OK', onPress: () => goToCustomPolicePage(data)},
    ]);

  function goToCustomPolicePage(data) {
    route.params.handleNew(data);
    navigation.navigate('CustomPoliceListScreen');
  }

  function handleSubmit() {
    const obj = {
      id: 4,
      plan: customName,
      planDetails: [
        {
          id: 7,
          type: firstPlanType,
          coverage: firstPlanCoverage,
          description: firstPlanDescription,
        },
        {
          id: 8,
          type: secondPlanType,
          coverage: secondPlanCoverage,
          description: secondPlanDescription,
        },
        {
          id: 9,
          type: thirdPlanType,
          coverage: thirdPlanCoverage,
          description: thirdPlanDescription,
        },
      ],
      estimatedValue: 'R$ 1600,00',
      estimatedPaymentPeriod: 'Mês',
    };

    submitAlert(obj);
  }

  return (
    <Container>
      <Row>
        <Column>
          <Label>Nome customizado*</Label>
          <Input
            onChangeText={text => setCustomName(text)}
            value={customName}
            autofocus={true}
            placeholder={'Nome customizado'}
          />
        </Column>
      </Row>

      <Row>
        <Column>
          <Label>1º Tipo do plano*</Label>
          <Input
            onChangeText={text => setFirstPlanType(text)}
            value={firstPlanType}
            placeholder={'Tipo do plano'}
          />
        </Column>

        <Column>
          <Label>Cobertura*</Label>
          <Input
            onChangeText={text => setFirstPlanCoverage(text)}
            value={firstPlanCoverage}
            placeholder={'Cobertura'}
          />
        </Column>
      </Row>

      <Row>
        <Column>
          <Label>Descrição</Label>
          <Input
            onChangeText={text => setFirstPlanDescription(text)}
            value={firstPlanDescription}
            placeholder={'Descrição'}
          />
        </Column>
      </Row>

      <Row>
        <Column>
          <Label>2º Tipo do plano*</Label>
          <Input
            onChangeText={text => setSecondPlanType(text)}
            value={secondPlanType}
            placeholder={'Tipo do plano'}
          />
        </Column>

        <Column>
          <Label>Cobertura*</Label>
          <Input
            onChangeText={text => setSecondPlanCoverage(text)}
            value={secondPlanCoverage}
            placeholder={'Cobertura'}
          />
        </Column>
      </Row>

      <Row>
        <Column>
          <Label>Descrição</Label>
          <Input
            onChangeText={text => setSecondPlanDescription(text)}
            value={secondPlanDescription}
            placeholder={'Descrição'}
          />
        </Column>
      </Row>

      <Row>
        <Column>
          <Label>3º Tipo do plano*</Label>
          <Input
            onChangeText={text => setThirdPlanType(text)}
            value={thirdPlanType}
            placeholder={'Tipo do plano'}
          />
        </Column>

        <Column>
          <Label>Cobertura*</Label>
          <Input
            onChangeText={text => setThirdPlanCoverage(text)}
            value={thirdPlanCoverage}
            placeholder={'Cobertura'}
          />
        </Column>
      </Row>

      <Row>
        <Column>
          <Label>Descrição</Label>
          <Input
            onChangeText={text => setThirdPlanDescription(text)}
            value={thirdPlanDescription}
            placeholder={'Descrição'}
          />
        </Column>
      </Row>

      <Row>
        <Column>
          <CancelButton
            onPress={() => navigation.navigate('CustomPoliceListScreen')}>
            <CancelButtonText>CANCELAR</CancelButtonText>
          </CancelButton>
        </Column>

        <Column>
          <SubmitButton onPress={() => handleSubmit()}>
            <SubmitButtonText>CADASTRAR</SubmitButtonText>
          </SubmitButton>
        </Column>
      </Row>
    </Container>
  );
}
