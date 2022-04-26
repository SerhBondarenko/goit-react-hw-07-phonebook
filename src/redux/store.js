import { configureStore,} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {filterSlice} from '../redux/filterSlice'
import { pokemonApi } from '../redux/pokemon';
import {contactsApi} from './contacts/contactSlice'

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    pokemonApi.middleware,
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
