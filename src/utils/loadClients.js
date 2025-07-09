import { setClients } from '@features/clients'
import { getClients } from '@services/getClients'

export async function loadClients(dispatch, token) {
    const response = await getClients(token)

    dispatch(setClients(response))
}