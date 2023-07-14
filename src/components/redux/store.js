import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './phonebook/reducer';

export const store = configureStore({
  reducer: rootReducer,
});
