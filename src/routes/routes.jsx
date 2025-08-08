import { createBrowserRouter } from 'react-router-dom'

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
import Clients from '../pages/Sheet/Clients'
import AddClients from '../pages/Sheet/Add'
import Profile from '../pages/Sheet/Profile'

//Private Route
import Private from './Private'

export const router = createBrowserRouter([
    {
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Finance />,
                children: [
                    { index: true, element: <Private><Today /></Private> },
                    { path: 'movimentacao', element: <Private><Transaction /></Private> },
                    { path: 'adicionar', element: <Private><AddTransations /></Private> },
                ]
            },
            {
                path: 'produtos',
                element: <Products />,
                children: [
                    { index: true, element: <Private><Available /></Private> },
                    { path: 'indisponiveis', element: <Private><Unavailable /> </Private> },
                    { path: 'carrinho', element: <Private><Cart /></Private> },
                    { path: 'adicionar', element: <Private><AddProducts /></Private> },
                    { path: ':id', element: <Private><Edit /></Private> },
                    { path: 'adicionar_caixa', element: <Private><AddTransations /></Private> },
                ]
            },
            {
                path: 'fichas',
                element: <Sheet />,
                children: [
                    { index: true, element: <Private><Clients /></Private> },
                    { path: 'adicionar', element: <Private><AddClients /></Private> },
                    { path: ':id', element: <Private><Profile /></Private> },
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
        ]
    },
])