import Submenu from "@components/others/Submenu"
import Search from "@components/inputs/Search"
import { Outlet, useLocation } from "react-router-dom"

const Products = () => {

    const options = [
        {
            name: 'Disponiveis',
            route: '/produtos',
            end: true,
        },
        {
            name: 'Indisponiveis',
            route: '/produtos/indisponiveis',
        },
        {
            name: 'Adicionar novos',
            route: '/',
        }
    ]

    return (
        <section>
            <Search />
            <Submenu options={options} />
            <div className="mt-2">
                <Outlet />
            </div>
        </section>
    )
}

export default Products