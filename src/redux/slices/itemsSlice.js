import { createSlice } from '@reduxjs/toolkit';
import { getData } from '../../utils/fetch';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    data: [],
  },
  reducers: {
    setItems: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setItems } = itemsSlice.actions;

export const fetchItems = () => async (dispatch) => {
  try {
    const response = await getData('/items'); // Ganti dengan endpoint API sesuai kebutuhan
    console.log(response)
    dispatch(setItems(response.data.data));
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};


export default itemsSlice.reducer;