import { X } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"
import useNavigation from '@hooks/useNavigation';
import InputNumberAlt from "@components/inputs/InputNumberAlt"
import InputField from "@components/inputs/InputField"
import Button from "@components/inputs/Button"
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "@features/loading"
import { patchProducts } from '@services/patchProducts'
import { loadProducts } from "@utils/loadProducts"
import { toast } from "react-toastify";

const Edit = () => {

    const { id } = useParams()
    const { returnRoute } = useNavigation()

    const products = useSelector(state => state.products.data)
    const token = useSelector(state => state.auth.user.token)

    const [data, setData] = useState({
        image: null,
        name: "",
        description: "",
        price: null,
        quantity: "",
        code: ""
    })


    const onFileChange = (e) => {
        const file = e.target.files[0].name
        setData((prev) => ({ ...prev, image: file }))
    }

    useEffect(() => {

        const searchProduct = products.find(product => product.id == id)

        setData({
            image: searchProduct.image_url,
            name: searchProduct.name,
            description: searchProduct.description,
            price: searchProduct.price,
            quantity: searchProduct.quantity,
            code: searchProduct.code
        })

    }, [])


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const updateProduct = async (e) => {
        e.preventDefault()

        dispatch(setLoading(true))

        const response = await patchProducts(id, token, data)

        if (response.status === 200) {
            await loadProducts(dispatch, token)
            navigate('/produtos')
            toast.success("Produto atualizado com sucesso")

        } else {
            toast.error(response.response.data.message || "Erro ao atualizar produto, tente novamente")
        }

        dispatch(setLoading(false))

    }

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
                <h1 className='textarea-lg'>Editar produto</h1>
            </div>
            <form
                onSubmit={updateProduct}
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

export default Edit