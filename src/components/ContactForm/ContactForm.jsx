import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from 'redux/sliceContact';
import { AddButton, FormInfo, Input, LabelText } from './ContactForm.module';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    name === 'name' ? setName(value) : setNumber(value);
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  const contacts = useSelector(state => state.contacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingContact = contacts.find(
      (value) => value.name.toLowerCase() === name.toLowerCase()
    );
    if (existingContact) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(add({ name, number }));
    }
    reset();
  };

  return (
    <FormInfo onSubmit={handleSubmit}>
      
        <LabelText>
          Name
        </LabelText>
        <Input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <LabelText>
          Number
        </LabelText>
        <Input
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <AddButton type="submit">
          Add contact
        </AddButton>
    </FormInfo>
  );
};