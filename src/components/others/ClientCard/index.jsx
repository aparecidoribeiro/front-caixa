import { Trash2 } from "lucide-react"
import { format, parseISO } from 'date-fns';
import { ptBR } from "date-fns/locale";

const ClientCard = ({ name, phone, date }) => {

    const formatteObject = parseISO(date)
    const formatteDate = format(formatteObject, "dd 'de' MMMM", { locale: ptBR })

    return (
        <div className="w-full bg-white px-3 py-3 rounded-lg grid grid-cols-[3fr,auto] grid-rows-1">
            <div>
                <h2 className="text-base font-medium">{name}</h2>
                <h3 className="text-sm font-normal">{phone}</h3>
                <h4 className="text-xs font-normal">{formatteDate}</h4>
            </div>
            <div className="self-center">
                <button
                    className="bg-black-one p-2 flex justify-center items-center rounded-[4px] w-[50px] h-7"
                    onClick={() => console.log("Deletar")}
                >
                    <Trash2
                        size={18}
                        color="#fff"
                    />
                </button>
            </div>
        </div>
    )
}

export default ClientCard