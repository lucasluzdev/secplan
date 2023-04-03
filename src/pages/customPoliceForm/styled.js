import styled from 'styled-components';
import { textWhite, backgroundWhite, primary, accent } from '../../config/colors';

export const Label = styled.Text`
  font-size: 16px;
  color: ${textWhite};
  margin: 6px 0px;
`;

export const Input = styled.TextInput`
  height: 30px;
  font-size: 18px;
  width: 100%;
  color: #000;
  border: 0.4px solid #000;
  border-radius: 30;
  padding: 0px 8px;
  background-color: ${backgroundWhite};
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: ${primary};
  width: 100%;
  height: 40px;
  border-radius: 30;
  align-items: center;
  justify-content: center;
  margin: 15px 0px;
`;

export const SubmitButtonText = styled.Text`
  color: ${textWhite};
  font-size: 18px; ;
`;

export const CancelButton = styled.TouchableOpacity`
  background-color: ${accent};
  width: 100%;
  height: 40px;
  border-radius: 30;
  align-items: center;
  justify-content: center;
  margin: 15px 0px;
`;

export const CancelButtonText = styled.Text`
  color: ${textWhite};
  font-size: 20px;
`;