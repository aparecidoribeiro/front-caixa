import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Finance from '../pages/Finance'
import Home from '../pages/Home'
import AddCash from '../pages/Finance/AddCash'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route index element={<Finance />} />
                    <Route path='caixa' element={<AddCash />} />
                </Route>
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
            </Routes >
        </BrowserRouter >
    )
}

export default RoutesApp