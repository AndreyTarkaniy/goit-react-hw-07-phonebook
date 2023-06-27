import { useDispatch, useSelector } from 'react-redux';

import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from './selectors';
import {
  deleteContactsThunk,
  addContactsThunk,
} from 'redux/contacts/contactsSlice';
// import * as actions from 'redux/contacts/contactsSlice';

export const useContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const addContact = newContact => {
    dispatch(addContactsThunk(newContact));
  };

  const deleteContact = id => {
    dispatch(deleteContactsThunk(id));
  };
  //   const changeFilter = value => {
  //     dispatch(actions.changeFilter(value));
  //   };

  return { contacts, filter, isLoading, error, addContact, deleteContact };
  // return { contacts, filter, addContact, deleteContact, changeFilter };
};
