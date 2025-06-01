import { filterDate } from "@utils/filterDate"

export const sumAmounts = (data) => {

    const filterItems = filterDate(data)

    let totalAmount = 0

    filterItems.map((item) => {
        totalAmount += Number(item.amount)
    })

    return totalAmount
}