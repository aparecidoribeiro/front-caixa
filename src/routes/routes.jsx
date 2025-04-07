import { createBrowserRouter, Navigate, redirect, useLocation } from 'react-router-dom'

import AddCash from '../pages/Finance/AddCash'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Reset from '../pages/auth/Reset'
import Forgot from '../pages/auth/Forgot'
import NotFound from '../pages/Error/NotFound'
import App from '../App'

import Finance from '../pages/Finance'

//Loaders
import { authLoader } from '../loaders/authLoader'
import Products from '../pages/Products'
import Sheet from '../pages/Sheet'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: '',
                element: <Finance />,
                loader: authLoader,
                children: [
                    { index: true, element: <AddCash /> },
                    { path: 'movimentacao', element: <AddCash /> },
                ]
            },
            {
                path: 'produtos',
                element: <Products />,
                loader: authLoader
            },
            {
                path: 'fichas',
                element: <Sheet />,
                loader: authLoader
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/reset-password',
        element: <Reset />,
    },
    {
        path: '/forgot',
        element: <Forgot />,
    }
])