import { useState, useEffect } from 'react';
import shortid from 'shortid';
import { toast, ToastContainer } from 'react-toastify';
import { SectionTitle } from 'components/Title';
import { ContactEditor } from 'components/ContactEditor';
import { ContactList } from 'components/ContactList';

import { GlobalStyles } from 'GlobalStyles/GlobalStyles';

const initialContacts = {
  id: '',
  name: '',
  number: '',
};
const localStorageKey = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState([initialContacts]);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    const localStorageContacts = localStorage.getItem(localStorageKey);
    if (localStorageContacts) {
      const contact = JSON.parse(localStorageContacts);
      console.log('contact', contact);
      setContacts(contact);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    contacts.find(
      contact =>
        newContact.name.toLowerCase().trim() ===
        contact.name.toLowerCase().trim()
    )
      ? toast.warn('Такой пользователь уже есть 🤪 ', {
          position: 'top-center',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      : setContacts(prevContacts => [...prevContacts, newContact]);
  };
  const onDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
    toast.success('Контакт удален 👌', {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const changeFilter = evt => {
    const { value } = evt.target;
    setFilter(value);
  };

  const getVisibleContact = contacts.filter(({ name }) =>
    name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  console.log('getVisibleContact', getVisibleContact);

  return (
    <>
      <SectionTitle title="Phonebook">
        <ContactEditor onSubmit={onAddContact} />
      </SectionTitle>
      <SectionTitle title="Contacts">
        <ContactList
          contacts={getVisibleContact}
          onDelete={onDeleteContact}
          value={filter}
          onChangeFiter={changeFilter}
        />
      </SectionTitle>
      <GlobalStyles />
      <ToastContainer />
    </>
  );
};

export default App;
