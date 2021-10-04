import { configureStore } from '@reduxjs/toolkit';

import userReducer from './userSlice';
import modalReducer from './modalSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    modals: modalReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
