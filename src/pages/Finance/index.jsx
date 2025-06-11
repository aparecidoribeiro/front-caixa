import Submenu from "@components/others/Submenu"
import { Outlet, useLocation } from "react-router-dom"

const Finance = () => {

    const location = useLocation()

    const options = [
        {
            name: 'Hoje',
            route: '/',
            end: true,
            date: {
                type: 'today'
            }
        },
        {
            name: 'Movimentação',
            route: '/movimentacao',
            date: {
                type: 'interval',
                interval: 7
            }
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