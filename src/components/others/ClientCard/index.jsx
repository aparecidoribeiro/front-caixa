import { Trash2 } from "lucide-react"
import { format, parseISO } from 'date-fns';
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setLoading } from '@features/loading.js'
import { loadClients } from '@utils/loadClients'
import { deleteClients } from '@services/deleteClients'
import toast from "react-hot-toast";

const ClientCard = ({ name, phone, date, id }) => {

    const formatteObject = parseISO(date)
    const formatteDate = format(formatteObject, "dd 'de' MMMM", { locale: ptBR })


    const token = useSelector(state => state.auth.user.token)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const removeClient = async (e) => {
        e.stopPropagation()
        dispatch(setLoading(true))

        const response = await deleteClients(token, id)

        if (response.status === 200) {
            await loadClients(dispatch, token)
            navigate("/fichas")
            toast.success("Ficha deletada com sucesso",
                {
                    style: {
                        backgroundColor: '#000',
                        color: '#fff'
                    }
                }
            )
        } else {
            toast.error(response.response.data.message,
                {
                    style: {
                        backgroundColor: '#000',
                        color: '#fff'
                    }
                }
            )
        }

        dispatch(setLoading(false))

    }

    return (
        <div
            className="w-full bg-white px-3 py-3 rounded-lg grid grid-cols-[3fr,auto] grid-rows-1 cursor-pointer"
            onClick={() => navigate(`/fichas/${id}`)}
        >
            <div>
                <h2 className="text-base font-medium">{name}</h2>
                <h3 className="text-sm font-normal">{phone}</h3>
                <h4 className="text-xs font-normal">{formatteDate}</h4>
            </div>
            <div className="self-center">
                <button
                    className="bg-black-one p-2 flex justify-center items-center rounded-[4px] w-[50px] h-7 "
                    onClick={removeClient}
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