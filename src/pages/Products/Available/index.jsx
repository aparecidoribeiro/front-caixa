import ProductCard from "@components/others/ProductCard"
import { CircleAlert } from 'lucide-react';
import { useSelector } from "react-redux";


const Available = () => {

    const products = useSelector(state => state.products)


    const arrayProducts = [...products.data].reverse()
    const arrayFilter = [...products.filter].reverse()


    if (arrayProducts.length === 0) {
        return (
            <div className="flex flex-col gap-2 mt-4 items-center">
                <h1 className="flex items-center gap-1 text-sm text-center">
                    <CircleAlert size={16} /> Nenhum produto cadastrado
                </h1>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col gap-2 mt-4 mb-4">
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
                    : arrayProducts.filter(item => item.quantity > 0)
                        .map(item => (
                            < ProductCard
                                key={item.id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                quantity={item.quantity}
                                id={item.id}
                            />
                        ))
                }
            </div>
        )
    }

}

export default Available