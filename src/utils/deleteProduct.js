import { loadProducts } from "@utils/loadProducts"
import { setLoading } from '@features/loading.js'
import { deleteProducts } from "@services/deleteProducts";
import { toast } from "react-toastify";
import { removeCart } from "@features/cart";


export const deleteProduct = async (token, id, dispatch, cart) => {


    dispatch(setLoading(true))

    const searchProduct = cart.find(product => product.item.id == id)


    const response = await deleteProducts(token, id)

    if (response) {

        await loadProducts(dispatch, token)

        if (searchProduct) {
            dispatch(removeCart(id))
        }
        toast.success("Produto deletado com sucesso")
    } else {
        toast.error("Erro ao deletar produto, tente novamente")
    }

    dispatch(setLoading(false))
}