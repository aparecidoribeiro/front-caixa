import api from '@services/api'

export const patchProducts = (id, token, { name, description, code, price, quantity }) => {

    return api({
        method: 'patch',
        url: `products/${id}`,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }, data: {
            name: name,
            description: description,
            code: Number(code),
            price: price,
            quantity: Number((quantity))
        }
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })

}