import { Outlet, useLocation } from "react-router-dom"
import Header from "@components/others/Header"
import Menu from "@components/others/Menu"
import LoadinBlock from "@components/alerts/LoadinBlock"
import { useSelector } from "react-redux"

function App() {

  const location = useLocation()

  const hiddenRoutes = ['/login', '/register', '/reset-password', '/forgot', '/add']
  const pathname = !hiddenRoutes.includes(location.pathname)

  const loading = useSelector(state => state.loading.value)


  return (
    <div className="px-standard bg-background">
      {loading && (<LoadinBlock />)}
      {pathname && <Header />}
      <div>
        <Outlet />
      </div>
      {pathname && <Menu />}
    </div>
  )
}

export default App
