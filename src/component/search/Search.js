import './search.scss'
import './search.media.scss'

import { FaSearch } from 'react-icons/fa'

const Search = () => {
    return (
        <div className='search'>
            <form action="" >
                <input placeholder='Search' type='text' className='searchInput'/>
            </form>
            <FaSearch className='searchIcon'/>
        </div>
    )
}

export default Search