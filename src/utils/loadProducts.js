import { setProducts } from '@features/products'
import { getProducts } from '@services/getProducts'

export async function loadProducts(dispatch, user) {
    const dados = await getProducts(user)

    dispatch(setProducts(dados))
}