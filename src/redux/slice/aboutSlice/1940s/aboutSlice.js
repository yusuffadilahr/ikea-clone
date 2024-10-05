import { createSlice } from "@reduxjs/toolkit";

export const aboutSlice = createSlice({
    name: 'aboutus1940',
    initialState: {
        aboutHover: false
    },
    reducers: {
        setAboutHover: (initialState, action) => {
            console.log(action)
            initialState.aboutHover = action.payload
        }
    }
})

export const { setAboutHover } = aboutSlice.actions
export default aboutSlice.reducer