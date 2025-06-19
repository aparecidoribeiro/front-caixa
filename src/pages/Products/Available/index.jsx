import ProductCard from "@components/others/ProductCard"
import { useEffect } from "react"
import { getProducts } from "@services/getProducts"
import { useSelector } from "react-redux"
import { CircleAlert } from 'lucide-react';


const Available = () => {

    const user = useSelector(state => state.auth.user)

    let dadosItens = []

    async function teste() {
        const dados = await getProducts(user)

        dadosItens.push(dados)

    }

    useEffect(() => {
        teste()
    }, [])

    console.log(dadosItens)
    return (
        <section className="flex flex-col gap-2 mt-5 pb-[54px] items-center">
            {dadosItens.length === 0 ?
                <h1 className="flex items-center gap-1 text-sm">
                    <CircleAlert size={16} /> Nenhum produto cadastrado
                </h1>
                : ""}
        </section>
    )
}

export default Available