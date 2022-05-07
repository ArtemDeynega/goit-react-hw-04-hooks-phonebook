import { useState, useEffect } from 'react';
import shortid from 'shortid';
import { toast, ToastContainer } from 'react-toastify';
import { SectionTitle } from 'components/Title';
import { ContactEditor } from 'components/ContactEditor';
import { ContactList } from 'components/ContactList';

import { GlobalStyles } from 'GlobalStyles/GlobalStyles';

const initalState = {
  contacts: [],
  filter: '',
};
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
      setContacts(contact);
    }
  }, []);

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

// export class App extends Component {
//   state = {
//     ...initalState,
//   };
//   #localStorageKey = 'contacts';
//   componentDidMount() {
//     const localStorageContacts = localStorage.getItem(this.#localStorageKey);

//     if (localStorageContacts) {
//       const contacts = JSON.parse(localStorageContacts);
//       this.setState({ contacts });
//     }
//   }

//   componentDidUpdate(preProps, prevState) {
//     const { contacts } = this.state;
//     if (contacts !== prevState.contacts) {
//       localStorage.setItem(this.#localStorageKey, JSON.stringify(contacts));
//     }
//   }
//   onAddContact = ({ name, number }) => {
//     const { contacts } = this.state;
//     const newContact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };

//     contacts.find(
//       contact => newContact.name.toLowerCase() === contact.name.toLowerCase()
//     )
// ? toast.warn('Такой пользователь уже есть 🤪 ', {
//     position: 'top-center',
//     autoClose: 4000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//   })
//       : this.setState(({ contacts }) => ({
//           contacts: [newContact, ...contacts],
//         }));
//   };
//   onDeleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
// toast.success('Контакт удален 👌', {
//   position: 'top-center',
//   autoClose: 1000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
// });
//   };
//   changeFilter = evt => {
//     const { value } = evt.target;
//     this.setState({ filter: value });
//   };

//   getVisibleContact = () => {
//     const { contacts, filter } = this.state;
//     const normalizeFilter = filter.toLowerCase();

//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizeFilter)
//     );
//   };

//   render() {
//     const { filter } = this.state;

//     const visibleContact = this.getVisibleContact();

//     return (
//       <>
//   <SectionTitle title="Phonebook">
//     <ContactEditor onSubmit={this.onAddContact} />
//   </SectionTitle>
//   <SectionTitle title="Contacts">
//     <ContactList
//       contacts={visibleContact}
//       onDelete={this.onDeleteContact}
//       value={filter}
//       onChangeFiter={this.changeFilter}
//     />
//   </SectionTitle>
//   <GlobalStyles />
//   <ToastContainer />
// </>
//     );
//   }
// }
