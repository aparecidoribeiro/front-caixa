import api from "@services/api"

export const deleteClients = (token, id) => {
    return api({
        method: 'delete',
        url: `clients/${id}`,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            return response
        }).catch((err) => {
            return err
        })
}