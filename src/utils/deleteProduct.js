import { loadProducts } from "@utils/loadProducts"
import { setLoading } from '@features/loading.js'
import { deleteProducts } from "@services/deleteProducts";
import { removeCart } from "@features/cart";
import toast from "react-hot-toast";


export const deleteProduct = async (token, id, dispatch, cart) => {


    dispatch(setLoading(true))

    const searchProduct = cart.find(product => product.item.id == id)


    const response = await deleteProducts(token, id)

    if (response) {

        await loadProducts(dispatch, token)

        if (searchProduct) {
            dispatch(removeCart(id))
        }
        toast.success("Produto deletado com sucesso",
            {
                style: {
                    backgroundColor: '#000',
                    color: '#fff'
                }
            }
        )
    } else {
        toast.error("Erro ao deletar produto, tente novamente",
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