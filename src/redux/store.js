import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/usersSlice";


export const store = configureStore({
    reducer: {
        user: userReducer
    }
})

// c4KJcwqmIBqa6rq0