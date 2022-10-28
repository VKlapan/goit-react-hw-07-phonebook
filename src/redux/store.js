import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { contactsReducer } from '../redux/contacts/contactsSlice';
import { filterReducer } from './filterSlice';

const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: reducer,
});

export { store };
