import { createSlice } from '@reduxjs/toolkit'
import { subDays, format } from 'date-fns'

const initialState = {
    startDate: format(subDays(new Date(), 7), 'dd/MM/yyyy'),
    endDate: format(new Date(), 'dd/MM/yyyy'),
    type: 'today'
}
const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
        setEndDate: (state, { payload: { newStartDate, type } }) => {
            state.startDate = format(subDays(new Date(), newStartDate), 'dd/MM/yyyy')
            state.type = type
        },
        setDates: (state, { payload: { newStartDate, newEndDate, type } }) => {
            state.startDate = newStartDate,
                state.endDate = newEndDate,
                state.type = type
        },
        setType: (state, { payload: { type } }) => {
            state.type = type
        }
    }
})


export const { setEndDate, setDates, setType } = dateSlice.actions
export default dateSlice.reducer