import api from '@services/api'

export const patchProducts = (id, token, data) => {

    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('price', data.price)
    formData.append('code', data.code)
    formData.append('quantity', data.quantity)
    formData.append('image', data.image)
    formData.append('_method', "PATCH")

    return api({
        method: 'post',
        url: `products/${id}`,
        data: formData,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })

}