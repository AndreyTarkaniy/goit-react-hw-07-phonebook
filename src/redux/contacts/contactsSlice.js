import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getContacts } from './contactsApi';
import axios from 'axios';
axios.defaults.baseURL = 'https://64957088b08e17c917921d03.mockapi.io';

// import ContactsData from 'components/data/contacts.json';

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

console.log(contactsSlice());

const contactsSlice = createSlice({
  name: 'contatcs',
  // initialState: { contacts: ContactsData, filter: '' },
  initialState: { contacts: [], isLoading: false, error: '', filter: '' },
  reducers: {
    fetching: state => {
      state.isLoading = true;
    },
    fetchSuccsess: (state, { payload }) => {
      state.isLoading = false;
      state.contacts = payload;
      state.error = '';
    },
    fetchError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
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
  },
});

export const contactsReducer = contactsSlice.reducer;

// const persistContactsSlice = persistReducer(
//   { key: 'contacts', storage, whitelist: ['contacts'] },
//   contactsSlice.reducer
// );

// export const { addContact, deleteContact, changeFilter } =
//   contactsSlice.actions;

// export default persistContactsSlice;
