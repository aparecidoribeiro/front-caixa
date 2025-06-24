import { configureStore } from "@reduxjs/toolkit";

import authSlice from '@features/auth.js'
import dateSlice from '@features/date.js'
import loadingSlice from '@features/loading.js'
import transactionsSlice from '@features/transactions.js'
import productsSlice from '@features/products.js'
import cartSlice from '@features/cart.js'

export default configureStore({
    reducer: {
        auth: authSlice,
        date: dateSlice,
        loading: loadingSlice,
        transactions: transactionsSlice,
        products: productsSlice,
        cart: cartSlice
    }
})