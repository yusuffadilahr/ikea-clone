import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from "./slice/aboutSlice/1940s/aboutSlice";

export const store = configureStore({
    reducer: {
        aboutHover: aboutReducer
    }
})