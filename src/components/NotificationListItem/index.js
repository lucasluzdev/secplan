import React from 'react';
import { Row } from "../../pages/styled";
import { CustomItemText, CustomListItem, CustomItemTitle } from "./styled";
import { View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function NoificationListItem({ id, title, description, img, checked, redirectTo, navigation }) {

  function handleDetails() {
    navigation.navigate('NotificationDetailsScreen', {data: {id, title, description, img, checked, redirectTo}})
  }

  return (
    <CustomListItem>
      <Pressable onPress={() => handleDetails(id)}>
        <Row style={{ marginBottom: 20 }}>
          <View style={{ flex: 10 }}>
            <CustomItemTitle>{title}</CustomItemTitle>
          </View>
          <View style={{ flex: 1 }}>
            <Icon name='bell' size={20} color={"#ba0"} />
          </View>
        </Row>
        <CustomItemText>{description}</CustomItemText>
      </Pressable>
    </CustomListItem>
  )
}