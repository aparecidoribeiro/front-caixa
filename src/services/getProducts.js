import api from "@services/api"

export const getProducts = async (token) => {

    let currentPage = 1
    let lastPage = 1
    let dados = []

    try {
        while (currentPage <= lastPage) {
            const response = await api({
                method: 'get',
                url: `products?1=${currentPage}`,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })

            if (response.data.current_page === 1) {
                lastPage = response.data.last_page;
            }

            dados.push(...response.data.data);

            currentPage++
        }

        return dados

    }
    catch (err) {
        return []
    }

}