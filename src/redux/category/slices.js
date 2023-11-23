import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    loading: false,
    data: [],
    currentPage: 1,
    totalPages: 1,
    totalItems: 1
  },
  reducers: {
    startFetchingCategory: (state) => {
      state.loading = true;
    },
    fetchCategorySuccess: (state, action) => {
        console.log(action)
      state.loading = false;
      state.data = action.payload.data;
      state.currentPage = action.payload.currentPage
      state.totalPages = action.payload.totalPages
      state.totalItems = action.payload.totalItems
    //   state.error = null;
    },
    fetchCategoryFailure: (state, action) => {
      state.loading = false;
      state.data = [];
    //   state.error = action.payload;
    },
  },
});

export const { startFetchingCategory, fetchCategorySuccess, fetchCategoryFailure } = categorySlice.actions;

export default categorySlice.reducer;
