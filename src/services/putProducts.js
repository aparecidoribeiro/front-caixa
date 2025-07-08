import api from "@services/api"

export const putProducts = (token, { name, description, code, price, quantity, image_url }) => {

    const formData = new FormData()

    formData.append('name', name)
    formData.append('description', description)
    formData.append('price', price)
    formData.append('code', code)
    formData.append('quantity', quantity)
    formData.append('image_url', image_url)


    return api({
        method: 'put',
        url: 'products',
        formData,
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