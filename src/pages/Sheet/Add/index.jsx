import InputField from "@components/inputs/InputField"
import Button from "@components/inputs/Button"
import { useState } from "react"
import { PatternFormat } from "react-number-format"
import { toast } from "react-toastify"
import { putClients } from "@services/putClients"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setLoading } from '@features/loading.js'
import { loadClients } from '@utils/loadClients'
import { useNavigate } from "react-router-dom"

const Add = () => {


    const [data, setData] = useState({
        name: "",
        phone: " "
    })

    const token = useSelector(state => state.auth.user.token)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const verifyInpts = () => {
        return data.name.trim() === "" || data.phone.trim() === ""
    }

    const createClient = async (e) => {
        e.preventDefault()

        if (verifyInpts()) {
            toast.error("Preencha todos os campos.")
        } else {
            dispatch(setLoading(true))

            const response = await putClients(token, data)

            if (response.status === 200) {
                await loadClients(dispatch, token)
                navigate("/fichas")
                toast.success("Ficha criada com sucesso")
            } else {
                toast.error(response.response.data.message)
            }

            dispatch(setLoading(false))
        }
    }

    return (
        <div>
            <h2 className="text-xl text-center mt-4 mb-5">Adicionar uma nova cliente</h2>
            <form
                className="flex flex-col gap-5"
                onSubmit={(createClient)}
            >
                <div className="flex flex-col gap-2 mb-8">
                    <InputField
                        type={"text"}
                        label={"Nome da cliente"}
                        placeholder={"Informe o nome da cliente"}
                        name={"name"}
                        value={data.name}
                        action={setData}
                    />
                    <div className="relative flex flex-col w-full">
                        <label>Telefone</label>
                        <span className='flex items-center'>
                            <PatternFormat
                                className="w-full min-h-[38px] border-standard border-border-color rounded-[4px] px-[10px] py-1 bg-transparent 
                    outline-none placeholder-placerhold-color text-base"
                                format="(##) #####-####"
                                placeholder="Ex: (12) 34567-8910"
                                value={data.phone}
                                onChange={(e) => setData((prev) => ({ ...prev, phone: e.target.value }))}
                            />
                        </span>
                    </div>
                    <Button
                        text={"Salvar"}
                        style={"mt-5"}
                    />
                </div>
            </form>
        </div>
    )
}

export default Add