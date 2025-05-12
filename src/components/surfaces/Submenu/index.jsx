import { NavLink, useLocation } from "react-router-dom"


const Submenu = ({ options }) => {

    return (
        <nav className="text-[12px] flex gap-3">
            {
                options.map((item) => {

                    return (
                        <NavLink to={item.route} key={item.name} end={item.end}
                            className={({ isActive }) => {
                                return `px-2 py-1 rounded-xl 
                                ${isActive && 'bg-black-one text-white'}`
                            }}
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