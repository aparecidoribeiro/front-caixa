import Submenu from "@components/others/Submenu"
import Search from "@components/inputs/Search"
import { Outlet } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { setLoading } from "@features/loading"
import { useSelector } from "react-redux"
import { loadClients } from '@utils/loadClients'


const Sheet = () => {

    const options = [
        {
            name: 'Clientes',
            route: '/fichas',
            end: true,
        },
        {
            name: 'Adicionar nova',
            route: '/fichas/adicionar',
        }
    ]

    const clients = useSelector(state => state.clients.data)
    const token = useSelector(state => state.auth.user.token)
    const dispatch = useDispatch()

    const fetchClients = async () => {
        await loadClients(dispatch, token)
        dispatch(setLoading(false))
    }

    useEffect(() => {
        if (clients.length === 0) {
            fetchClients()
        } else {
            dispatch(setLoading(false))
        }
    }, [])

    return (
        <section>
            <div>
                <Search />
                <Submenu options={options} />
            </div>
            <div className="h-auto pb-[54px] gap-2 ">
                <Outlet />
            </div>
        </section>
    )
}

export default Sheet