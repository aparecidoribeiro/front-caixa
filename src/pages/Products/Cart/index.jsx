import { X } from 'lucide-react';
import useNavigation from '@hooks/useNavigation';
import { useSelector } from 'react-redux';
import { CircleAlert } from 'lucide-react';
import ProductCard from '@components/others/ProductCard';
import { useEffect } from 'react';
import { useState } from 'react';

const Cart = () => {

    const { returnRoute } = useNavigation()

    const cart = useSelector(state => state.cart.data)
    const products = useSelector(state => state.products.data)

    const [array, setArray] = useState([])

    useEffect(() => {
        const searchProducts = () => {
            let result = []
            cart.forEach(item => {
                const filter = products.filter(product => product.id == item.id)
                result.push(...filter)
            })

            setArray(result)
        }

        if (cart.length > 0) {
            searchProducts()
        }
    }, [cart])


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
            <div className='mt-10 flex flex-col items-center gap-2'>
                {cart.length > 0 ?
                    array.map(item => {
                        return (
                            <ProductCard
                                key={item.id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                quantity={item.quantity}
                                id={item.id}
                            />
                        )
                    })
                    :
                    <h2 className="flex items-center gap-1 text-sm">
                        <CircleAlert size={16} /> Nenhum produto no carrinho
                    </h2>

                }
            </div>
        </section>
    )
}

export default Cart