import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: []
    },
    reducers: {
        setUserData: (initialState, action) => {
            initialState.users = action.payload
        }
    }
})

export const { setUserData } = userSlice.actions
export default userSlice.reducer