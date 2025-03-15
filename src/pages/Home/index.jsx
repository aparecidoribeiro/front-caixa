import { Outlet } from "react-router-dom"

const Home = () => {
    return (
        <>
            <h1>Haeder</h1>
            <Outlet />
            <h1>Menu</h1>
        </>
    )
}

export default Home