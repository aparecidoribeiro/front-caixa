import { createSlice } from '@reduxjs/toolkit'
import { subDays, format } from 'date-fns'

const initialState = {
    startDate: format(subDays(new Date(), 7), 'dd/MM/yyyy'),
    endDate: format(new Date(), 'dd/MM/yyyy')
}
const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
        setEndDate: (state, { payload }) => {
            state.startDate = format(subDays(new Date(), payload), 'dd/MM/yyyy')
        },
        setDates: (state, { payload: { newStartDate, newEndDate } }) => {
            state.startDate = newStartDate;
            state.endDate = newEndDate;
        }
    }
})


export const { setEndDate, setDates } = dateSlice.actions
export default dateSlice.reducer