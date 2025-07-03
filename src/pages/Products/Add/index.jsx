import InputField from "@components/inputs/InputField"
import { useState } from "react"
import InputNumberAlt from "@components/inputs/InputNumberAlt"
import Button from "@components/inputs/Button"
import { toast } from "react-toastify"
import { setLoading } from '@features/loading.js'
import { putProducts } from '@services/putProducts'
import { useSelector, useDispatch } from "react-redux"
import { loadProducts } from "@utils/loadProducts"

const Add = () => {

    const [data, setData] = useState({
        image: null,
        name: "",
        description: "",
        price: null,
        quantity: "",
        code: ""
    })


    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()


    const verifyInpts = () => {
        const values = data.name.trim() === "" || data.description.trim() === "" || data.price === null || data.quantity === ""

        if (values) {
            return true
        } else {
            return false
        }
    }

    const createProdct = async (e) => {
        e.preventDefault()

        const result = verifyInpts()

        if (result) {
            toast.error("Preencha todos os campos.")
        } else {
            dispatch(setLoading(true))
            const response = await putProducts(user, data)

            if (response) {
                await loadProducts(dispatch, user)
                toast.success("Produto criado com sucesso")
            } else {
                toast.error("Erro ao criar produto, tente novamente")
            }

            dispatch(setLoading(false))
        }

    }

    const onFileChange = (e) => {
        const file = e.target.files[0].name
        setData((prev) => ({...prev, image: file }))
    }

    return (
        <section className=" mt-5 pb-[54px] flex flex-col gap-5">
            <h2 className="text-xl text-center mt-3">Adicione um novo produto</h2>
            <form
                onSubmit={createProdct}
                className="flex flex-col gap-5">
                <input
                    type="file"
                    className="file-input file-input-ghost file-input-md"
                    onChange={onFileChange} />
                <div className="flex flex-col gap-2 mb-5">
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
        </section>
    )
}

export default Add