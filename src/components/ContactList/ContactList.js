import React from 'react';
//import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contacts/contactSlice';
import { Spinner } from '../Spinner/Spinner';


export const ContactList = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const filters = useSelector(state => state.filter);

  const filteredContacts = () => {
    const normalizeFilter = filters.toLowerCase();
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizeFilter)
      )
    );
  };

  const filterEl = filteredContacts();

  return (
    <ul>
      {isFetching && <Spinner />}
      {filterEl && (
        <ContactListItem
          contacts={filterEl}
          onDelete={deleteContact}
          deleting={isDeleting}
        />
      )}
    </ul>
  );
};
