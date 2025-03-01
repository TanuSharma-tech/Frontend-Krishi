// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
// You will create this file in the next step
import cropsReducer from "./slices/cropsSlice";
import ordersReducer from "./slices/ordersSlice";
const store = configureStore({
  reducer: {
    crops: cropsReducer,
    orders: ordersReducer,
  },
});
export default store;
