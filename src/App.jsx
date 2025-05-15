import { Outlet } from "react-router-dom"
import Header from "@components/others/Header"
import Menu from "@components/others/Menu"

function App() {

  return (
    <div className="px-standard pb-10 pt-5 bg-background">
      <Header />
      <Outlet />
      <Menu />
    </div>
  )
}

export default App
