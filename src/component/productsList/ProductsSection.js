import './productsSection.scss'
import './productsSection.media.scss'
import { useEffect, useState } from 'react';
import SortProduct from './SortProducts';
import data from '../../resources/data/data';
import FilteredPriceProductList from './FilteredPriceProductList';
import ProductFilters from './ProductFilters'
import { useSelector } from 'react-redux';



const ProductsSection = ({ categorie,setPage }) => {

    const { products } = data().data
    const [onSaleInput, setOnSaleInput] = useState(false);
    const [onNewInput, setonNewInput] = useState(false);
    const [minPriceProducts, setMinPriceProducts] = useState();
    const [maxPriceProducts, setMaxPriceProducts] = useState();
    const openAndCloseFiltersBar = useSelector(state => state.filters.filterBarActive)
    const productsThisPage = products.filter(product => {
        if (categorie.categorie === 'ԶԵՂՉ' || categorie.categorie === 'РАСПРОДАЖА') {
            return product.sale !== ''
        }
        else if (categorie.categorie === 'ՆՈՐ' || categorie.categorie === 'НОВЫЕ') {
            return product.news
        }
        else {
            return (
                product.categorie.arm === categorie.categorie ||
                product.categorie.rus === categorie.categorie
            )
        }
    })


    useEffect(() => {
        categorie.categorie === 'ԶԵՂՉ' || categorie.categorie === 'РАСПРОДАЖА' ? setOnSaleInput(true) : setOnSaleInput(false)
        categorie.categorie === 'ՆՈՐ' || categorie.categorie === 'НОВЫЕ' ? setonNewInput(true) : setonNewInput(false)
    }, [categorie])


    const [product, setProduct] = useState(productsThisPage);
    const [filteredProducts, setFilteredProducts] = useState(productsThisPage)



    const recommended = [...filteredProducts]

    return (
        <>
            <ProductFilters setFilteredProducts={setFilteredProducts} filteredProducts={filteredProducts} categorie={categorie} productsThisPage={productsThisPage} product={product} setProduct={setProduct} onSaleInput={onSaleInput} onNewInput={onNewInput} setMinPriceProducts={setMinPriceProducts} setMaxPriceProducts={setMaxPriceProducts} />
            <section className={openAndCloseFiltersBar ? 'productSection active' : 'productSection'}>
                <div className='productList'>
                    <SortProduct filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} />
                    <div className='products'>
                        <FilteredPriceProductList recommended={recommended} minPriceToggle={minPriceProducts} maxPriceToggle={maxPriceProducts} />
                    </div>
                    <button className='button'>TRY IT</button>
                </div>
            </section>
        </>
    )
}

export default ProductsSection


