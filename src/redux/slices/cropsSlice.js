import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCrops = createAsyncThunk(
  "crops/fetchCrops",
  async (farmerId) => {
    const response = await axios.get("http://localhost:5000/crops");
    return response.data.filter((crop) => crop.farmer_id === farmerId);
  }
);

const cropsSlice = createSlice({
  name: "crops",
  initialState: [],
  reducers: {
    addCrop: (state, action) => {
      state.push(action.payload);
    },
    updateCrop: (state, action) => {
      const index = state.findIndex((crop) => crop._id === action.payload._id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteCrop: (state, action) => {
      return state.filter((crop) => crop._id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCrops.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { addCrop, updateCrop, deleteCrop } = cropsSlice.actions;
export default cropsSlice.reducer;
