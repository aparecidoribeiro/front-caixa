import api from "@services/api"

export const putProducts = ({ token }, { name, description, code, price, quantity }) => {
    return api({
        method: 'put',
        url: 'products',
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
    }).then(() => {
        return true
    }).catch(() => {
        return false
    })
}