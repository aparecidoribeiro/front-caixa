import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data: [],
    today: {
        amount: 0
    },
    filter: {
        data: []
    }
}

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        setHistory: (state, { payload: { data, amount } }) => {
            state.data = data
            state.today.amount = amount
        },
        setFilterData: (state, { payload }) => {
            state.filter.data = payload
        }
    }
})


export const { setHistory, setFilterData } = transactionsSlice.actions
export default transactionsSlice.reducer