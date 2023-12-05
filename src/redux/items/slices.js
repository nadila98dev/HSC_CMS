import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    loading: false,
    data: [],
    currentPage: 1,
    totalPages: 1,
    totalItems: 1,
    currentItems: 1
  },
  reducers: {
    startFethcItems: (state) => {
      state.loading = true;
    },
    fetchItemsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.currentPage = action.payload.currentPage;
      state.totalItems = action.payload.totalItems; 
      state.currentItems = action.payload.currentItems
    },
    fetchItemsFailure: (state, action) => {
      state.loading = false;
      state.data = [];
    },
  },
});

export const { startFethcItems, fetchItemsSuccess, fetchItemsFailure } = itemsSlice.actions;

export default itemsSlice.reducer;
