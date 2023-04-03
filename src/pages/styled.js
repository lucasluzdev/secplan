import styled from 'styled-components';
import {primaryDark, accent} from '../config/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${primaryDark};
`;

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
`;

export const Column = styled.View`
  flex: 1;
  flex-direction: column;
  margin: 0px 10px;
`;

export const FloatingActionButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  width: 70px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  height: 70px;
  background-color: ${accent};
  border-radius: 100px;
`;
