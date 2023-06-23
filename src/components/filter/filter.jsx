import React from 'react';

import css from 'components/filter/filter.module.css';
import { useContacts } from 'redux/contacts/useContacts';

const Filter = () => {
  const { filter, changeFilter } = useContacts();

  const changeFilterContact = event => {
    changeFilter(event.target.value);
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={changeFilterContact}
      />
    </label>
  );
};

export default Filter;
