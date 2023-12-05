// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './items/slices';
// import transactionReducer from './slices/transactionsSlice';
// import usersSlice from './slices/usersSlice';
import categoryReducer from './category/slices';
import usersReducer from './users/slices';
// import transactionReducer from '../slices/transactionSlice';

const store = configureStore({
  reducer: {
    category: categoryReducer,
    items: itemReducer,
    // transaction: transactionReducer,
    users: usersReducer,
    // Add other reducers if needed
  },
});

export default store;