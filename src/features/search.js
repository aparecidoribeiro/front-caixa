import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    filter: []
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setFilter: (state, { payload }) => {
            state.filter = payload
        }
    }
})



export const { setFilter } = searchSlice.actions
export default searchSlice.reducer