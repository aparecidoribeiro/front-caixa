import { NavLink } from "react-router-dom"


const Submenu = () => {
    return (
        <nav className="text-[12px] flex gap-3">
            <NavLink to='/' className={({ isActive }) => `px-2 py-1 rounded-xl ${isActive && 'bg-black-one text-white'}`}>Hoje</NavLink>
            <NavLink to='/movimentacao' className={({ isActive }) => `px-2 py-1 rounded-xl ${isActive && 'bg-black-one text-white'}`}>Movimentação</NavLink>
        </nav>
    )
}

export default Submenu