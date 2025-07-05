import { Search as SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { filterSearch } from '@utils/filterSearch';
import { useDispatch } from 'react-redux';
import { setFilter } from '@features/products';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Search = () => {

    const products = useSelector(state => state.products.data)

    const [search, setSearch] = useState('')

    const arrayProducts = [...products]

    const location = useLocation()

    const dispatch = useDispatch()

    const searchValue = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        if (search === "") {
            dispatch(setFilter([]))
        } else {
            const resultFilter = filterSearch(arrayProducts, search)
            dispatch(setFilter(resultFilter))
        }
    }, [search])

    useEffect(() => {
        setSearch('')
    }, [location])


    return (
        <div className="mb-4 flex w-full h-8 rounded-full items-center bg-white-two relative px-3 
        border border-placerhold-color">
            <input
                className='bg-transparent outline-none w-[90%] text-base text-black-one placeholder:text-black-one'
                type="text"
                placeholder="Procure por um produto"
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