import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  margin: 20px 0 0 0;
  padding: 20px;
  
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #2196f3;

`;

export const ContainerTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0 0 20px 0;
  font-weight: 700;
  font-size: 26px;
  line-height: 1, 875;
  color: yellow;
`;

export const ContainerText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin: 0 0 20px 0; */
  font-weight: 700;
  font-size: 24px;
  line-height: 1, 875;
`;