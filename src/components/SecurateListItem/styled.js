import styled from 'styled-components';
import {
  primary,
  secondary,
  textWhite,
  secondaryDark,
  accent,
} from '../../config/colors';

export const CustomListItem = styled.View`
  background-color: ${primary};
  padding: 10px;
  margin: 8px 0px;
  flex: 1;
  flex-flow: column no-wrap;
`;

export const CustomItemTitle = styled.Text`
  color: ${secondary};
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  padding: 5px;
`;

export const CustomItemText = styled.Text`
  color: ${textWhite};
  font-size: 12px;
`;

export const InfoButton = styled.TouchableOpacity`
  background-color: ${accent};
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
