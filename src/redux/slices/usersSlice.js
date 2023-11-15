import { createSlice } from '@reduxjs/toolkit';
import { getData } from '../../utils/fetch';
import { config } from '../../config';
import axios from 'axios';

const usersSlice = createSlice({
  name: 'transactions',
  initialState: {
    data: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await axios(`${config.api_image}/users`); // Ganti dengan endpoint API sesuai kebutuhan
    console.log(response)
    dispatch(setUsers(response.data.data));
  } catch (error) {
    console.error('Error fetching transactions:', error);
  }
};


export default usersSlice.reducer;