import { createSlice } from '@reduxjs/toolkit';

import * as contactsOperations from '../../redux/contacts/contactsOperations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [contactsOperations.getContacts.pending](state) {
      state.isLoading = true;
    },
    [contactsOperations.getContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [contactsOperations.getContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
