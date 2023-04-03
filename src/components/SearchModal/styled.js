import styled from 'styled-components';
import { accent, textWhite, secondaryDark, backgroundWhite, backgroundDark } from '../../config/colors';


export const ModalButton = styled.Pressable`
  borderRadius: 20px;
  padding: 15px;
  elevation: 2;
  backgroundColor: ${accent};
  margin-top: 40px;
`;

export const ModalButtonText = styled.Text`
  color: ${textWhite};
  font-weight: bold;
  text-align: center;
  font-size: 14;
`;

export const ModalLabel = styled.Text`
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${textWhite};
    font-size: 16;
    font-weight: bold;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const ModalContent = styled.View`
  margin: 20px;
  background-color: ${secondaryDark};
  border-radius: 20px;
  padding: 15px;
  align-items: center;
  shadow-color: #000;
  width: 320px;
  shadow-opacity: 0.25px;
  shadow-radius: 4px;
  elevation: 5
`;

export const ModalInput = styled.TextInput`
  background-color: ${backgroundWhite};
  height: 40px;
  width: 300px;
  padding: 10px;
  border-width: 2px;
  border-color: ${backgroundDark};
`;