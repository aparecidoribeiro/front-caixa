import api from "@services/api"

export const deleteProducts = (token, id) => {
    return api({
        method: 'delete',
        url: `products/${id}`,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
        .then(() => {
            return true
        }).catch(() => {
            return false
        })
}