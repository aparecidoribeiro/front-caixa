import api from '@services/api'

export const patchProducts = (id, token, { name, description, code, price, quantity, image }) => {

    return api({
        method: 'patch',
        url: `products/${id}`,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }, data: {
            image: image,
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