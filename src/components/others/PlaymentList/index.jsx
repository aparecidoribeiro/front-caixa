import TypeCard from "@components/others/TypeCard"
import { CircleAlert } from 'lucide-react';
import { useSelector } from "react-redux";

const PlaymentList = () => {

    const transactionsFilter = useSelector(state => state.transactions.filter)

    console.log(transactionsFilter)

    return (
        <div className="w-full bg-white p-5 rounded-lg flex flex-col gap-2 mb-5">
            <h3 className="text-base">Histórico</h3>
            <div className="flex flex-col gap-2">
                {
                    transactionsFilter.data.length === 0 ?
                        <h1 className="flex items-center gap-1 text-sm ">
                            <CircleAlert size={16} /> Nenhum histórico de transação
                        </h1>
                        :
                        transactionsFilter.data.map((item) => {
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