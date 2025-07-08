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
import AddTransations from '../pages/Finance/Add'


//Páginas de Produtos
import Products from '../pages/Products'
import Available from '../pages/Products/Available'
import Unavailable from '../pages/Products/Unavailable'
import Cart from '../pages/Products/Cart'
import AddProducts from '../pages/Products/Add'
import Edit from '../pages/Products/Edit'


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
                    { path: 'adicionar', element: <AddTransations /> },
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
                    { path: 'adicionar', element: <AddProducts /> },
                    { path: ':id', element: <Edit /> },
                    { path: 'adicionar_caixa', element: <AddTransations /> },
                ]
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