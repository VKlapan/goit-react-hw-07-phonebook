import PropTypes from 'prop-types';
import { React } from 'react';

import ContactItem from './ContactItem/ContactItem';
import { ContactListBlock } from './ContactList.styled';

const ContactList = ({ contacts }) => {
  return (
    <ContactListBlock>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ContactListBlock>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
