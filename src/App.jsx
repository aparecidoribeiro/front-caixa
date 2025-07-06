import Header from "@components/others/Header"
import Menu from "@components/others/Menu"
import LoadinBlock from "@components/alerts/LoadinBlock"
import AuthAuthorization from "@loaders/AuthAutorization"
import { Outlet, useLocation, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

function App() {

  const location = useLocation()
  const { id } = useParams()

  const hiddenRoutes = ['/login', '/register', '/reset-password', '/forgot', '/adicionar', '/produtos/carrinho', `/produtos/${id}`]
  const pathname = !hiddenRoutes.includes(location.pathname)

  const loading = useSelector(state => state.loading.value)


  return (
    <div className="px-standard bg-background">
      {loading && <LoadinBlock />}
      <AuthAuthorization>
        {pathname && <Header />}
        <div>
          <Outlet />
        </div>
        {pathname && <Menu />}
      </AuthAuthorization>
    </div>
  )
}

export default App
