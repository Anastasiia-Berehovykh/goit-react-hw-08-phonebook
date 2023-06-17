import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';
import { UserNavConteiner, UserNavText } from './UserNav.styled';
import { NavLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

export const UserNav = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  return (
    <>
      <UserNavText>
        Welcome, {user.name}! Email: {user.email}
      </UserNavText>

      <UserNavConteiner>
        <Button
          as={NavLink}
          to="/"
          color="blue"
          colorScheme="messenger"
          borderWidth="2px"
          borderColor="messenger"
          type="button"
          mr="20px"
          fontSize={26}
          bg='#00FF7F'
          _hover={{
            color: 'red.500',
            borderWidth: '3px',
            borderColor: 'red',
          }}
          _active={{
            bg: 'tomato',
            color: 'teal.500',
          }}
          _focus={{
            bg: 'messenger',
            color: 'red.500',
            borderWidth: '2px',
            borderColor: 'red',
          }}
          variant="outline"
        >
          Phonebook
        </Button>
        <Button
          as={NavLink}
          to="/newcontact"
          color="blue"
          colorScheme="messenger"
          borderWidth="2px"
          borderColor="messenger"
          mr="20px"
          fontSize={26}
          bg='#00FF7F'
          _hover={{
            color: 'red.500',
            borderWidth: '3px',
            borderColor: 'red',
          }}
          _focus={{
            bg: 'messenger',
            color: 'red.500',
            borderWidth: '2px',
            borderColor: 'red',
          }}
          _selected={{
            bg: 'tomato',
            color: 'red',
          }}
          variant="outline"
        >
          New Contact
        </Button>

        <Button
          as={NavLink}
          to="/login"
          color="blue"
          colorScheme="messenger"
          borderWidth="2px"
          borderColor="blue"
          fontSize={26}
          
          onClick={() => dispatch(logOut())}
          type="button"
          bg='#00FF7F'
          _hover={{
            color: 'red.500',
            borderWidth: '3px',
            borderColor: 'red',
          }}
          _focus={{
            bg: 'messenger',
            color: 'red.500',
            borderWidth: '2px',
            borderColor: 'red',
          }}
          _selected={{
            bg: 'tomato',
            color: 'yellow',
          }}
        >
          Logout
        </Button>
      </UserNavConteiner>
    </>
  );
};