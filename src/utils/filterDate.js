import { format, parseISO } from "date-fns"

export const filterDate = (arrayData) => {

    const dateToday = format(new Date(), "dd/MM/yyyy")

    return arrayData.filter(item => {
        const date = parseISO(item.created_at)
        const formatteDate = format(date, "dd/MM/yyyy")

        return formatteDate == dateToday
    })
}