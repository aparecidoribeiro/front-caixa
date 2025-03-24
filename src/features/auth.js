import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: localStorage.getItem("token") || null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.token = payload
            localStorage.setItem("token", payload)
            window.location.href = "/"
        },
        logout: (state) => {
            state.token = null
            localStorage.removeItem("token")
            window.location.href = "/login"
        }
    }
})


export const { login, logout } = authSlice.actions
export default authSlice.reducer