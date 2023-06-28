import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://64957088b08e17c917921d03.mockapi.io';

export const getContactsThunk = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, thunkAPI) => {
    try {
      const data = await axios.get('/contacts');
      return data.data;
      // return data.data - це той пейлоад який піде в handleFulfilldGet
    } catch (error) {
      return thunkAPI.rejectWithValue('something wrong');
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContacts',
  async (newContact, thunkAPI) => {
    try {
      const data = await axios.post('/contacts', newContact);
      return data.data;
      // return data.data - це той пейлоад який піде в handleFulfilldAdd
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
      // returne id - це той пейлоад який піде в handleFulfilldDelete
    } catch (error) {
      return thunkAPI.rejectWithValue('something wrong');
    }
  }
);
