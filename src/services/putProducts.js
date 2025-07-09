import api from "@services/api"

export const putProducts = (token, { name, description, code, price, quantity, image }) => {

    const formData = new FormData()

    formData.append('name', name)
    formData.append('description', description)
    formData.append('price', price)
    formData.append('code', code)
    formData.append('quantity', quantity)
    formData.append('image', image)

    return api({
        method: 'put',
        url: 'products',
        data: formData,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        },
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}