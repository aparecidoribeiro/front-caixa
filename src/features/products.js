import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data: [],
    filter: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, { payload }) => {
            state.data = payload
        },
        setFilter: (state, { payload }) => {
            state.filter = payload
        }
    }
})

export const { setProducts, setFilter } = productsSlice.actions
export default productsSlice.reducer