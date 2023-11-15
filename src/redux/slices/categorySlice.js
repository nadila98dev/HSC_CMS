import { createSlice } from '@reduxjs/toolkit';
import { getData } from '../../utils/fetch';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    data: [],
  },
  reducers: {
    setCategories: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setCategories } = categorySlice.actions;

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await getData('/categories'); 
    dispatch(setCategories(response.data.data));
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};


export default categorySlice.reducer;