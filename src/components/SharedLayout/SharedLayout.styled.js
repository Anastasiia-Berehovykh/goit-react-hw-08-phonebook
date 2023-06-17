import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40%;
  min-width: 600px;
  margin: 20px;
  padding: 20px;
  border: 2px solid blue;
  border-radius: 10px;
  background-color: yellow;
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 10px;
`;

export const Header = styled.header`
  display: flex;
  top: 0;
  padding: 0 10px 0 auto;
  
  > nav {
    display: flex;
  }
`;