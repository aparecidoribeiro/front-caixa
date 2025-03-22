import { configureStore } from "@reduxjs/toolkit";

import authSlice from '@features/auth.js'

export default configureStore({
    reducer: {
        auth: authSlice
    }
})