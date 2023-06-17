import styled from 'styled-components';

export const ButtonFilter = styled.button`
display: inline-flex;
justify-content: center;
width: 130px;
    padding: 3px 3px;
    border-radius: 8px;
    border: solid 2px #32CD32;
    font-size:22px;
    font-weight: 700;
    cursor: pointer;
    background-color: #00FFFF;

    :hover {
    background-color: #1565c0;
    color: orange;
    transform: scale(1.02);
  }
  
  :active {
    border: solid 2px red;
    
    color: orange;
    box-shadow: 2px 2px 5px #fc894d;
  }

`;