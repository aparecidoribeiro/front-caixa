import Submenu from "@components/others/Submenu"
import Search from "@components/inputs/Search"
import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { loadProducts } from "@utils/loadProducts"
import { setLoading } from "@features/loading"
import { useDispatch } from "react-redux"

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
            name: 'Adicionar novo',
            route: '/produtos/adicionar',
        }
    ]

    const dispatch = useDispatch()

    const user = useSelector(state => state.auth.user)
    const products = useSelector(state => state.products.data)

    const fetchData = async () => {
        await loadProducts(dispatch, user)
        dispatch(setLoading(false))
    }

    useEffect(() => {
        dispatch(setLoading(true))

        if (products.length === 0) {
            fetchData()
        } else {
            dispatch(setLoading(false))
        }
    }, [])

    const location = useLocation()
    const hiddenRoutes = ['/produtos/carrinho']
    const pathname = !hiddenRoutes.includes(location.pathname)

    return (
        <section>
            {pathname && (
                <div>
                    <Search />
                    <Submenu options={options} />
                </div>
            )}
            <section className="h-auto pb-[54px] gap-2 ">
                <Outlet />
            </section>
        </section>
    )
}

export default Products