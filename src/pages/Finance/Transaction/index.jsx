import FilterDate from '@components/others/FilterDate'
import Block from "@components/alerts/Block"
import Calendar from '@components/inputs/Calendar'
import InfoTransaction from '@components/others/InfoTransaction'
import PlaymentList from '@components/others/PlaymentList'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setFilterData } from "@features/transactions";
import { filterDate } from '@pages/Finance/actions/filterDate';


const Trasaction = () => {

    const [block, setBlock] = useState(false)

    const options = [
        {
            name: "7 dias",
            date: 7
        },
        {
            name: "28 dias",
            date: 28
        },
        {
            name: "3 meses",
            date: 90
        },
        {
            name: "Personalizar",
            date: undefined,
            action: setBlock
        }
    ]

    const dispatch = useDispatch()

    const date = useSelector(state => state.date)
    const transactions = useSelector(state => state.transactions)
    const arrayData = transactions.data

    useEffect(() => {
        const array = filterDate(arrayData, date)
        dispatch(setFilterData(array))
    }, [date])

    return (
        < section className="pb-[54px]">
            <div className={`${block ? "pointer-events-none" : ""}`}>
                <div className='mt-3'>
                    <h3 className='text-xs'>Filtrar data</h3>
                    <FilterDate
                        options={options}
                    />
                </div>
                <div className='flex flex-col gap-3'>
                    <InfoTransaction />
                    <PlaymentList />
                </div>
            </div>

            {
                block && (
                    <>
                        <Calendar action={setBlock} />
                        <Block />
                    </>
                )
            }
        </section >
    )
}

export default Trasaction