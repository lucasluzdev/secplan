import React from 'react';
import {Row} from '../../pages/styled';
import {CustomListItem} from './styled';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {accent} from '../../config/colors';

export default function HorizontalSecurateListItem({
  id,
  holder,
  img,
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

  function handleInformation() {
    navigation.navigate('SecurateDetailsScreen', {
      data: {id, holder, img, branches, plans, states, navigation},
    });
  }

  return (
    <CustomListItem>
      <TouchableOpacity
        onPress={() => handleInformation()}
        style={{backgroundColor: '#fff', padding: 10}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <Image
            source={images[id - 1]}
            style={{
              width: 40,
              height: 40,
              resizeMode: 'stretch',
              alignSelf: 'center',
            }}
          />
          <Text style={{color: accent, width: 150, textAlign: 'center'}}>
            {holder}
          </Text>
        </View>
      </TouchableOpacity>
    </CustomListItem>
  );
}
