import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  Alert,
} from 'react-native';

import { Container, FloatingActionButton, Row } from '../styled';
import { accent, accentDark, secondary, secondaryDark, textWhite } from '../../config/colors';

import SearchModal from '../../components/SearchModal';

import Icon from 'react-native-vector-icons/FontAwesome';
import SecureListItem from '../../components/SecureListItem';

import logo from '../../assets/logos/sulamerica50.png';


export default function SecureDetailsScreen({ route, navigation }) {

  const { id, holder, branches, plans, states } = route.params.data;

  const [modalVisible, setModalVisible] = useState(false);

  function handleModal() {
    setModalVisible(!modalVisible);
  }

  const holderBranches = branches.join(', ');
  const statesBranches = states.join(', ');

  const renderItem = ({ item }) => (
    <SecureListItem
      id={item.id}
      plan={item.plan}
      holder={item.holder}
      description={item.description}
      value={item.value}
      paymentPeriod={item.paymentPeriod}
      link={item.link}
      contact={item.contact}
      navigation={navigation}
    />
  );

  return (
    <Container>
      <View style={{ backgroundColor: accent, flex: 1, padding: 10 }}>
        <Row>
          <Image source={logo} style={{width: 40, height: 40, resizeMode: 'stretch'}} />
          <Text style={{ fontSize: 17, color: textWhite, fontWeight: 'bold', marginLeft: 15 }}>{holder}</Text>
        </Row>
        <Text style={{ fontSize: 13, color: textWhite }}>Ramos de atuação: {holderBranches}</Text>
        <Text style={{ fontSize: 13, color: textWhite }}>Estados de atuação: {statesBranches}</Text>
      </View>
      <View style={{ flex: 4 }}>
        <FlatList
          data={plans}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <FloatingActionButton
        onPress={() => handleModal()}
      >
        <Icon name='search' size={30} color={textWhite} />
      </FloatingActionButton>

      <SearchModal visible={modalVisible} handler={handleModal} />
    </Container>
  )
};