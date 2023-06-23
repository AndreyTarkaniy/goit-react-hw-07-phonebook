import { useDispatch, useSelector } from 'react-redux';

import { selectContacts, selectFilter } from './selectors';
import * as actions from 'redux/contacts/contactsSlice';

export const useContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const addContact = newContact => {
    dispatch(actions.addContact(newContact));
  };

  const deleteContact = id => {
    dispatch(actions.deleteContact(id));
  };
  const changeFilter = value => {
    dispatch(actions.changeFilter(value));
  };

  return { contacts, filter, addContact, deleteContact, changeFilter };
};
