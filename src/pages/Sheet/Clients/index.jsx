import ClientCard from "@components/others/ClientCard"
import { CircleAlert } from "lucide-react"
import { useSelector } from "react-redux"

const Clients = () => {

    const clients = useSelector(state => state.clients)
    const search = useSelector(state => state.search.filter)

    const arrayClients = [...clients.data].reverse()
    const arrayFilter = [...search].reverse()

    if (arrayClients.length === 0) {
        return (
            <div className="flex flex-col gap-2 mt-7 items-center">
                <h1 className="flex items-center gap-1 text-sm text-center">
                    <CircleAlert size={16} /> Nenhum cliente cadastrado
                </h1>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col gap-2 mt-4 mb-4">
                {
                    arrayFilter.length > 0 ?
                        arrayFilter.map(item => {
                            return (
                                <ClientCard
                                    key={item.id}
                                    name={item.name}
                                    phone={item.phone}
                                    date={item.created_at}
                                />

                            )
                        }) :
                        arrayClients.map(item => {
                            return (
                                <ClientCard
                                    key={item.id}
                                    name={item.name}
                                    phone={item.phone}
                                    date={item.created_at}
                                />

                            )
                        })
                }
            </div>
        )
    }

}

export default Clients