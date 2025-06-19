import { NumericFormat } from "react-number-format"
import { ShoppingCart } from 'lucide-react';
import DropdownMenu from "../DropdownMenu";

const ProductCard = ({ name, description, price, quantity }) => {
    return (
        <div className="grid grid-cols-[1fr,3fr,1fr] grid-rows-1s gap-2 bg-white p-2">
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
                    className="bg-primary p-2 flex justify-center rounded-md w-full"
                    onClick={() => console.log("Adicionado ao Carrinho")}
                >
                    <ShoppingCart
                        size={20}
                        color="#fff"
                    />
                </button>
            </div>
        </div>
    )
}

export default ProductCard