import { useEffect } from "react"
import Loading from "@components/alerts/Loading"
import Submenu from "@components/others/Submenu"
import { Outlet, useLocation } from "react-router-dom"

const Finance = () => {

    const location = useLocation()

    const options = [
        {
            name: 'Hoje',
            route: '',
            end: true
        },
        {
            name: 'Movimentação',
            route: '/movimentacao'
        }
    ]

    return (
        <section>
            {location.pathname != '/add' && <Submenu options={options} />}
            <div className="mt-2">
                <Outlet />
            </div>
        </section >
    )
}

export default Finance