import { Plus } from 'lucide-react';
import { useSelector } from "react-redux"
import { NumericFormat } from 'react-number-format';
import { useEffect } from "react";

import Button from "@components/inputs/Button"
import PlaymentList from "@components/others/PlaymentList"

import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { setFilterData } from "@features/transactions";
import { filterDate } from '@pages/Finance/actions/filterDate';

const Today = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const date = useSelector(state => state.date)
    const transactions = useSelector(state => state.transactions)

    const arrayTransactions = transactions.data

    useEffect(() => {
        const array = filterDate(arrayTransactions, date)
        dispatch(setFilterData(array))
    }, [arrayTransactions])

    return (
        <section className="flex flex-col gap-3 pb-[54px]">
            <div className="bg-white flex flex-col justify-center items-center gap-2 px-standard h-52 rounded-lg">
                <h3 className="font-normal text-base mb-[-10px]">Valor no caixa hoje</h3>
                <NumericFormat
                    className="font-bold text-[42px] w-full text-center"
                    value={transactions.today.amount}
                    prefix="R$"
                    decimalScale={2}
                    thousandSeparator="."
                    decimalSeparator=","
                    displayType="text"
                    fixedDecimalScale
                />
                <Button
                    text="Adicionar Caixa"
                    icon={<Plus />}
                    style="!w-[180px]"
                    action={() => navigate('/add')}
                />
            </div>
            <div>
                <PlaymentList />
            </div>
        </section>
    )
}

export default Today