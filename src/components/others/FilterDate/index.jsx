import { useState } from "react"

const FilterDate = ({ options }) => {

    const [date, setDate] = useState(7)

    return (
        <nav className="text-[12px] flex gap-3">
            {
                options.map((item) => {

                    return (
                        <button to={item.route} key={item.name}
                            className={`px-2 py-1 rounded-xl 
                                ${date === item.date ? 'bg-black-one text-white' : 'bg-white text-black-one'}`
                            }
                            onClick={() => {
                                setDate(item.date)

                                if (item.date == undefined) {
                                    item.action(true)
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