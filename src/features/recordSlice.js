import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import recordApi from "../api/psetsApi";

export const fetchAsyncPsets = createAsyncThunk(
  "api/fetchAsyncPsets",
  async () => {
    const response = await recordApi.get(`api/psets`);
    console.log("ALL DATA", response.data);
    return response.data;
  }
);

export const fetchAsyncPsetsDatabase = createAsyncThunk(
  "api/fetchAsyncPsetsDatabase",
  async () => {
    const response = await recordApi.get(`/api/psets-database`);
    console.log("ALL DATA", response.data);
    return response.data;
  }
);

const initialState = {
  api: {},
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    addapi: (state, { payload }) => {
      state.api = payload;
    },
  },
  extraReducers: {
    [fetchAsyncPsets.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncPsets.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!", payload);
      return { ...state, api: payload };
    },
    [fetchAsyncPsets.rejected]: () => {
      console.log("Rejected!");
    },

    [fetchAsyncPsetsDatabase.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncPsetsDatabase.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!", payload);
      return { ...state, api: payload };
    },
    [fetchAsyncPsetsDatabase.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

export const getAllRecords = (state) => state.records;
export const getAllDbRecords = (state) => state.records;
export default apiSlice.reducer;
