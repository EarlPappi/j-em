import { createSlice } from "@reduxjs/toolkit";
import { useQuery } from "@tanstack/react-query";
import { useFetchBlog } from "../../hooks/useFetchBlog";

const initialState = []

export const blogSlices = createSlice({
  name: "blog",
  initialState,
  reducers: {
    logBlogs: (state) => {
      console("Store Blog: ", state.author);
    },
    getBlogs: (state, { payload })=>{
      return state = payload
    }
  },
});

export const { logBlogs, getBlogs } = blogSlices.actions;

export default blogSlices.reducer;
