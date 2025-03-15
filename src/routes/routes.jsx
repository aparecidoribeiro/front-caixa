import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from 'react-router-dom'

import Finance from '../pages/Finance'
import AddCash from '../pages/Finance/AddCash'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import App from '../App'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Finance />
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
    }
])