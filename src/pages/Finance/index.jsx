import { useEffect } from "react"
import Loading from "@components/alerts/Loading"
import Submenu from "@components/others/Submenu"
import { Outlet } from "react-router-dom"

const Finance = () => {

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