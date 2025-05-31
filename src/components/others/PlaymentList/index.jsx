import { format, parseISO } from "date-fns"
import TypeCard from "@components/others/TypeCard"


const PlaymentList = (data) => {

    const dateToday = format(new Date(), "dd/MM/yyyy")

    const arrayData = data.data

    // const formatteTime = format(date, "HH:mm")
    const filterDate = arrayData.filter(item => {
        const date = parseISO(item.created_at)
        const formatteDate = format(date, "dd/MM/yyyy")

        return formatteDate == dateToday
    })

    return (
        <div className="w-full bg-white p-5 rounded-lg flex flex-col gap-2 mb-5">
            <h3 className="text-base">Histórico</h3>
            <div className="flex flex-col gap-2">
                {
                    filterDate.map((item) => {
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