import { X } from 'lucide-react';
import useNavigation from '@hooks/useNavigation';

const Cart = () => {

    const { returnRoute } = useNavigation()

    return (
        <section className="pt-5">
            <div className='flex items-center gap-1'>
                <X
                    size={28}
                    className='cursor-pointer'
                    onClick={() => {
                        returnRoute()
                    }}
                />
                <h1 className='textarea-lg'>Carrinho de produtos</h1>
            </div>
        </section>
    )
}

export default Cart