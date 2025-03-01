// src/redux/reducers/index.js

import { combineReducers } from "redux";
import ordersReducer from "./ordersReducer"; // You will create this file next

const rootReducer = combineReducers({
  orders: ordersReducer, // Add your reducers here
});

export default rootReducer;
