import { Outlet } from "react-router-dom"
import Header from "@components/surfaces/Header"
import Menu from "@components/surfaces/Menu"

function App() {

  return (
    <div className="px-standard">
      <Header />
      <Outlet />
      <Menu />
    </div>
  )
}

export default App
