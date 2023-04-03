import React from 'react';
import {Column, Row} from '../../pages/styled';
import {
  CustomItemText,
  CustomListItem,
  CustomItemTitle,
  InfoButton,
  InfoButtonText,
} from './styled';
import {Image} from 'react-native';
import logo from '../../assets/logos/sulamerica50.png';

export default function SecurateListItem({
  id,
  holder,
  branches,
  plans,
  states,
  navigation,
}) {
  const images = [
    require('../../assets/logos/sulamerica.png'),
    require('../../assets/logos/bradesco.png'),
    require('../../assets/logos/unimed.png'),
    require('../../assets/logos/allianz.png'),
  ];
  const holderBranches = branches.join(', ');
  const statesBranches = states.join(', ');

  function handleInformation() {
    navigation.navigate('SecurateDetailsScreen', {
      data: {id, holder, branches, plans, states, navigation},
    });
  }

  return (
    <CustomListItem style={{width: 380}}>
      <Row
        style={{
          marginBottom: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <CustomItemTitle>{holder}</CustomItemTitle>
        <Image
          source={images[id - 1]}
          style={{width: 40, height: 40, resizeMode: 'stretch'}}
        />
      </Row>

      <Row>
        <Column>
          <CustomItemText>Ramos de atuação: {holderBranches}</CustomItemText>
        </Column>
      </Row>

      <Row>
        <Column>
          <CustomItemText>Estados de atuação: {statesBranches}</CustomItemText>
        </Column>
      </Row>

      <Row>
        <InfoButton onPress={() => handleInformation()}>
          <InfoButtonText>MAIS INFO</InfoButtonText>
        </InfoButton>
      </Row>
    </CustomListItem>
  );
}
