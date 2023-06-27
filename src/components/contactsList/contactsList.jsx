import React from 'react';

import css from 'components/contactsList/contactsList.module.css';
import { useContacts } from 'redux/contacts/useContacts';
import { selectFilterName } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';

const ContactsList = () => {
  const { deleteContact } = useContacts();
  const contactsList = useSelector(selectFilterName);

  // const filterContact = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const contactsList = filterContact();

  return (
    <ul className={css.list}>
      {contactsList.map(({ id, name, number }) => (
        <li className={css.items} key={id}>
          <p className={css.content}>
            {name}: {number}
          </p>

          <button
            className={css.btn}
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
