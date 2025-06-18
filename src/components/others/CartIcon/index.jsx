import { ShoppingCart } from 'lucide-react';

const CartIcon = () => {

    let itens = 0

    return (
        <div className='relative'>
            <ShoppingCart
                size={30}
            />
            <div className='bg-primary w-4 h-4 rounded-full absolute top-0 right-[-5px] text-xs
             text-white flex items-center justify-center font-medium'>
                {itens}
            </div>

        </div>
    )
}

export default CartIcon