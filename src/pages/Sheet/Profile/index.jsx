import { X } from "lucide-react"
import useNavigation from '@hooks/useNavigation';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { setLoading } from "@features/loading"
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

const Profile = () => {

    const dispatch = useDispatch()
    const { returnRoute } = useNavigation()
    const { id } = useParams()

    const clients = useSelector(state => state.clients.data)
    const [client, setClient] = useState(null)

    useEffect(() => {
        // console.log(clients.find(client => client.id == id))

        const findClient = clients.find(item => item.id == id)
        setClient(findClient)
    }, [])


    if (!client) {
        dispatch(setLoading(true))

    } else {
        dispatch(setLoading(false))
        const dateUpdated = parseISO(client.updated_at)
        const dateFormatted = format(dateUpdated, "d 'de' MMMM yyyy", { locale: ptBR })
        return (
            <section className="pt-5">
                <div className='flex items-center gap-1 mb-7'>
                    <X
                        size={28}
                        className='cursor-pointer'
                        onClick={() => {
                            returnRoute()
                        }}
                    />
                    <h1 className='textarea-lg'>Ficha da cliente</h1>
                </div>
                <div className="bg-white px-3 py-4 rounded-lg text-sm">
                    <div className="flex flex-col gap-1">
                        <h2><strong>Nome:</strong> {client.name}</h2>
                        <h2><strong>Telefone:</strong> {client.phone}</h2>
                        <h2><strong>Dívida:</strong> R$50,00</h2>
                        <h2><strong>Última atualização:</strong> {dateFormatted}</h2>
                    </div>
                </div>
            </section>
        )
    }
}

export default Profile