import api from "@services/api"

export const putClients = (token, { name, phone }) => {
    return api({
        method: 'put',
        url: 'clients',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data: {
            'name': name,
            'phone': phone
        }
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}