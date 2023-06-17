import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 700;
  font-size: 20px;
  line-height: 1, 875;
  padding: 20px, 5px;
  border: 2px solid #32CD32;
  border-radius: 10px;
  margin: 0px, 0, 0, 20px;
  background-color: #ADFF2F;
`;

export const FilterInput = styled.input`
  font: inherit;
  padding: 5px;
  margin: 10px 0 10px 8px;
  max-width: 80%;
  border: 2px solid #32CD32;
  border-radius: 8px;
  
`;

export const FilterDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  
`;

export const FilterTitle = styled.h2`
  margin-top: 10px;
  margin-left: 20px;
  font-size: 24px;
`;