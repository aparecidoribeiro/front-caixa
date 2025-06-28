import { X } from 'lucide-react';
import useNavigation from '@hooks/useNavigation';
import { useSelector } from 'react-redux';
import { CircleAlert } from 'lucide-react';
import ProductCard from '@components/others/ProductCard';
import { useEffect } from 'react';
import { NumericFormat } from 'react-number-format';
import Button from '@components/inputs/Button';
import { useDispatch } from 'react-redux';
import { setAmount } from '@features/cart';

const Cart = () => {

    const { returnRoute } = useNavigation()

    const cart = useSelector(state => state.cart)
    const cartProducts = cart.data

    const dispatch = useDispatch()

    //Array com o produtos que estão no carrinho

    useEffect(() => {
        const amountProducts = () => {
            let amount = 0

            cartProducts.forEach(item => {
                const price = item.item.price
                const quantity = item.quantity

                amount += (price * quantity)
            })
            dispatch(setAmount(amount))
        }

        amountProducts()
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
            <div className='mt-7 flex flex-col items-center gap-2'>
                {cartProducts.length > 0 ?
                    cartProducts.map(item => {
                        return (
                            <ProductCard
                                key={item.item.id}
                                name={item.item.name}
                                description={item.item.description}
                                price={item.item.price}
                                quantity={item.item.quantity}
                                id={item.item.id}
                                quantitySelect={item.quantity}
                            />
                        )
                    })
                    :
                    <h2 className="flex items-center gap-1 text-sm">
                        <CircleAlert size={16} /> Nenhum produto no carrinho
                    </h2>

                }
            </div>
            <div className='w-full bg-white fixed bottom-0 left-0 px-standard pb-8 pt-3 flex flex-col gap-3'>
                <div>
                    <h2 className='text-base font-normal'>Detalhes de pagamento</h2>
                    <h3 className='text-sm'>Total dos produtos: <span>
                        <NumericFormat
                            className="font-medium"
                            value={cart.amount}
                            prefix="R$"
                            decimalScale={2}
                            thousandSeparator="."
                            decimalSeparator=","
                            displayType="text"
                            fixedDecimalScale
                        />
                    </span>
                    </h3>
                </div>
                <Button
                    text={'Finalizar venda'}
                    action={() => console.log('Vendido')}
                />
            </div>
        </section>
    )
}

export default Cart