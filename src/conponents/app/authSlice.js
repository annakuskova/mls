import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "auth",
    initialState: { token: null, isAuth: false},
    reducers: {
        setCredentials: (state, {playload: {token}}) =>{
            state.token = token
        }, 
        setAuth: (state, {playload: {isAuth}}) => {
            state.isAuth = isAuth
        },
    },
    extraReducers: (builder) => {},
})

export const {setCredentials} = slice.actions

export default slice.reducer