

import { setHistory } from '@features/transactions';
import { sumAmounts } from "@utils/sumAmounts";
import { getCaixa } from "@services/getCaixa"

export async function loadData(dispatch, user) {

    const dados = await getCaixa(user)
    const amount = sumAmounts(dados)

    dispatch(setHistory({
        data: dados,
        amount: amount
    }))
}