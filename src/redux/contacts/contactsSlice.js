import { createSlice } from '@reduxjs/toolkit';

import {
  addContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from './thunkApi';

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilldGet = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = payload;
};

const handleFulfilldAdd = (state, { payload }) => {
  state.isLoading = false;
  state.contacts.push(payload);
};

const handleFulfilldDelete = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = state.contacts.filter(contact => contact.id !== payload);
};

const contactsSlice = createSlice({
  name: 'contatcs',
  initialState: { contacts: [], isLoading: false, error: '' },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleFulfilldGet)
      .addCase(getContactsThunk.rejected, handleReject)
      .addCase(addContactsThunk.pending, handlePending)
      .addCase(addContactsThunk.fulfilled, handleFulfilldAdd)
      .addCase(addContactsThunk.rejected, handleReject)
      .addCase(deleteContactsThunk.pending, handlePending)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilldDelete)
      .addCase(deleteContactsThunk.rejected, handleReject);
  },
});

export const contactsReducer = contactsSlice.reducer;
