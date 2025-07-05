import { NumericFormat } from "react-number-format"
import { ShoppingCart, Trash2 } from 'lucide-react';
import DropdownMenu from "../DropdownMenu";
import { useDispatch, useSelector } from "react-redux";
import { setCart, removeCart, setQuantity } from "@features/cart";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { deleteProduct } from "@utils/deleteProduct";



const ProductCard = ({ name, description, price, quantity, id, quantitySelect }) => {

    const cart = useSelector(state => state.cart.data)
    const products = useSelector(state => state.products.data)
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()


    const changeSelect = (e) => {

        const quantitySelect = Number(e.target.value)

        dispatch(setQuantity(
            {
                id: id,
                quantity: quantitySelect
            })
        )
    }

    //Função para adicinar produtos ao carrinho
    const addCart = () => {
        //Verificar ser o produto ja foi adicionado ao carrinho
        const verify = cart.some((item) => item.item.id === id)

        if (verify) {
            toast.error("Esse produto já está no carrinho")
        } else {
            const filter = products.filter(product => product.id == id)
            dispatch(setCart(...filter))
        }
    }

    //Função para deletar produto do carrinho
    const delCart = () => {
        dispatch(removeCart(id))
    }

    const location = useLocation()

    const hiddenRoutes = ['/produtos/carrinho']
    const pathname = hiddenRoutes.includes(location.pathname)

    return (
        <div className="w-full grid grid-cols-[1fr,3fr,1fr] grid-rows-1s gap-2 bg-white px-2 py-3">
            <div className="w-[70px] h-[70px] relative">
                <DropdownMenu id={id} />
                <img
                    className="w-full h-full object-cover"
                    src="../public/produto.webp"
                />
            </div>
            <div className="grid grid-rows-[auto, auto, auto]">
                <h2 className="text-sm leading-4">{name}</h2>
                <p className="text-xs leading-4">{description}</p>
                <NumericFormat
                    className="font-medium text-primary leading-4 text-sm"
                    value={price}
                    prefix="R$"
                    decimalScale={2}
                    thousandSeparator="."
                    decimalSeparator=","
                    displayType="text"
                    fixedDecimalScale
                />
            </div>
            <div className="flex flex-col items-center gap-1">
                {!pathname ? <div className="text-center flex flex-col gap-1 w-[50px]">
                    <p className="text-xs mt-2">{quantity > 0 ? `Disp: ${quantity}` : `Disp: ${quantity}`}</p>
                    {quantity > 0 ?
                        <button
                            className="bg-primary p-2 flex justify-center items-center rounded-[4px] h-7"
                            onClick={addCart}
                        >
                            <ShoppingCart
                                size={18}
                                color="#fff"
                            />
                        </button>
                        :
                        //Botão de produto indisponível
                        <button
                            className="bg-black-one p-2 flex justify-center items-center rounded-[4px] w-full h-7"
                            onClick={() => deleteProduct(user, id, dispatch)}
                        >
                            <Trash2
                                size={18}
                                color="#fff"
                            />
                        </button>
                    }
                </div>
                    //Botão do carrinho
                    : <div className="text-center flex flex-col gap-2 w-[50px]">
                        <select className="bg-white outline-none border w-full"
                            value={quantitySelect}
                            onChange={changeSelect}
                        >
                            {
                                Array.from({ length: quantity }, (_, i) => (
                                    <option
                                        key={i + 1}
                                        value={i + 1}
                                    >{i + 1}
                                    </option>
                                ))
                            }
                        </select>
                        <button
                            className="bg-black-one p-2 flex justify-center items-center rounded-[4px] w-full h-7"
                            onClick={delCart}
                        >
                            <Trash2
                                size={18}
                                color="#fff"
                            />
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProductCard