import { NavLink } from "react-router-dom"


const Submenu = ({ options }) => {

    return (
        <nav className="text-[12px] flex gap-3">
            {
                options.map((item) => (
                    <NavLink to={item.route} key={item.name} className={({ isActive }) => `px-2 py-1 rounded-xl ${isActive && 'bg-black-one text-white'}`}>{item.name}</NavLink>
                ))
            }
        </nav>
    )
}

export default Submenu