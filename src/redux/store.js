import { configureStore } from '@reduxjs/toolkit';

// Import your reducers
import chatSlice from './chatSlice';

export const store = configureStore({
  reducer: {
    // Add your reducers here
    chat: chatSlice,
  },
});