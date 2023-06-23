// import React, { useState } from 'react';
// import { nanoid } from 'nanoid';
import { Container } from 'components/container/container';
import Form from 'components/form/form';
import ContactsList from 'components/contactsList/contactsList';
import Filter from 'components/filter/filter';
// import { useContacts } from 'redux/contacts/useContacts';
// import ContactsData from 'components/data/contacts.json';
// import { useSelector } from 'react-redux';
// import { selectContacts, selectFilter } from 'redux/contacts/selectors';

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
};

// export const App = () => {
//   const [contacts, setContacts] = useState(
//     () =>
//       JSON.parse(window.localStorage.getItem('contactsList')) ?? ContactsData
//   );
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     if (setContacts !== contacts) {
//       window.localStorage.setItem('contactsList', JSON.stringify(contacts));
//     }
//   }, [contacts]);

//   const addContact = contactDataForm => {
//     const { name, number } = contactDataForm;

//     const existContact = contacts.find(
//       contact => name.toLowerCase() === contact.name.toLowerCase()
//     );

//     if (existContact) {
//       alert(`${name} is already in contacts.`);
//       return;
//     }

//     const newContact = {
//       id: nanoid(),
//       name: name,
//       number: number,
//     };

//     setContacts(prevContacts => [newContact, ...prevContacts]);
//   };

//   const changeFilter = event => {
//     setFilter(event.target.value);
//   };

//   const filterContact = () => {
//     const normalizeFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizeFilter)
//     );
//   };

//   const deleteContact = contactId => {
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contactId !== contact.id)
//     );
//   };

//   const contactsFilter = filterContact();

//   return (
//     <Container>
//       <h1>Phonebook</h1>
//       <Form onSubmitForm={addContact} />

//       <h2>Contacts</h2>
//       <Filter value={filter} onChangeFilter={changeFilter} />
//       <ContactsList contacts={contactsFilter} onDelete={deleteContact} />
//     </Container>
//   );
// };
