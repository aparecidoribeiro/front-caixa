import { createBrowserRouter } from 'react-router-dom'

import AddCash from '../pages/Finance/AddCash'
import Today from '../pages/Finance/Today'
import Transaction from '../pages/Finance/Transaction'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Reset from '../pages/auth/Reset'
import Forgot from '../pages/auth/Forgot'
import NotFound from '../pages/Error/NotFound'
import App from '../App'

import Finance from '../pages/Finance'
import Products from '../pages/Products'
import Sheet from '../pages/Sheet'

//Loaders
import { authLoader } from '../loaders/authLoader'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Finance />,
                loader: authLoader,
                children: [
                    { index: true, element: <Today /> },
                    { path: 'movimentacao', element: <Transaction /> },
                    { path: 'add', element: <AddCash /> }
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