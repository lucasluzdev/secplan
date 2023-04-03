import styled from 'styled-components';
import { primaryDark } from '../../config/colors';

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
