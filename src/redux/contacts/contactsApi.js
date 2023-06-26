// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const BASE_URL = 'https://64957088b08e17c917921d03.mockapi.io';
axios.defaults.baseURL = 'https://64957088b08e17c917921d03.mockapi.io';

export const getContacts = async () => {
  const data = await axios.get('/contacts');
  console.log(data.data);
  return data.data;
};

console.log(getContacts());
