import ProductCard from "@components/others/ProductCard"
import { CircleAlert } from 'lucide-react';
import { useSelector } from "react-redux";


const Available = () => {

    const products = useSelector(state => state.products.data)

    const arrayProducts = [...products].reverse()

    return (
        <section className="flex flex-col gap-2 mt-5 pb-[54px] items-center">
            {arrayProducts.length === 0 ?
                <h1 className="flex items-center gap-1 text-sm">
                    <CircleAlert size={16} /> Nenhum produto cadastrado
                </h1>
                :
                arrayProducts.map(item => {
                    console.log(item)
                    return (
                        <ProductCard
                            key={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            quantity={item.quantity}
                        />
                    )
                })
            }
        </section>
    )
}

export default Available