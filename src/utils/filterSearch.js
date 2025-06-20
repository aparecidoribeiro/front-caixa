

export const filterSearch = (array, search) => {
    return array.filter(item => {
        return item.name.toLowerCase().startsWith(search.toLowerCase())
    })
}