import api from "@services/api"

export const getCaixa = (user) => {
    return api({
        method: 'get',
        url: 'transactions',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${user.token}`,
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            return response.data.data
        })
        .catch((err) => {
            console.log(err)
            return []
        })
}
