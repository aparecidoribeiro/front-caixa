import { Search as SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { filterSearch } from '@utils/filterSearch';
import { useDispatch } from 'react-redux';
import { setFilter } from '@features/search';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Search = () => {

    const [search, setSearch] = useState('')

    const products = useSelector(state => state.products.data)
    const clients = useSelector(state => state.clients.data)
    const arrayProducts = [...products]
    const arrayClients = [...clients]

    const location = useLocation()
    const dispatch = useDispatch()

    const searchValue = (e) => {
        setSearch(e.target.value)
    }

    const [searchType, setSearchType] = useState(null)

    useEffect(() => {
        if (search === "") {
            dispatch(setFilter([]))
        } else if (searchType == "produtos") {
            const filterProducts = filterSearch(arrayProducts, search)
            dispatch(setFilter(filterProducts))
        } else {
            const filterClients = filterSearch(arrayClients, search)
            dispatch(setFilter(filterClients))
        }
    }, [search])


    useEffect(() => {
        setSearch('')

        const locationURL = location.pathname

        if (locationURL.includes('/produtos')) {
            setSearchType("produtos")
        } else {
            setSearchType("fichas")
        }


    }, [location])


    return (
        <div className="mb-4 flex w-full h-8 rounded-full items-center bg-white-two relative px-3 
        border border-placerhold-color">
            <input
                className='bg-transparent outline-none w-[90%] text-base text-black-one placeholder:text-black-one'
                type="text"
                placeholder={
                    searchType == "produtos" ? "Procurar produtos" : "Procurar clientes"
                }
                value={search}
                onChange={(e) => searchValue(e)}
            />
            <SearchIcon
                className='absolute right-3'
                size={20}
            />
        </div>
    )
}

export default Search