import api from "@services/api"

export const putCaixa = (user, { addCaixa, payment_type, client, addSheet }) => {


    return api({
        method: 'put',
        url: 'transactions',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${user.token}`,
            'Content-Type': 'application/json'
        },
        data: {
            "amount": addCaixa,
            "user_id": user.id,
            "payment_type": payment_type.value
        }
    })
        .then((response) => {
            return true
        })
        .catch((err) => {
            console.log(err)
            return false
        })

}