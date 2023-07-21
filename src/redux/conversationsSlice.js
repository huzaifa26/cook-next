import { createSlice } from '@reduxjs/toolkit';

const conversationSlice = createSlice({
  name: 'conversations',
  initialState: {},
  reducers: {
    addConversations: (state, action) => {
      state.conversations = action.payload;
    },
  },
});

export const { addConversations } = conversationSlice.actions;
export default conversationSlice.reducer;