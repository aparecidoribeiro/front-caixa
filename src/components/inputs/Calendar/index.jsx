import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { X } from 'lucide-react';
import Button from '@components/inputs/Button';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale'

const Calendar = ({ action }) => {

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])

    let dataInicial = format(state[0].startDate, 'dd/MM/yyyy')
    let dataFinal = format(state[0].endDate, 'dd/MM/yyyy')

    return (
        <div className="w-full h-auto bg-white z-20 fixed  ml-[-10px] flex flex-col items-center p-5 rounded-t-lg bottom-0">
            <div className='flex items-center'>
                <h3 className='text-sm'>Personalizar</h3>
                <button
                    className='absolute right-0 pr-5'
                    onClick={() => action(false)}
                >
                    <X size={20} />
                </button>
            </div>
            <div>
                <DateRange
                    rangeColors={["#FA9B2F"]}
                    editableDateInputs={true}
                    onChange={item => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    locale={pt}
                />
            </div>
            <div className='w-full text-center'>
                <h3 className='text-sm mb-2'>
                    {dataInicial} - {dataFinal}
                </h3>
                <Button
                    text={"Atualizar"}
                />
            </div>
        </div>
    )
}

export default Calendar