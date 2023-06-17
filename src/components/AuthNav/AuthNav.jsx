import { NavLink } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <>
      <ButtonGroup gap="4"
       p="20px 0 20px 0"
       
       >
        <Button
          as={NavLink}
          to="/welcome"
          end
          colorScheme="messenger"
          borderWidth="2px"
          borderColor="messenger"
          fontSize={26}
          bg='#00FF7F'
          
          _hover={{
            bg: 'messenger',
            color: 'red.500',
            borderWidth: '2px',
            borderColor: 'red',
          }}
          _active={{
            
            color: 'teal.500',
          }}
         
          _selected={{
            bg: 'tomato',
            color: 'white',
          }}
          variant="outline"
        >
          Welcome
        </Button>
        <Button
          as={NavLink}
          to="/register"
          colorScheme="messenger"
          borderWidth="2px"
          borderColor="messenger"
          bg='#00FF7F'
          fontSize={26}
       
          _hover={{
            bg: 'messenger',
            color: 'red.500',
            borderWidth: '2px',
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
          Register
        </Button>
        <Button
          as={NavLink}
          to="/login"
          colorScheme="messenger"
          borderWidth="2px"
          borderColor="messenger"
          bg='#00FF7F'
          fontSize={26}
       
          _hover={{
            bg: 'messenger',
            color: 'red.500',
            borderWidth: '2px',
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
          Log in
        </Button>
      </ButtonGroup>
    </>
  );
};