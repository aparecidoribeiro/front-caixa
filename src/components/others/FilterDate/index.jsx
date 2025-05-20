import { useState } from "react"
import { useDispatch } from "react-redux"
import { setEndDate } from "@features/date"

const FilterDate = ({ options }) => {

    const [date, setDate] = useState(7)
    const dispatch = useDispatch()

    return (
        <nav className="text-[12px] flex gap-3 mt-1">
            {
                options.map((item) => {

                    return (
                        <button to={item.route} key={item.name}
                            className={`px-2 py-1 rounded-xl 
                                ${date === item.date ? 'bg-black-one text-white' : 'bg-white text-black-one'}`
                            }
                            onClick={() => {
                                if (item.date == undefined) {
                                    item.action(true)
                                    setDate(undefined)
                                } else {
                                    setDate(item.date)
                                    dispatch(setEndDate(item.date))
                                }
                            }}
                        >
                            {item.name}
                        </button>
                    )
                })
            }
        </nav >
    )
}

export default FilterDate