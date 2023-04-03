import React, { useState } from 'react';
import {
  View,
  FlatList,
} from 'react-native';

import NotificationListItem from '../../components/NotificationListItem'
import { Container } from '../styled';

const data = require('../../config/mock.json');

export default function NotificationListScreen({navigation}) {

  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => (
    <NotificationListItem
      id={item.id}
      title={item.title}
      description={item.description}
      img={item.img}
      checked={item.checked}
      redirectTo={item.redirectTo}
      navigation={navigation}
    />
  );

  return (
    <Container>
      <View>
        <FlatList
          data={data.notifications}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

    </Container>
  );
};