import ProductCard from "@components/others/ProductCard"
import { CircleAlert } from 'lucide-react';
import { useSelector } from "react-redux";


const Available = () => {

    const products = useSelector(state => state.products)


    const arrayProducts = [...products.data].reverse()
    const arrayFilter = [...products.filter].reverse()

    {
        arrayProducts.length === 0 && (
            <h1 className="flex items-center gap-1 text-sm">
                <CircleAlert size={16} /> Nenhum produto cadastrado
            </h1>
        )
    }

    return (
        <section className="h-auto flex flex-col pb-[54px] gap-2 mt-5 items-center">
            <div className="mb-5">
                {arrayFilter.length > 0 ?
                    arrayFilter.map(item => {
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
                    : arrayProducts.map(item => {
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
                }
            </div>
        </section>
    )
}

export default Available