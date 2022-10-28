import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactAddForm, LableForm } from './ContactForm.styled';
import { getContacts } from 'redux/contacts/contactsSelectors';

import { addContact } from 'redux/contacts/contactsOperations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('incorrect input name');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    console.log('ADD');

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <div>
      ContactForm
      <ContactAddForm onSubmit={handleSubmit}>
        <LableForm>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </LableForm>
        <LableForm>
          Phone number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </LableForm>

        <button type="submit">Add contact</button>
      </ContactAddForm>
    </div>
  );
};

export default ContactForm;
