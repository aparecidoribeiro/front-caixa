import api from "@services/api"

export const putProducts = (token, data) => {

    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('price', data.price)
    formData.append('code', data.code)
    formData.append('quantity', data.quantity)
    formData.append('image', data.image)
    formData.append('_method', "PUT")

    return api({
        method: 'post',
        url: 'products',
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