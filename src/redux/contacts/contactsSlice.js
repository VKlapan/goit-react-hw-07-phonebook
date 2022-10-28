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
      state.error = null;
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

    [contactsOperations.addContact.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [contactsOperations.addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [contactsOperations.addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [contactsOperations.deleteContact.pending](state) {
      state.isLoading = true;
      state.error = null;
    },

    [contactsOperations.deleteContact.fulfilled]: (state, action) => {
      const deletedContacts = state.items.filter(
        item => item.id !== action.payload
      );
      return { isLoading: false, error: null, items: deletedContacts };
    },

    [contactsOperations.deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
