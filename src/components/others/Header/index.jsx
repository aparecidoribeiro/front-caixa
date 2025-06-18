import Avatar from "@components/others/Avatar"
import { useLocation } from "react-router-dom"
import CartIcon from "@components/others/CartIcon"

const Header = () => {

    const location = useLocation()

    let Route = "Caixa"

    switch (location.pathname) {
        case "/":
            Route = "Caixa"
            break
        case "/produtos":
            Route = "Produtos"
            break
        case "/fichas":
            Route = "Fichas"
            break
    }


    return (
        <header className="relative flex items-center justify-between pt-5 mb-5 gap-3 z-20">
            <div className="flex items-center gap-3">
                <Avatar />
                <span className="text-lg font-normal">{Route}</span>
            </div>
            {Route == 'Produtos' && (
                <CartIcon />
            )}
        </header>
    )
}

export default Header