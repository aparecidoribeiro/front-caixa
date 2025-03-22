import { createBrowserRouter, Navigate } from 'react-router-dom'

import Finance from '../pages/Finance'
import AddCash from '../pages/Finance/AddCash'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Reset from '../pages/auth/Reset'
import Forgot from '../pages/auth/Forgot'
import App from '../App'
import store from '../store'

const privateRoute = (element) => {
    const token = store.getState().auth.token
    return token ? element : <Navigate to={'/login'} />
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: privateRoute(<Finance />)
            }
        ]
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'register',
        element: <Register />
    },
    {
        path: 'reset',
        element: <Reset />
    },
    {
        path: 'forgot',
        element: <Forgot />
    }
])