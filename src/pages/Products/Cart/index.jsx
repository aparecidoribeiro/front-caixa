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
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Cart = () => {

    const { returnRoute } = useNavigation()

    const cart = useSelector(state => state.cart)
    const cartProducts = cart.data

    const [amountTotal, setAmountTotal] = useState(0)

    useEffect(() => {

        let totalAmount = 0

        cartProducts.forEach(product => {

            const price = Number(product.item.price)
            const quantity = product.quantity

            totalAmount += (price * quantity)

        })

        setAmountTotal(totalAmount)
    }, [cartProducts])


    const dispatch = useDispatch()
    const navigate = useNavigate()


    const finalizeSale = () => {

        if (cartProducts.length === 0) {
            toast.error('Não possui nenhum produto no carrinho',
                {
                    style: {
                        backgroundColor: '#000',
                        color: '#fff'
                    }
                }
            )
        } else {
            dispatch(setAmount(amountTotal))
            navigate('/produtos/adicionar_caixa')
        }

    }

    return (
        <section className="pt-5">
            <div className='flex items-center gap-1 mb-7 '>
                <X
                    size={28}
                    className='cursor-pointer'
                    onClick={() => {
                        returnRoute()
                    }}
                />
                <h1 className='textarea-lg'>Carrinho de produtos</h1>
            </div>
            <div className='flex flex-col items-center gap-2'>
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
                                image={item.item.image_url}
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
                            value={amountTotal}
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
                    action={finalizeSale}
                />
            </div>
        </section>
    )
}

export default Cart