import { NumericFormat } from "react-number-format"
import { ShoppingCart } from 'lucide-react';
import DropdownMenu from "../DropdownMenu";

const ProductCard = () => {
    return (
        <div className="grid grid-cols-[auto,1fr,auto] grid-rows-1s gap-2 bg-white p-2">
            <div className="w-[70px] h-[70px] relative">
                <DropdownMenu />
                <img
                    className="w-full h-full object-cover"
                    src="./public/produto.webp"
                />
            </div>
            <div className="grid grid-rows-[auto, auto, auto]">
                <h2 className="text-sm leading-4">Kit Cabelos Cacheados</h2>
                <p className="text-xs leading-4">Shampoo, condicionador, máscara, leave-in </p>
                <NumericFormat
                    className=" font-medium text-primary leading-4 text-sm"
                    value={10.99}
                    prefix="R$"
                    decimalScale={2}
                    thousandSeparator="."
                    decimalSeparator=","
                    displayType="text"
                    fixedDecimalScale
                />
            </div>
            <div className="flex flex-col items-center gap-1">
                <p className="text-[10px]">Disp: 10</p>
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