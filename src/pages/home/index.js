import React from 'react';
import {View, FlatList, Text} from 'react-native';

import {Container} from '../styled';
import SecureListItem from '../../components/SecureListItem';
import HorizontalSecurateListItem from '../../components/HorizontalSecurateListItem';
import SecurateListItem from '../../components/SecurateListItem';

const data = require('../../config/mock.json');

export default function HomeScreen({navigation}) {
  const renderItem = ({item}) => (
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

  const renderHorizontalItem = ({item}) => (
    <HorizontalSecurateListItem
      id={item.id}
      holder={item.holder}
      img={item.img}
      branches={item.branches}
      plans={item.plans}
      states={item.states}
      navigation={navigation}
    />
  );

  return (
    <Container>
      
      
      <Text style={{color: '#fff', fontSize: 24, padding: 5}}>SEGURADORAS</Text>
      <View style={{flex: 1}}>
        <FlatList
          data={data.securates}
          renderItem={renderHorizontalItem}
          horizontal={true}
          keyExtractor={item => item.id}
        />
      </View>

      <Text style={{color: '#fff', fontSize: 24, padding: 5, marginTop: 30}}>SEGUROS EM DESTAQUE</Text>
      <View style={{flex: 5}}>
        <FlatList
          data={data.secures}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      
    </Container>
  );
}
