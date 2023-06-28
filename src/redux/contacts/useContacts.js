import { useDispatch, useSelector } from 'react-redux';

import {
  selectContacts,
  selectError,
  selectFilter,
  selectFilterName,
  selectIsLoading,
} from './selectors';
import { deleteContactsThunk, addContactsThunk } from 'redux/contacts/thunkApi';
import * as actions from 'redux/contacts/filterSlice';

export const useContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contactsNameList = useSelector(selectFilterName);

  const addContact = newContact => {
    dispatch(addContactsThunk(newContact));
  };
  const deleteContact = id => {
    dispatch(deleteContactsThunk(id));
  };
  const changeFilter = value => {
    dispatch(actions.changeFilterName(value));
  };

  return {
    contacts,
    filter,
    isLoading,
    error,
    contactsNameList,
    addContact,
    deleteContact,
    changeFilter,
  };
};
