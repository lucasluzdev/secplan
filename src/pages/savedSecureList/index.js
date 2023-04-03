import React from 'react';
import {View, FlatList} from 'react-native';

import {Container} from '../styled';
import SavedListItem from '../../components/SavedListItem';

const data = require('../../config/mock.json');

export default function SavedSecureListScreen({navigation}) {
  const renderItem = ({item}) => (
    <SavedListItem
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
          data={data.saved}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </Container>
  );
}
