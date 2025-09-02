import InputField from "@components/inputs/InputField"
import { useState } from "react"
import InputNumberAlt from "@components/inputs/InputNumberAlt"
import Button from "@components/inputs/Button"
import { setLoading } from '@features/loading.js'
import { putProducts } from '@services/putProducts'
import { useSelector, useDispatch } from "react-redux"
import { loadProducts } from "@utils/loadProducts"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const Add = () => {

    const [data, setData] = useState({
        image: null,
        name: "",
        description: "",
        price: null,
        quantity: "",
        code: ""
    })

    const token = useSelector(state => state.auth.user.token)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const verifyInpts = () => {
        const values = data.name.trim() === "" || data.description.trim() === ""
            || data.price === null || data.quantity.trim() === "" || data.code.trim() === "" || data.image === null

        if (values) {
            return true
        } else {
            return false
        }
    }


    const createProdct = async (e) => {
        e.preventDefault()

        if (verifyInpts()) {
            toast.error("Preencha todos os campos",
                {
                    style: {
                        backgroundColor: '#000',
                        color: '#fff'
                    }
                }
            )
        } else {

            dispatch(setLoading(true))


            const response = await putProducts(token, data)

            if (response.status === 200) {
                await loadProducts(dispatch, token)
                navigate("/produtos")
                toast.success("Produto criado com sucesso",
                    {
                        style: {
                            backgroundColor: '#000',
                            color: '#fff'
                        }
                    }
                )
            } else {
                console.log(response)
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

    }

    const onFileChange = (e) => {
        const file = e.target.files[0]
        setData((prev) => ({ ...prev, image: file }))
    }

    return (
        <div>
            <h2 className="text-xl text-center mt-4 mb-5">Adicionar um novo produto</h2>
            <form
                onSubmit={createProdct}
                className="flex flex-col gap-5">
                <input
                    type="file"
                    accept="image/*"
                    className="file-input file-input-ghost file-input-md"
                    onChange={onFileChange} />
                <div className="flex flex-col gap-2 mb-8">
                    <InputField
                        type={"text"}
                        label={"Nome"}
                        placeholder={"Informe o nome do produto ou kit"}
                        name={"name"}
                        value={data.name}
                        action={setData}
                    />
                    <InputField
                        type={"text"}
                        label={"Descrição"}
                        placeholder={"Breve descrição do produto ou kit"}
                        name={"description"}
                        value={data.description}
                        action={setData}
                    />
                    <InputNumberAlt
                        label={"Preço"}
                        placeholder={"Informe o preço"}
                        name={"price"}
                        value={data.price}
                        action={setData}
                    />
                    <InputField
                        type={"number"}
                        label={"Estoque"}
                        placeholder={"Informe a quantidade em estoque"}
                        name={"quantity"}
                        value={data.quantity}
                        action={setData}
                    />
                    <InputField
                        type={"number"}
                        label={"Código"}
                        placeholder={"Informe o código do produto"}
                        name={"code"}
                        value={data.code}
                        action={setData}
                    />
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