import { NavLink } from "react-router-dom"
import { setType, setEndDate } from "@features/date"
import { useDispatch } from "react-redux"


const Submenu = ({ options }) => {

    const dispatch = useDispatch()

    const setInterval = ({ date }) => {
        if (date.type == "today") {
            dispatch(setType({ type: 'today' }))
        } else {
            dispatch(setEndDate({
                newStartDate: date.interval,
                type: 'interval'
            }))
        }
    }

    return (
        <nav className="text-[12px] flex gap-3">
            {
                options.map((item) => {

                    return (
                        <NavLink to={item.route} key={item.name} end={item.end}
                            className={({ isActive }) => {
                                return `px-2 py-1 rounded-xl 
                                ${isActive ? 'bg-black-one text-white' : 'bg-white text-black-one'}`
                            }}
                            onClick={() => setInterval(item)}
                        >
                            {item.name}
                        </NavLink>
                    )
                })
            }
        </nav>
    )
}

export default Submenu