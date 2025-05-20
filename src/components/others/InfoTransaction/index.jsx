import { useSelector } from "react-redux"


const InfoTransaction = () => {


    const date = useSelector(state => state.date)

    const startDate = date.startDate
    const endDate = date.endDate

    return (
        <div className="bg-white flex flex-col gap-1 justify-center items-center rounded-lg p-4 mt-5 text-center">
            <div className="flex flex-col gap-2">
                <h2 className="font-normal text-xl mb-[-10px]">Total em caixa</h2>
                <p className="font-bold text-3xl">R$10,49</p>
                <span className="text-sm font-light">{startDate} - {endDate}</span>
            </div>
            <div className="text-center">
                <h3 className="text-base">Movimentação em caixa</h3>
                <p className="text-sm font-light">Pix: <strong>R$0,00</strong></p>
                <p className="text-sm font-light">Cartão: <strong>R$0,00</strong></p>
                <p className="text-sm font-light">Dinheiro: <strong>R$0,00</strong></p>
                <p className="text-sm font-light">Total de Produtos: <strong>R$0,00</strong></p>
            </div>
        </div>
    )
}

export default InfoTransaction