import { useState } from "react"
import { useDispatch } from "react-redux"
import { setEndDate } from "@features/date"
import { useSelector } from "react-redux"
import { getCaixa } from "../../../pages/Finance/Today/actions/getCaixa"

const FilterDate = ({ options }) => {

    const [date, setDate] = useState(7)
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)

    return (
        <nav className="text-[12px] flex gap-3 mt-1">
            {
                options.map((item) => {

                    return (
                        <button to={item.route} key={item.name}
                            className={`px-2 py-1 rounded-xl 
                                ${date === item.date ? 'bg-black-one text-white' : 'bg-white text-black-one'}`
                            }
                            onClick={async () => {
                                if (item.date == undefined) {
                                    item.action(true)
                                    setDate(undefined)
                                } else {
                                    setDate(item.date)
                                    dispatch(setEndDate({
                                        newStartDate: item.date,
                                        type: "interval"
                                    }))
                                    const dados = await getCaixa(user)
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