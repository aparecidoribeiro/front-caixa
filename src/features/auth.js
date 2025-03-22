import { createSlice } from "@reduxjs/toolkit"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const initialState = {
    token: localStorage.getItem("token") || null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.token = payload
            localStorage.setItem("token", state.token)
        }
    }
})


export const { login } = authSlice.actions
export default authSlice.reducer