import { useState } from "react"
import { NavLink } from "react-router-dom"

const FilterDate = ({ options }) => {

    const [date, setDate] = useState(7)

    return (
        <nav className="text-[12px] flex gap-3">
            {
                options.map((item) => {

                    return (
                        <button to={item.route} key={item.name}
                            className={`px-2 py-1 rounded-xl 
                                ${date === item.date && 'bg-black-one text-white'}`
                            }
                            onClick={() => {
                                setDate(item.date)

                                if (item.date == undefined) {
                                    console.log('Abrir modal')
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