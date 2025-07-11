import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { X } from 'lucide-react';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale'
import { useDispatch } from 'react-redux';
import { setDates } from '@features/date';
import Button from '@components/inputs/Button';

const Calendar = ({ action }) => {

    const dispatch = useDispatch()

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])

    let formatStartDate = format(state[0].startDate, 'dd/MM/yyyy')
    let formatEndDate = format(state[0].endDate, 'dd/MM/yyyy')

    return (
        <div className="w-full h-auto bg-white z-40 fixed ml-[-15px] flex flex-col items-center p-5 rounded-t-lg bottom-0">
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
                    {formatStartDate} - {formatEndDate}
                </h3>
                <Button
                    text={"Atualizar"}
                    action={() => {
                        dispatch(setDates({
                            newStartDate: formatStartDate,
                            newEndDate: formatEndDate,
                            type: "interval"
                        }))
                        action(false)
                    }}
                />
            </div>
        </div>
    )
}

export default Calendar