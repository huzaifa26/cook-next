import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
  name: 'signup',
  initialState: {},
  reducers: {
    addSignup: (state, action) => {
      console.log({ ...state.signup, ...action.payload })
      state.signup = { ...state.signup, ...action.payload }
    },
  },
});

export const { addSignup } = signupSlice.actions;
export default signupSlice.reducer;