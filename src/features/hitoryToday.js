import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data: [],
    amountToday: 0
}

const historyTodaySlice = createSlice({
    name: 'historyToday',
    initialState,
    reducers: {
        setHistory: (state, { payload: { data, amount } }) => {
            state.data = data
            state.amountToday = amount
        }
    }
})


export const { setHistory } = historyTodaySlice.actions
export default historyTodaySlice.reducer