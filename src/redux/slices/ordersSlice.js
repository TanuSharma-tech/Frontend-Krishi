import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (farmerId) => {
    const response = await axios.get("http://localhost:5000/order");
    return response.data.filter((order) => order.farmer_id._id === farmerId);
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default ordersSlice.reducer;
