import { filterDate } from "@utils/filterDate"

export const sumAmounts = (data, setAmount) => {

    const filterItems = filterDate(data)

    let totalAmount = 0

    filterItems.map((item) => {
        totalAmount += Number(item.amount)
    })

    setAmount(totalAmount)
}