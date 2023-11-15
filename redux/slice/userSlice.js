import { createSlice } from '@reduxjs/toolkit';
import { fetchUserSuccess, fetchUserFailure } from '../actions';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserSuccess, (state, action) => {
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchUserFailure, (state, action) => {
        state.data = {};
        state.error = action.payload;
      });
  },
});

export const selectUserData = (state) => state.user.data;
export const selectUserError = (state) => state.user.error;

export default userSlice.reducer;