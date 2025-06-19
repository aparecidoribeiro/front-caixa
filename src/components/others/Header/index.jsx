import Avatar from "@components/others/Avatar"
import { NavLink, useLocation } from "react-router-dom"
import CartIcon from "@components/others/CartIcon"

const Header = () => {

    const location = useLocation()

    let Route = "Caixa"

    const path = location.pathname

    if (path == "/" || path == "/movimentacao") {
        Route = "Caixa"
    } else if (path.startsWith('/produtos')) {
        Route = "Produtos"
    } else if (path.startsWith('/fichas')) {
        Route = "Fichas"
    }

    return (
        <header className="relative flex items-center justify-between pt-5 mb-5 gap-3 z-20">
            <div className="flex items-center gap-3">
                <Avatar />
                <span className="text-lg font-normal">{Route}</span>
            </div>
            {Route == 'Produtos' && (
                <NavLink to={'/'}>
                    <CartIcon />
                </NavLink>
            )}
        </header>
    )
}

export default Header