import axios from 'axios';

axios.defaults.baseURL = 'https://64957088b08e17c917921d03.mockapi.io';

export const getContacts = async () => {
  const data = await axios.get('/contacts');
  console.log(data.data);
  return data.data;
};

export const addContacts = async newContact => {
  const data = await axios.post('/contacts', newContact);

  return data.data;
};

export const deleteContacts = async id => {
  const data = await axios.delete(`/contacts/${id}`);

  return data.data;
};