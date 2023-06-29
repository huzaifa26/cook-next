import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {},
  reducers: {
    addSingleChat: (state, action) => {
      state.singleChat = action.payload;
    },
  },
});

export const { addSingleChat } = chatSlice.actions;
export default chatSlice.reducer;