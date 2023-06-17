import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserNavConteiner = styled.div`
  display: flex;
  max-width: auto;
  padding: 20px 0px 20px 0px;
`;

export const Link = styled(NavLink)`
  margin: 5px 20px 5px 0;
  padding: 5px 5px;
  border: 3px solid yellow;
  border-radius: 4px;
  text-decoration: none;
  
  
  font-size: 24px;
  font-weight: 700;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: orange;
    background-color: #1565c0;
    box-shadow: 2px 2px 5px #fc894d;
  }

  :hover {
    transform: scale(1.02);
  }
`;

export const LogoutButton = styled.button`
  display: inline-flex;
  
  margin-top: 20px;
  margin-right: auto;
  padding: 8px 8px 8px 8px;
  border-radius: 4px;
  border: none;
  height: 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1, 875;
  text-transform: uppercase;
  background-color: #2196f3;
  color: orange;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    border: 2px solid;
    background-color: red;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: scale(1.01);
  }
`;

export const UserNavText = styled.p`
  display: flex;
  font-weight: 700;
  font-size: 26px;
  margin: 10px 0 0 0;
`;