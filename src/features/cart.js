import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data: JSON.parse(localStorage.getItem('cart')) || []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, { payload }) => {
            let newData = state.data
            let product = { id: payload, quantity: 1 }
            newData.push(product)
            localStorage.setItem('cart', JSON.stringify(newData))
        }
    }
})

export const { setCart } = cartSlice.actions
export default cartSlice.reducer