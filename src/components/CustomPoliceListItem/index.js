import React from 'react';
import {CustomItemText, CustomListItem, CustomItemTitle} from './styled';
import {Pressable} from 'react-native';

export default function CustomPoliceListItem({
  id,
  plan,
  planDetails,
  estimatedValue,
  estimatedPaymentPeriod,
  navigation,
}) {
  function handleDetails() {
    navigation.navigate('CustomPoliceDetailsScreen', {
      data: {id, plan, planDetails, estimatedValue, estimatedPaymentPeriod},
    });
  }

  return (
    <CustomListItem>
      <Pressable onPress={() => handleDetails()}>
        <CustomItemTitle>{plan}</CustomItemTitle>
        <CustomItemText>
          Valor estimado do seguro: {estimatedValue} / {estimatedPaymentPeriod}
        </CustomItemText>
      </Pressable>
    </CustomListItem>
  );
}
