import React, {useState} from 'react';
import {View, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {Container, FloatingActionButton} from '../styled';
import {textWhite} from '../../config/colors';
import SecurateListItem from '../../components/SecurateListItem';
import SearchModal from '../../components/SearchModal';

import logo from '../../assets/logos/sulamerica50.png';

const data = require('../../config/mock.json');

export default function SecurateListScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  function handleModal() {
    setModalVisible(!modalVisible);
  }

  const renderItem = ({item}) => (
    <SecurateListItem
      id={item.id}
      holder={item.holder}
      branches={item.branches}
      plans={item.plans}
      states={item.states}
      navigation={navigation}
    />
  );

  return (
    <Container>
      <View>
        <FlatList
          data={data.securates}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <FloatingActionButton onPress={() => handleModal()}>
        <Icon name="search" size={30} color={textWhite} />
      </FloatingActionButton>

      <SearchModal visible={modalVisible} handler={handleModal} />
    </Container>
  );
}
