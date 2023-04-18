import { configureStore } from "@reduxjs/toolkit";
import blogSlices from "./slices/blogSlices";
import counterSlice from "./slices/counterSlice";


export const store = configureStore({
    reducer: {
        counter: counterSlice,
        blog: blogSlices
    },
    devTools: true
})