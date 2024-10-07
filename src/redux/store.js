import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import userReducer from "./slice/usersSlice";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'team',
    storage
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
    reducer: {
        user: persistedReducer
    }
})

export const persist = persistStore(store)