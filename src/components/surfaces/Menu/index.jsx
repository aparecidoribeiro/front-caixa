import { NavLink } from 'react-router-dom'
import { Wallet, ShoppingCart, BookOpenText } from 'lucide-react';

const Menu = () => {
    return (
        <nav className='absolute w-full left-0 bottom-0 px-standard pt-2 pb-2 bg-white flex justify-between shadow-menu'>
            <NavLink
                to='/'
                className={({ isActive }) => `flex flex-col items-center ${isActive && 'text-primary'}`}>
                <Wallet size={22} />
                <span className='text-xs font-medium'>Caixa</span>
            </NavLink>
            <NavLink
                to='/produtos'
                className={({ isActive }) => `flex flex-col items-center ${isActive && 'text-primary'}`}>
                <ShoppingCart size={22} />
                <span className='text-xs font-medium'>Produtos</span>
            </NavLink>
            <NavLink
                to='/fichas'
                className={({ isActive }) => `flex flex-col items-center ${isActive && 'text-primary'}`}>
                <BookOpenText size={22} />
                <span className='text-xs font-medium'>Fichas</span>
            </NavLink>
        </nav >
    )
}

export default Menu