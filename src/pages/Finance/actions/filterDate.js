import { isSameDay, parse, parseISO, startOfDay } from "date-fns"

//Função para filtradar as transações de acordo com a data
//Recebe o array de todas as transações e o valor das datas
export const filterDate = (arrayData, date) => {

    const arrayReverse = [...arrayData].reverse()

    return arrayReverse.filter(item => {
        const dateItem = startOfDay(parseISO(item.created_at))
        const dateStart = parse(date.startDate, "dd/MM/yyyy", new Date())
        const dateEnd = parse(date.endDate, "dd/MM/yyyy", new Date())


        if (date.type == 'today') {
            return isSameDay(dateItem, new Date())
        }
        else {
            return dateItem >= dateStart && dateItem <= dateEnd
        }
    })
}