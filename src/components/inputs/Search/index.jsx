import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
    return (
        <div className="mb-4 flex w-full h-9 rounded-full items-center bg-white-two relative px-3 
        border border-placerhold-color">
            <input
                className='bg-transparent outline-none w-[90%] text-base text-black-one placeholder:text-black-one'
                type="text"
                placeholder="Procure por um produto"
            />
            <SearchIcon
                className='absolute right-3'
                size={20}
            />
        </div>
    )
}

export default Search