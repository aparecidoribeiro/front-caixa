import { Plus } from 'lucide-react';
import { useSelector } from "react-redux"
import { NumericFormat } from 'react-number-format';
import { useEffect } from "react";
import { sumAmounts } from "@utils/sumAmounts";

import Button from "@components/inputs/Button"
import PlaymentList from "@components/others/PlaymentList"

import { getCaixa } from "./actions/getCaixa";

//Features loading
import { setLoading } from '@features/loading.js'


import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setHistory } from '@features/hitoryToday';


const Today = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector(state => state.auth.user)
    const dataToday = useSelector(state => state.historyToday)


    async function loadData() {
        const dados = await getCaixa(user)
        const amount = sumAmounts(dados)
        dispatch(setHistory({
            data: dados,
            amount: amount
        }))

        dispatch(setLoading(false))
    }

    useEffect(() => {
        dispatch(setLoading(true))

        if (dataToday.data.length == 0) {
            loadData()
        } else {
            dispatch(setLoading(false))
        }

    }, [])

    return (
        <section className="flex flex-col gap-3 pb-[54px]">
            <div className="bg-white flex flex-col justify-center items-center gap-2 px-standard h-52 rounded-lg">
                <h3 className="font-normal text-sm mb-[-10px]">Valor no caixa hoje</h3>
                <NumericFormat
                    className="font-bold text-[42px] w-full text-center"
                    value={dataToday.amountToday}
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
                    action={() => {
                        navigate('/add')
                    }}
                />
            </div>
            <div>
                <PlaymentList data={dataToday.data} />
            </div>
        </section>
    )
}

export default Today