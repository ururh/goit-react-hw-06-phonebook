import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useSelector } from 'react-redux';
import { Container } from './App.module';
import { ContactForm } from 'components/ContactForm/ContactForm';

export const App = () => {
  const filtered = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  const filterContact = e => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
    return filteredContacts;
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm/>

      <h2>Contacts</h2>
      <Filter />
      <ContactList listContact={filterContact()} />
    </Container>
  );
};
