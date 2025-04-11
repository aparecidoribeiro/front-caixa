import { useEffect } from "react"
import Loading from "@components/alerts/Loading"
import Submenu from "@components/surfaces/Submenu"
import { Outlet } from "react-router-dom"

const Finance = () => {

    const options = [
        {
            name: 'Hoje',
            route: '/'
        },
        {
            name: 'Movimentação',
            route: '/movimentacao'
        }
    ]

    return (
        <section className="py-6">
            <Submenu
                options={options}
            />
            <div className="py-4">
                <Outlet />
            </div>
        </section >
    )
}

export default Finance