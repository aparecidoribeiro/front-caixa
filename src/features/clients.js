import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: []
}

const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        setClients: (state, { payload }) => {
            state.data = payload
        }
    }
})

export const { setClients } = clientsSlice.actions
export default clientsSlice.reducer