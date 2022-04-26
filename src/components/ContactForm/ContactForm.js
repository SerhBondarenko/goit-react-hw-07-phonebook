import { useState } from 'react';
//import PropTypes from 'prop-types';
//import { useSelector, useDispatch } from 'react-redux';
import { useCreateContactMutation } from '../../redux/contacts/contactSlice';
//import { ContactList } from '../ContactList/ContactList';
//import { addContact } from '../../redux/contacts/contactSlice';
import {Spinner} from '../Spinner/Spinner'
//import {toast} from 'react-hot-toast';
//import {useGetPokemonByNameQuery} from '../../redux/pokemon'

const shortid = require('shortid');
const nameInputId = shortid.generate();
const numberInputId = shortid.generate();


export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const  [createContact, {isLoading}]  = useCreateContactMutation();

  //const contacts = useSelector(state => state.contact);
  //const dispatch = useDispatch();

  const handleChangeName = e => {
    setName(e.currentTarget.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.currentTarget.value);
  };


  const handleSubmit = e => {
    e.preventDefault();
    createContact({name, phone: number,})
    //onSaveContactClicked ({name, number})
    setName('');
    setNumber('');
      //toast.success('Контакт створений!');
  };


  return (
    <>
      <h1>Книга контактів</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>
          Ім'я
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
            placeholder="Введіть ім'я"
            id={nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={numberInputId}>
          Номер
          <input
            type="tel"
            name="number"
            placeholder="Введіть номер"
            value={number}
            onChange={handleChangeNumber}
            id={numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className="submitBtn" disabled={isLoading} >
        {isLoading? <Spinner size={14} /> : 'Додати'}
        </button>
      </form>
      <h2>Контакти</h2>
    </>
  );
};

