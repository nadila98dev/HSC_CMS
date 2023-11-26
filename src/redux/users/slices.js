import { createSlice } from '@reduxjs/toolkit';

const usersSlices = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    data: [],
    currentPage: 1,
    totalPages: 1,
    currentItems: 1
  },
  reducers: {
    startFetchingUsers: (state) => {
      state.loading = true;
    },
    fetchUsersSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.currentPage = action.payload.currentPage
      state.totalPages = action.payload.totalPages
      state.currentItems = action.payload.currentItems
    },
    fetchUsersFailure: (state, action) => {
      state.loading = false;
      state.data = [];
    },
  },
});

export const { startFetchingUsers, fetchUsersSuccess, fetchUsersFailure } = usersSlices.actions;

export default usersSlices.reducer;
