import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import * as contactsOperations from '../redux/contacts/contactsOperations';
import * as contactsSelectors from '../redux/contacts/contactsSelectors';

const App = () => {
  const styleDefault = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: '#010101',
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(contactsSelectors.getFilter);
  const isLoading = useSelector(contactsSelectors.getIsLoading);
  const error = useSelector(contactsSelectors.getError);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div style={styleDefault}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <p>Oops, something went wrong. Error is: "{error}"</p>}
      {!isLoading && contacts.length > 0 && (
        <ContactList contacts={visibleContacts} />
      )}
    </div>
  );
};

export default App;
