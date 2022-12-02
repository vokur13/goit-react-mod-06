import { configureStore } from '@reduxjs/toolkit';
import { myValueSlice } from './myValue/slice';
import { userSlice } from './user/userSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
