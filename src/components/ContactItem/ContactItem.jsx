import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { ContactItemElement, ItemContent } from './ContactItem.styled';
import { deleteContact } from 'redux/contacts/contactsOperations';

const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  return (
    <ContactItemElement>
      <ItemContent>{name}</ItemContent>
      <ItemContent>{number}</ItemContent>
      <button
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        {' '}
        DELETE
      </button>
    </ContactItemElement>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
