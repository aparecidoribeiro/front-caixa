import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, { payload }) => {
            state.data = payload
        }
    }
})

export const { setProducts } = productsSlice.actions
export default productsSlice.reducer