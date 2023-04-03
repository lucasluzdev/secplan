import React, {useState} from 'react';
import {View, Modal} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {
  ModalContent,
  ModalLabel,
  ModalContainer,
  ModalButton,
  ModalButtonText,
  ModalInput,
} from './styled';
import {backgroundWhite} from '../../config/colors';

export default function SearchModal({visible, handler}) {
  const [filter, setFilter] = useState([]);
  const [ordenation, setOrdenation] = useState('');

  function handleModalClose() {
    console.log('fechando modal');
    handler();
  }

  function handleSearch(text) {
    console.log(`text to search: ${text}`);
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => handleModalClose()}>
      <ModalContainer>
        <ModalContent>
          <View>
            <ModalLabel>Pesquisar por:</ModalLabel>
            <ModalInput
              maxLength={100}
              onChangeText={text => handleSearch(text)}
              placeholder="Pesquisar por..."
            />

            <ModalLabel>Filtrar por:</ModalLabel>
            <Picker
              itemStyle={{height: 10}}
              style={{backgroundColor: backgroundWhite}}
              selectedValue={filter}
              onValueChange={(itemValue, itemIndex) => setFilter(itemValue)}>
              <Picker.Item label="Nenhum" value="none" />
              <Picker.Item label="Seguro de vida" value="vida" />
              <Picker.Item label="Seguro viagem" value="viagem" />
              <Picker.Item label="Seguro automotivo" value="automotivo" />
              <Picker.Item label="Plano de saúde" value="saude" />
              <Picker.Item label="Seguro residencial" value="residencial" />
              <Picker.Item label="Consórcio" value="consorcio" />
              <Picker.Item label="Capitalização" value="capitalizacao" />
              <Picker.Item label="Previdência privada" value="pp" />
              <Picker.Item label="Seguro para pets" value="pets" />
              <Picker.Item label="Seguro para celular" value="celular" />
            </Picker>

            <ModalLabel>Ordenar por:</ModalLabel>
            <Picker
              itemStyle={{height: 10, backgroundColor: backgroundWhite}}
              style={{backgroundColor: backgroundWhite}}
              selectedValue={ordenation}
              onValueChange={(itemValue, itemIndex) =>
                setOrdenation(itemValue)
              }>
              <Picker.Item label="Data de criação" value="date" />
              <Picker.Item label="Seguro viagem" value="viagem" />
              <Picker.Item label="Seguro automotivo" value="automotivo" />
              <Picker.Item label="Plano de saúde" value="saude" />
              <Picker.Item label="Seguro residencial" value="residencial" />
              <Picker.Item label="Consórcio" value="consorcio" />
              <Picker.Item label="Capitalização" value="capitalizacao" />
              <Picker.Item label="Previdência privada" value="pp" />
              <Picker.Item label="Seguro para pets" value="pets" />
              <Picker.Item label="Seguro para celular" value="celular" />
            </Picker>
          </View>

          <ModalButton onPress={() => handleModalClose()}>
            <ModalButtonText>CONFIRMAR</ModalButtonText>
          </ModalButton>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}
