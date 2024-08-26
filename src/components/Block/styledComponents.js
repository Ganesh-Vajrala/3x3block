import styled from 'styled-components';

export const MatrixBox = styled.button`
  background-color: ${props => 
    props.deactivated ? 'orange' : 
    props.filled ? 'green' : 'transparent'};
  border 1px solid #000;
  height:0;
  padding-bottom:100%;

  &:disabled {
    cursor: not-allowed;
  }
`;
