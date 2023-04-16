import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 23,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementAmount: (state, { payload }) => {
      state.value += payload;
    },
  },
});

export const { increment, decrement, incrementAmount }  = counterSlice.actions

export default counterSlice.reducer
