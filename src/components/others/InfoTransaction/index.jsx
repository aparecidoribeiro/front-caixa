import { useEffect } from "react"
import { useState } from "react"
import { NumericFormat } from "react-number-format"
import { useSelector } from "react-redux"


const InfoTransaction = () => {

    const transactionsFilter = useSelector(state => state.transactions.filter.data)
    const date = useSelector(state => state.date)
    const startDate = date.startDate
    const endDate = date.endDate

    const [amounts, setAmounts] = useState({
        total: 0,
        money: 0,
        pix: 0,
        card: 0
    })


    function calcValues() {
        let total = 0
        let money = 0
        let pix = 0
        let card = 0

        transactionsFilter.forEach(item => {

            const itemValue = Number(item.amount)
            const itemType = item.payment_type

            switch (itemType) {
                case "money":
                    money += itemValue
                    break
                case "pix":
                    pix += itemValue
                    break;
                case "card":
                    card += itemValue
                    break;
            }
        })

        total = money + pix + card
        setAmounts({ total, money, pix, card })
    }

    useEffect(() => {
        calcValues()

    }, [transactionsFilter])

    return (
        <div className="bg-white flex flex-col gap-1 justify-center items-center rounded-lg p-4 mt-3 text-center">
            <div className="flex flex-col gap-2">
                <h2 className="font-normal text-xl mb-[-10px]">Total em caixa</h2>
                <NumericFormat
                    className="font-bold text-3xl"
                    value={amounts.total}
                    prefix="R$"
                    decimalScale={2}
                    thousandSeparator="."
                    decimalSeparator=","
                    displayType="text"
                    fixedDecimalScale
                />
                <span className="text-sm font-light">{startDate} - {endDate}</span>
            </div>
            <div className="text-center">
                <h3 className="text-base">Movimentação em caixa</h3>
                <p className="text-sm font-light">Dinheiro: <strong>
                    <NumericFormat
                        className='justify-end text-sm col-start-3'
                        value={amounts.money}
                        prefix="R$"
                        decimalScale={2}
                        thousandSeparator="."
                        decimalSeparator=","
                        displayType="text"
                        fixedDecimalScale
                    />
                </strong></p>
                <p className="text-sm font-light">Pix: <strong>
                    <NumericFormat
                        className='justify-end text-sm col-start-3'
                        value={amounts.pix}
                        prefix="R$"
                        decimalScale={2}
                        thousandSeparator="."
                        decimalSeparator=","
                        displayType="text"
                        fixedDecimalScale
                    />
                </strong></p>
                <p className="text-sm font-light">Cartão: <strong>
                    <NumericFormat
                        className='justify-end text-sm col-start-3'
                        value={amounts.card}
                        prefix="R$"
                        decimalScale={2}
                        thousandSeparator="."
                        decimalSeparator=","
                        displayType="text"
                        fixedDecimalScale
                    />
                </strong></p>
                <p className="text-sm font-light">Total em Produtos: <strong>
                    <NumericFormat
                        className='justify-end text-sm col-start-3'
                        value={0}
                        prefix="R$"
                        decimalScale={2}
                        thousandSeparator="."
                        decimalSeparator=","
                        displayType="text"
                        fixedDecimalScale
                    />
                </strong></p>
            </div>
        </div >
    )
}

export default InfoTransaction