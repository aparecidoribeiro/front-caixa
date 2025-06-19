import Submenu from "@components/others/Submenu"
import { Outlet, useLocation } from "react-router-dom"

import { loadData } from '@utils/loadData';
import { setLoading } from '@features/loading.js'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Finance = () => {

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

    const dispatch = useDispatch()
    const location = useLocation()

    const user = useSelector(state => state.auth.user)
    const transactions = useSelector(state => state.transactions.data)

    const fetchData = async () => {
        await loadData(dispatch, user)
        dispatch(setLoading(false))
    }

    useEffect(() => {
        dispatch(setLoading(true))

        if (transactions.length == 0) {
            fetchData()
        } else {
            dispatch(setLoading(false))
        }

    }, [])

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