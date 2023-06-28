import { Container } from 'components/container/container';
import Form from 'components/form/form';
import ContactsList from 'components/contactsList/contactsList';
import Filter from 'components/filter/filter';
import { useDispatch } from 'react-redux';
import { getContactsThunk } from 'redux/contacts/thunkApi';
import { useEffect } from 'react';
import { useContacts } from 'redux/contacts/useContacts';

export const App = () => {
  const { isLoading, error } = useContacts();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactsList />
    </Container>
  );
};
