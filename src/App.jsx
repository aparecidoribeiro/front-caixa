import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <h1>Haeder</h1>
      <Outlet />
      <h1>Menu</h1>
    </>
  )
}

export default App
