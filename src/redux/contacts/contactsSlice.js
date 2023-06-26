import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, getContacts } from './contactsApi';
import axios from 'axios';
axios.defaults.baseURL = 'https://64957088b08e17c917921d03.mockapi.io';

// export const getContactsThunk = () => {
//   return async dispatch => {
//     dispatch(contactsSlice.actions.fetching());
//     try {
//       const data = await getContacts();
//       dispatch(contactsSlice.actions.fetchSuccsess(data));
//     } catch (error) {
//       dispatch(contactsSlice.actions.fetchError(error));
//     }
//   };
// };

export const getContactsThunk = createAsyncThunk(
  'contacts/getAllContacts',
  getContacts
);
// async () => {
//   const data = await axios.get('/contacts');
//   console.log(data.data);
//   return data.data;
// }
export const addContactsThunk = createAsyncThunk(
  'contacts/getAllContacts',
  addContacts
);
export const deleteContactsThunk = createAsyncThunk(
  'contacts/getAllContacts',
  deleteContacts
);

const handlPending = state => {
  state.isLoading = true;
};

const handlReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handlFulfilldGet = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = payload;
  state.error = '';
};

const handlFulfilldAdd = (state, { payload }) => {
  state.isLoading = false;
  state.contacts.push(payload);
  state.error = '';
};

const handlFulfilldDelete = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = state.contacts.filter(contact => contact.id !== payload);
  state.error = '';
};

const contactsSlice = createSlice({
  name: 'contatcs',
  initialState: { contacts: [], isLoading: false, error: '', filter: '' },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlPending)
      .addCase(getContactsThunk.fulfilled, handlFulfilldGet)
      .addCase(getContactsThunk.rejected, handlReject)
      .addCase(addContactsThunk.pending, handlPending)
      .addCase(addContactsThunk.fulfilled, handlFulfilldAdd)
      .addCase(addContactsThunk.rejected, handlReject)
      .addCase(deleteContactsThunk.pending, handlPending)
      .addCase(deleteContactsThunk.fulfilled, handlFulfilldDelete)
      .addCase(deleteContactsThunk.rejected, handlReject);
  },
});
// reducers: {
// changeFilter: (state, { payload }) => {
//   state.filter = payload;
// }
// },
export const contactsReducer = contactsSlice.reducer;
// reducers: {
//   fetching: state => {
//     state.isLoading = true;
//   },
//   fetchSuccsess: (state, { payload }) => {
//     state.isLoading = false;
//     state.contacts = payload;
//     state.error = '';
//   },
//   fetchError: (state, { payload }) => {
//     state.isLoading = false;
//     state.error = payload;
//   },
// addContact: {
//   reducer: (state, { payload }) => {
//     state.contacts.push(payload);
//   },

//   prepare: newConact => ({
//     payload: { ...newConact, id: nanoid() },
//   }),
// },
// deleteContact: (state, { payload }) => {
//   state.contacts = state.contacts.filter(contact => contact.id !== payload);
// },
// changeFilter: (state, { payload }) => {
//   state.filter = payload;
// },
// });

// const persistContactsSlice = persistReducer(
//   { key: 'contacts', storage, whitelist: ['contacts'] },
//   contactsSlice.reducer
// );

// export const { addContact, deleteContact, changeFilter } =
//   contactsSlice.actions;

// export default persistContactsSlice;
