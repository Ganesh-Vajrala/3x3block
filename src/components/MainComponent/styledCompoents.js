import styled from 'styled-components';
export const MatrixContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 5px;
  justify-content: center;
  margin-top: 20px;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height:100vh;
    width:100vw;
    justify-content:center;
`;