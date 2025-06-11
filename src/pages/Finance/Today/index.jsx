import { Plus } from 'lucide-react';
import { useSelector } from "react-redux"
import { NumericFormat } from 'react-number-format';
import { useEffect } from "react";

import Button from "@components/inputs/Button"
import PlaymentList from "@components/others/PlaymentList"


//Features loading
import { setLoading } from '@features/loading.js'

import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { loadData } from '@utils/loadData';


const Today = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector(state => state.auth.user)
    const dataToday = useSelector(state => state.historyToday)



    useEffect(() => {
        dispatch(setLoading(true))

        const fetchData = async () => {
            await loadData(dispatch, user)
            dispatch(setLoading(false))
        }

        if (dataToday.data.length == 0) {
            fetchData()
        } else {
            dispatch(setLoading(false))
        }


    }, [])

    return (
        <section className="flex flex-col gap-3 pb-[54px]">
            <div className="bg-white flex flex-col justify-center items-center gap-2 px-standard h-52 rounded-lg">
                <h3 className="font-normal text-base mb-[-10px]">Valor no caixa hoje</h3>
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