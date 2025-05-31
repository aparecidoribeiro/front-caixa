import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: false
}

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state, { payload }) => {
            state.value = payload
        }
    }
})

export const { setLoading } = loadingSlice.actions
export default loadingSlice.reducer