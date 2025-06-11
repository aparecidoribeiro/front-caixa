import api from "@services/api"
import { toast } from "react-toastify"

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
            return toast.success(response.data.message)
        })
        .catch((err) => {
            console.log(err)
        })

}