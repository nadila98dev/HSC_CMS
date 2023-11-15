// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/categorySlice';
import itemReducer from './slices/itemsSlice';
import transactionReducer from './slices/transactionsSlice';
import usersSlice from './slices/usersSlice';
// import transactionReducer from '../slices/transactionSlice';

const store = configureStore({
  reducer: {
    category: categoryReducer,
    items: itemReducer,
    transaction: transactionReducer,
    users: usersSlice,
    // Add other reducers if needed
  },
});

export default store;