import PropTypes from 'prop-types';
import { selectFilterStatus, selectFilterValue } from 'redux/selectors';

import { useSelector } from 'react-redux';
import { ContactUl } from './ContactList.styled';
import { useGetContactsQuery } from 'redux/contactsSliceApi';
import Contact from 'components/Contact/Contact';
import { localStrg } from 'helpers/localStrg';

export default function ContactList() {
  const filterValue = useSelector(selectFilterValue);
  const filterStatus = useSelector(selectFilterStatus);
  
  const RENDER_STORAGE_KEY = 'contact-for-render-state';

  const { data: contactsBack, error, isLoading } = useGetContactsQuery();
  

  updateLocalStorage();

  

  let getVisibleContacts = (contacts, filter, status) => {
    let localContact = localStrg.load(RENDER_STORAGE_KEY);
    if (contacts)
      switch (status) {
        case 'personal':
          let localPersonalContact = localContact
            .filter(contact => contact.personal === true)
            .map(e => e.name);

          const see = (contactsBack, contactsLocal, comElement = []) => {
            contactsBack.forEach(element => {
              if (contactsLocal.includes(element.name)) {
                comElement.push(element);
              }
            });
            return comElement;
          };
          let info = see(contacts, localPersonalContact);

          

          return info.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          );

        case 'others':
          let localOtherContact = localContact
            .filter(contact => contact.personal === false)
            .map(e => e.name);
          
          const other = (contactsBack, contactsLocal, comElement = []) => {
            contactsBack.forEach(element => {
              if (contactsLocal.includes(element.name)) {
                comElement.push(element);
              }
            });
            return comElement;
          };
          let otherInfo = other(contacts, localOtherContact);

          

          return otherInfo.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          );

        default:
          return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          );
      }
  };

  function updateLocalStorage() {
    if (!localStrg.load(RENDER_STORAGE_KEY)) {
      addContactToLocal();
    } else {
      editContactToLocal();
    }
  }

  function addContactToLocal() {
    localStrg.save(RENDER_STORAGE_KEY, []);

    let currentContactsState = localStrg.load(RENDER_STORAGE_KEY);
    const contactsFromBack = contactsBack;

    localStrg.save(RENDER_STORAGE_KEY, contactsFromBack);

    currentContactsState = localStrg.load(RENDER_STORAGE_KEY);
    if (currentContactsState)
      currentContactsState.map(contact => (contact.personal = true));
    localStrg.save(RENDER_STORAGE_KEY, currentContactsState);
  }

  function editContactToLocal() {
    let localContact = localStrg.load(RENDER_STORAGE_KEY);
    const contactsFromBack = contactsBack;
    let unicElements = contacts => {
      if (contacts)
        contacts.forEach(element => {
          const newElem = localContact.map(e => e.id);
          
          if (!newElem.includes(element.id)) {
           
            unicElements = element;
          }
        });
      return unicElements;
    };

    const newContact = unicElements(contactsFromBack);

    const isObject = obj => {
      return typeof obj === 'object' && obj !== null;
      
    };

    

    if (isObject(newContact)) {
      if (!localContact.find(contact => contact.name === newContact.name));
      
      localContact.push(newContact);
    }

   
    localStrg.save(RENDER_STORAGE_KEY, localContact);

    let arr = localStrg.load(RENDER_STORAGE_KEY);
    const table = {};
    const res = arr.filter(({ name }) => !table[name] && (table[name] = 1));
    
    localStrg.save(RENDER_STORAGE_KEY, res);
  }

  let visibleContacts;
  if (contactsBack) {
    visibleContacts = getVisibleContacts(
      contactsBack,
      filterValue,
      filterStatus
    ).sort((a, b) => a.name.localeCompare(b.name));
  }

  

  return (
    <>
      {error && <p>Error loading, please try again </p>}

      {isLoading ? (
        <b>Loading...</b>
      ) : (
        <ContactUl>
          {visibleContacts.map(({ id, name, number }) => (
            <Contact key={id} id={id} name={name} number={number} />
          ))}
        </ContactUl>
      )}
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};