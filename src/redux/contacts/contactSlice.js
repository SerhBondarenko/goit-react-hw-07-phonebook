import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6260536b92df0bc0f342f73b.mockapi.io/api/v1/' }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: name => `/contacts`,
      providesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
      }),
createContact: builder.mutation({
  query: contactContent => ({
    url:'/contacts',
    method: 'POST',
    body:  contactContent,
  }),
  invalidatesTags: ['Contact'],
}),

}),
});

export const { useFetchContactsQuery, useDeleteContactMutation, useCreateContactMutation } = contactsApi;

















/*import { createSlice } from '@reduxjs/toolkit';
import data from '../../data/data';


export const contactSlice = createSlice({
  name: 'items',
  initialState:  data,
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) => {
      const filteredContacts = state.filter(
        contact => contact.id !== action.payload
      );
      return filteredContacts;
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
*/