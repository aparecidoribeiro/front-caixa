

import { setHistory } from '@features/hitoryToday';
import { sumAmounts } from "@utils/sumAmounts";
import { getCaixa } from "../pages/Finance/Today/actions/getCaixa";

export async function loadData(dispatch, user) {

    const dados = await getCaixa(user)
    const amount = sumAmounts(dados)
    dispatch(setHistory({
        data: dados,
        amount: amount
    }))
}