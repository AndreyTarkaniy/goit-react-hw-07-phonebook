import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, getContacts } from './contactsApi';

export const getContactsThunk = createAsyncThunk(
  'contacts/getAllContacts',
  getContacts
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContacts',
  addContacts
);
export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContacts',
  deleteContacts
);
