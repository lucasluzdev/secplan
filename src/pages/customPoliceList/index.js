import React, {useState} from 'react';
import {View, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {Container, FloatingActionButton} from '../styled';
import {textWhite} from '../../config/colors';
import CustomPoliceListItem from '../../components/CustomPoliceListItem';

const data = require('../../config/mock.json');

export default function CustomPoliceListScreen({route, navigation}) {
  let plus;
  let arr = data.custom;

  function handleNew(data) {
    console.log('plus', data);
    const pop = arr.pop();
    arr.push(data);
    // console.log('arr', arr);
  }

  function handleForm() {
    navigation.navigate('CustomPoliceFormScreen', {
      data: {
        id: data.user[0].id,
      },
      handleNew: handleNew,
    });
  }

  const renderItem = ({item}) => (
    <CustomPoliceListItem
      id={item.id}
      plan={item.plan}
      planDetails={item.planDetails}
      estimatedValue={item.estimatedValue}
      estimatedPaymentPeriod={item.estimatedPaymentPeriod}
      navigation={navigation}
    />
  );

  return (
    <Container>
      <View>
        <FlatList
          data={arr}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={plus}
        />
      </View>

      <FloatingActionButton onPress={() => handleForm()}>
        <Icon name="plus" size={30} color={textWhite} />
      </FloatingActionButton>
    </Container>
  );
}
