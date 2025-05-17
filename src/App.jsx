import { Outlet, useLocation } from "react-router-dom"
import Header from "@components/others/Header"
import Menu from "@components/others/Menu"

function App() {

  const location = useLocation()

  const pathname = location.pathname != '/add'

  return (
    <div className="px-standard pb-10 pt-5 bg-background">
      {pathname && <Header />}
      <Outlet />
      <Menu />
    </div>
  )
}

export default App
