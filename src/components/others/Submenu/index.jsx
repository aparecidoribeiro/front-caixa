import { NavLink } from "react-router-dom"


const Submenu = ({ options }) => {

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