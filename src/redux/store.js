import { configureStore } from '@reduxjs/toolkit';

// Import your reducers
import chatSlice from './chatSlice';
import signupSlice from './signupSlice';

export const store = configureStore({
  reducer: {
    // Add your reducers here
    chat: chatSlice,
    signup: signupSlice
  },
});