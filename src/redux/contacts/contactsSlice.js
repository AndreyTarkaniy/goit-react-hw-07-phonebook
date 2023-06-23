import { createSlice, nanoid } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import ContactsData from 'components/data/contacts.json';

const contactsSlice = createSlice({
  name: 'contatcs',
  initialState: { contacts: ContactsData, filter: '' },
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
      prepare: newConact => ({
        payload: { ...newConact, id: nanoid() },
      }),
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

const persistContactsSlice = persistReducer(
  { key: 'contacts', storage, whitelist: ['contacts'] },
  contactsSlice.reducer
);

export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;

export default persistContactsSlice;
