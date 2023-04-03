import styled from 'styled-components';
import { primary, textWhite, secondaryDark, accent, textDarkGray, backgroundLightGray } from '../../config/colors';

export const CustomListItem = styled.View`
  background-color: ${primary};
  padding: 10px;
  margin: 8px 16px;
  flex: 1;
`;

export const CustomItemTitle = styled.Text`
  color: ${accent};
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
`;

export const CustomItemText = styled.Text`
  color: ${textWhite};
  font-size: 14px;
`;

export const InfoButton = styled.TouchableOpacity`
  background-color: ${backgroundLightGray};
  height: 32px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin: 15px 0px 5px 0px;
  flex: 3;
`;

export const InfoButtonText = styled.Text`
  color: ${textWhite};
  font-size: 12px; ;
`;

export const ContractButton = styled.TouchableOpacity`
  background-color: ${secondaryDark};
  height: 32px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin: 15px 0px 5px 0px;
  flex: 3;
`;

export const ContractButtonText = styled.Text`
  color: ${textWhite};
  font-size: 12px;
`;