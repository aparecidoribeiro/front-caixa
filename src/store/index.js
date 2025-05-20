import { configureStore } from "@reduxjs/toolkit";

import authSlice from '@features/auth.js'
import dateSlice from '@features/date.js'

export default configureStore({
    reducer: {
        auth: authSlice,
        date: dateSlice
    }
})