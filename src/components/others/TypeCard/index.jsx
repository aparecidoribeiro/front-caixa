import { format, parseISO } from 'date-fns';
import { NumericFormat } from "react-number-format";
import { ptBR } from 'date-fns/locale';
import { ArrowRight } from 'lucide-react';

const TypeCard = ({ amount, paymentType, date }) => {

    const dateStandard = parseISO(date)
    const formatteDate = format(dateStandard, "EEEE", { locale: ptBR })
    const formatteTime = format(dateStandard, "HH:mm")

    let formattePaymente
    let urlIcon

    switch (paymentType) {
        case "pix":
            formattePaymente = "Pix"
            urlIcon = "pix-icon"
            break
        case "money":
            formattePaymente = "Dinheiro"
            urlIcon = "money-icon"
            break
        case "card":
            formattePaymente = "Cartão"
            urlIcon = "card-icon"
            break
    }

    const daySweek = formatteDate.charAt(0).toUpperCase() + formatteDate.slice(1)

    return (
        <div className='grid grid-cols-[auto_1fr_auto]'>
            <div className='col-start-1 self-center w-8 h-8 rounded-[50%] bg-green flex justify-center'>
                <img
                    src={`./src/assets/${urlIcon}.svg`}
                    alt="Icone de forma de pagamento"
                    className='w-5'
                />
            </div>
            <span className='col-start-2 ml-[6px]'>
                <h4 className='flex items-center gap-1 text-sm font-normal'>Pagamento via: {formattePaymente}</h4>
                <h3 className='text-[11px] italic'>{`${daySweek}, ${formatteTime}`}</h3>
            </span>
            <NumericFormat
                className='justify-end text-sm col-start-3'
                value={amount}
                prefix="R$"
                decimalScale={2}
                thousandSeparator="."
                decimalSeparator=","
                displayType="text"
                fixedDecimalScale
            />

        </div>
    )
}

export default TypeCard