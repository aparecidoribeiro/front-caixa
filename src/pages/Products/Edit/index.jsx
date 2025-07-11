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
import { removeCart } from "@features/cart";
import { validateInputs } from '@utils/validate'


const Edit = () => {

    const { id } = useParams()
    const { returnRoute } = useNavigation()

    const products = useSelector(state => state.products.data)
    const token = useSelector(state => state.auth.user.token)
    const cart = useSelector(state => state.cart.data)

    const [data, setData] = useState({
        image: null,
        name: "",
        description: "",
        price: null,
        quantity: "",
        code: ""
    })

    const [originalData, setOriginalData] = useState(null)


    const onFileChange = (e) => {
        const file = e.target.files[0]
        setData((prev) => ({ ...prev, image: file }))
    }

    useEffect(() => {

        const searchProduct = products.find(product => product.id == id)

        const product = {
            image: searchProduct.image_url,
            name: searchProduct.name,
            description: searchProduct.description,
            price: Number(searchProduct.price),
            quantity: searchProduct.quantity,
            code: searchProduct.code
        }

        setData(product)

        setOriginalData({ ...product })

    }, [])

    useEffect(() => {

    }, [])

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const verifyInputs = () => {
        const values = data.name.trim() === "" || data.description.trim() === ""
            || data.price === null || data.quantity === "" || data.code === ""

        if (values) {
            return true
        } else {
            return false
        }
    }

    const verifyValues = () => {
        return JSON.stringify(data) === JSON.stringify(originalData)
    }

    const updateProduct = async (e) => {
        e.preventDefault()


        if (verifyInputs()) {
            toast.error("Preencha todos os campos.")
        } else if (verifyValues()) {
            navigate(-1)
        } else {

            dispatch(setLoading(true))

            const response = await patchProducts(id, token, data)


            if (response.status === 200) {
                await loadProducts(dispatch, token)


                if (data.quantity == 0) {

                    const idNumber = Number(id)

                    const searchCart = cart.find(product => product.item.id === idNumber)

                    if (searchCart) {
                        dispatch(removeCart(idNumber))
                    }

                }

                navigate('/produtos')
                toast.success("Produto atualizado com sucesso")

            } else {
                toast.error(response.response.data.message)
            }

            dispatch(setLoading(false))
        }

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