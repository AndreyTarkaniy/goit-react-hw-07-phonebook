import React from 'react';

import css from 'components/contactsList/contactsList.module.css';
import { useContacts } from 'redux/contacts/useContacts';

const ContactsList = () => {
  const { deleteContact, contactsNameList } = useContacts();

  return (
    <ul className={css.list}>
      {contactsNameList.map(({ id, name, number }) => (
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
