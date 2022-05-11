import { useState } from 'react';
import { Form, Label, Input, Button } from '.';

const initialContact = {
  name: '',
  number: '',
};
export const ContactEditor = ({ onSubmit }) => {
  const [contact, setContact] = useState(initialContact);

  const handleChange = evt => {
    setContact({ ...contact, [evt.target.name]: evt.target.value.trim() });
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit(contact);
    setContact(initialContact);
  };

  return (
    <>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Label htmlFor={contact.name}>
          Name
          <Input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor={contact.number}>
          Phone
          <Input
            type="tel"
            name="number"
            value={contact.number}
            placeholder="Enter phone"
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
};
export default ContactEditor;
