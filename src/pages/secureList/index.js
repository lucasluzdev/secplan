import React, { useState } from 'react';
import {
  View,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, FloatingActionButton } from '../styled';
import { textWhite } from '../../config/colors';
import SecureListItem from '../../components/SecureListItem';
import SearchModal from '../../components/SearchModal';

const data = require('../../config/mock.json');

export default function SecureListScreen({navigation}) {

  const [modalVisible, setModalVisible] = useState(false);

  function handleModal() {
    setModalVisible(!modalVisible);
  }

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
      <View>
        <FlatList
          data={data.secures}
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
  );
};