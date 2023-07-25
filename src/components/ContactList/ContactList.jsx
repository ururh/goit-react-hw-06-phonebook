import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove } from '../../redux/sliceContact'; 
import { ButtonDelete, ItemContact, List } from './ContactList.module';

export const ContactList = ({ listContact }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <List>
      {listContact.map((contact) => (
        <ItemContact key={contact.id}>
          {contact.name}: {contact.number}
          <ButtonDelete
            type="button"
            onClick={() => handleRemove(contact.id)}
          >
            Delete
          </ButtonDelete>
        </ItemContact>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  listContact: PropTypes.array.isRequired,
};
