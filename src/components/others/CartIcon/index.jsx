import { ShoppingCart } from 'lucide-react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const CartIcon = () => {

    let itens = 0

    const cart = useSelector(state => state.cart.data)

    useEffect(() => {
    }, [cart])

    return (
        <div className='relative'>
            <ShoppingCart
                size={30}
            />
            <div className='bg-primary w-4 h-4 rounded-full absolute top-0 right-[-5px] text-xs
             text-white flex items-center justify-center font-medium'>
                {cart.length}
            </div>

        </div>
    )
}

export default CartIcon