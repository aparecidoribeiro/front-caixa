import { createBrowserRouter, Navigate, redirect, useLocation } from 'react-router-dom'

import Finance from '../pages/Finance'
import AddCash from '../pages/Finance/AddCash'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Reset from '../pages/auth/Reset'
import Forgot from '../pages/auth/Forgot'
import NotFound from '../pages/Error/NotFound'
import App from '../App'


//Loaders
import { authLoader } from '../loaders/authLoader'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Finance />,
                loader: authLoader
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
        path: 'reset-password',
        element: <Reset />,
    },
    {
        path: 'forgot',
        element: <Forgot />
    }
])