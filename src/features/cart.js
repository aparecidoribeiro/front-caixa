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
        },
        removeCart: (state, { payload }) => {
            state.data = state.data.filter(item => item.id !== payload)
            localStorage.setItem('cart', JSON.stringify(state.data))
        }
    }
})

export const { setCart, removeCart } = cartSlice.actions
export default cartSlice.reducer