import { createSlice } from '@reduxjs/toolkit';
import { getData } from '../../utils/fetch';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    data: [],
  },
  reducers: {
    setTransactions: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setTransactions } = transactionsSlice.actions;

export const fetchTransactions = () => async (dispatch) => {
  try {
    const response = await getData('/transactions'); // Ganti dengan endpoint API sesuai kebutuhan
    console.log(response)
    dispatch(setTransactions(response.data.data));
  } catch (error) {
    console.error('Error fetching transactions:', error);
  }
};


export default transactionsSlice.reducer;