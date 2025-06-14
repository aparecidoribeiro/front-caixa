import { useState } from 'react'
import FilterDate from '@components/others/FilterDate'
import Block from "@components/alerts/Block"
import Calendar from '@components/inputs/Calendar'
import InfoTransaction from '@components/others/InfoTransaction'
import PlaymentList from '@components/others/PlaymentList'
import { useSelector } from 'react-redux'

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

    const data = useSelector((state) => state.historyToday.data)

    return (
        < section className='pb-[54px]'>
            <div>
                <h3 className='text-xs'>Filtrar data</h3>
                <FilterDate
                    options={options}
                />
            </div>
            <InfoTransaction />
            <PlaymentList data={data} />

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