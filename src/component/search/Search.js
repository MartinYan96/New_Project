import './search.scss'
import './search.media.scss'
import { FaSearch } from 'react-icons/fa'
import data from '../../resources/data/data'
import { useState } from 'react'
import ProductCard from '../productCard/ProductCard'
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux'
import { closeSearch, openSearch } from '../redux/closeAndOpenSearchWindow'

const Search = () => {
    const { products } = data().data
    const dispatch = useDispatch()
    const openSearchWindow = useSelector(state => state.search.searchWindowOpen)
    const [serachProducts, setSerachProducts] = useState('')
    const language = useSelector(state => state.language.language.search)

    const foundProducts = products.filter(product => {
        return product.name.toLowerCase().includes(serachProducts.toLowerCase())
    })

    const handleInputChange = (event) => {
        setSerachProducts(event.target.value);
    };


    return (
        <div className={!openSearchWindow ? 'search' : 'search active'}>
            <form action="" >
                <input placeholder={language.search}
                    type='text'
                    onChange={handleInputChange}
                    className={!openSearchWindow ? 'searchInput' : 'searchInput active'}
                    onClick={() => dispatch(openSearch())}
                />
            </form>
            <FaSearch className='searchIcon' />
            {!openSearchWindow ? '' : <div className='searchList'>
                <div className="searchInfo">
                    <div className='searchResult'>
                        <div>
                            <p>{serachProducts === '' ? 0 : foundProducts.length}</p>
                            <p>{language.results}</p>
                        </div>
                        <GrClose className='searchWindowCloaseIcon' onClick={() => dispatch(closeSearch())} />
                    </div>
                    <p className='searchProducts'>{language.products}</p>
                </div>
                <div className='foundProducts'>
                    {serachProducts === '' ? '' : foundProducts.map(product => <ProductCard key={product.id} data={product} />)}
                </div>
            </div>}
        </div>
    )
}

export default Search