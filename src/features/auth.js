import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null
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
        }
    }
})


export const { login, logout } = authSlice.actions
export default authSlice.reducer