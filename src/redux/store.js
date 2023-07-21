import { configureStore } from '@reduxjs/toolkit';

import chatSlice from './chatSlice';
import signupSlice from './signupSlice';
import conversationsSlice from './conversationsSlice';

export const store = configureStore({
  reducer: {
    chat: chatSlice,
    signup: signupSlice,
    conversations: conversationsSlice
  },
});