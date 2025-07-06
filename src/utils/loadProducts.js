import { setProducts } from '@features/products'
import { getProducts } from '@services/getProducts'

export async function loadProducts(dispatch, token) {
    const dados = await getProducts(token)

    dispatch(setProducts(dados))
}