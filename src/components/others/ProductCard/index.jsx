import { NumericFormat } from "react-number-format"
import { ShoppingCart } from 'lucide-react';
import DropdownMenu from "../DropdownMenu";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "@features/cart";
import { toast } from "react-toastify";

const ProductCard = ({ name, description, price, quantity, id }) => {


    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.data)

    //Função para adicinar produtos ao carrinho
    const addCart = () => {
        //Verificar ser o produto ja foi adicionado ao carrinho
        const verify = cart.some((item) => item.id === id)

        if (verify) {
            toast.error("Esse produto já está no carrinho")
        } else {
            dispatch(setCart(id))
        }
    }

    return (
        <div className="w-full grid grid-cols-[1fr,3fr,1fr] grid-rows-1s gap-2 bg-white p-2">
            <div className="w-[70px] h-[70px] relative">
                <DropdownMenu />
                <img
                    className="w-full h-full object-cover"
                    src="./public/produto.webp"
                />
            </div>
            <div className="grid grid-rows-[auto, auto, auto]">
                <h2 className="text-sm leading-4">{name}</h2>
                <p className="text-xs leading-4">{description}</p>
                <NumericFormat
                    className=" font-medium text-primary leading-4 text-sm"
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
                <p className="text-[10px]">Disp: {quantity}</p>
                <button
                    className="bg-primary p-2 flex justify-center items-center rounded-[4px] w-full max-w-10 h-7"
                    onClick={addCart}
                >
                    <ShoppingCart
                        size={18}
                        color="#fff"
                    />
                </button>
            </div>
        </div>
    )
}

export default ProductCard