import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data: JSON.parse(localStorage.getItem('cart')) || [],
    amount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, { payload }) => {
            let newData = state.data
            let product = { item: payload, quantity: 1 }
            newData.push(product)
            localStorage.setItem('cart', JSON.stringify(newData))
            console.log(product)
        },
        removeCart: (state, { payload }) => {
            state.data = state.data.filter(product => product.item.id !== payload)
            localStorage.setItem('cart', JSON.stringify(state.data))
        },
        setQuantity: (state, { payload: { id, quantity } }) => {
            state.data = state.data.map(product => product.item.id == id
                ? { ...product, quantity: quantity }
                : product
            )
            localStorage.setItem('cart', JSON.stringify(state.data))
        },
        setAmount: (state, {payload}) => {
            state.amount = payload
        }
    }
})

export const { setCart, removeCart, setQuantity, setAmount } = cartSlice.actions
export default cartSlice.reducer