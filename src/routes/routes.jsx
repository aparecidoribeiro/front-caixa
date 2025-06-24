import { createBrowserRouter } from 'react-router-dom'
import { authLoader } from '../loaders/authLoader'

import App from '../App'

//Outras páginas
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Reset from '../pages/auth/Reset'
import Forgot from '../pages/auth/Forgot'
import NotFound from '../pages/Error/NotFound'

//Páginas de Caixa
import Finance from '../pages/Finance'
import Today from '../pages/Finance/Today'
import Transaction from '../pages/Finance/Transaction'
import AddCash from '../pages/Finance/AddCash'


//Páginas de Produtos
import Products from '../pages/Products'
import Available from '../pages/Products/Available'
import Unavailable from '../pages/Products/Unavailable'
import Cart from '../pages/Products/Cart'

//Páginas de fichas
import Sheet from '../pages/Sheet'

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
                ]
            },
            {
                path: 'produtos',
                element: <Products />,
                loader: authLoader,
                children: [
                    { index: true, element: <Available /> },
                    { path: 'indisponiveis', element: <Unavailable /> },
                    { path: 'carrinho', element: <Cart /> },
                ]
            },
            {
                path: 'add',
                element: <AddCash />,
                loader: authLoader
            },
            {
                path: 'fichas',
                element: <Sheet />,
                loader: authLoader
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
        ]
    },
])