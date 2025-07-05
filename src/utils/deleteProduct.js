import { loadProducts } from "@utils/loadProducts"
import { setLoading } from '@features/loading.js'
import { deleteProducts } from "@services/deleteProducts";
import { toast } from "react-toastify";


export const deleteProduct = async ( user, id, dispatch ) => {

    dispatch(setLoading(true))
    const response = await deleteProducts(user.token, id)

    if (response) {
        await loadProducts(dispatch, user)
        toast.success("Produto deletado com sucesso")
    } else {
        toast.error("Erro ao deletar produto, tente novamente")
    }
    dispatch(setLoading(false))
}