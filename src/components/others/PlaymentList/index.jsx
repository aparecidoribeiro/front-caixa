import TypeCard from "@components/others/TypeCard"
import { isSameDay, parse, parseISO, startOfDay } from "date-fns"
import { CircleAlert } from 'lucide-react';
import { useSelector } from "react-redux";

const PlaymentList = () => {

    const data = useSelector(state => state.historyToday)

    const date = useSelector((state) => state.date)

    const arrayData = data.data
    const arrayReverse = [...arrayData].reverse()


    const arrayFilter = arrayReverse.filter(item => {
        const dateItem = startOfDay(parseISO(item.created_at))
        const dateStart = parse(date.startDate, "dd/MM/yyyy", new Date())
        const dateEnd = parse(date.endDate, "dd/MM/yyyy", new Date())


        if (date.type === 'today') {
            return isSameDay(dateItem, new Date())
        }
        else {
            return dateItem >= dateStart && dateItem <= dateEnd
        }
    })


    return (
        <div className="w-full bg-white p-5 rounded-lg flex flex-col gap-2 mb-5">
            <h3 className="text-base">Histórico</h3>
            <div className="flex flex-col gap-2">
                {
                    arrayFilter.length == 0 ?
                        <h1 className="flex items-center gap-1 text-sm ">
                            <CircleAlert size={16} /> Nenhum histórico de transação
                        </h1>
                        :
                        arrayFilter.map((item) => {
                            return (
                                <TypeCard
                                    key={item.id}
                                    amount={item.amount}
                                    paymentType={item.payment_type}
                                    date={item.created_at}
                                />
                            )
                        })
                }
            </div>
        </div>
    )
}

export default PlaymentList