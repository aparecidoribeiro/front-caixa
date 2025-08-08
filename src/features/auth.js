import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isToken: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.user = payload
            localStorage.setItem("user", JSON.stringify(payload))
            window.location.href = "/"
        },
        logout: (state) => {
            state.user = null
            localStorage.removeItem("user")
            window.location.href = "/login"
        },
        setToken: (state, { payload }) => {
            state.isToken = payload
        }
    }
})


export const { login, logout, setToken } = authSlice.actions
export default authSlice.reducer