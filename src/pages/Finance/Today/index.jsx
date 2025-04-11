import Button from "@components/inputs/Button"
import { useNavigate } from "react-router-dom"


const Today = () => {

    const Navigate = useNavigate()

    return (
        <div className="bg-white flex flex-col justify-center items-center gap-2 px-standard h-52 rounded-lg">
            <h3 className="font-normal text-sm mb-[-10px]">Valor no caixa hoje</h3>
            <h1 className="font-bold text-[42px]">R$10.49</h1>
            <Button
                text="Adicionar Caixa"
                style="w-[200px]"
                action={() => Navigate('/addCaixa')}
            />
        </div>
    )
}

export default Today