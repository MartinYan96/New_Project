import './productFilters.scss'
import './productFilters.media.scss'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeAndOpenFiltersBar } from '../redux/closeAndOpenFiltersBar';

const ProductFilters = ({ product, productsThisPage, categorie, filteredProducts, setFilteredProducts, setProduct, onSaleInput, onNewInput, setMinPriceProducts, setMaxPriceProducts }) => {
    const openAndCloseFiltersBar = useSelector(state => state.filters.filterBarActive)
    const [onSale, setOnSale] = useState(false);
    const [onNew, setOnNew] = useState(false);

    const saleProducts = product.filter(product => product.sale !== '')
    const newProducts = product.filter(product => product.news)

    const dispatch = useDispatch()

    useEffect(() => {
        setProduct(productsThisPage)
        setOnSale(false)
        setOnNew(false)
    }, [categorie])

    useEffect(() => {
        openAndCloseFiltersBar ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }, [openAndCloseFiltersBar])

    function productfiltering() {
        if (onNew) {
            return newProducts
        }
        else if (onSale) {
            return saleProducts
        }
        else {
            return productsThisPage
        }

    }

    const onSaleProductsActive = () => {
        setOnNew(false)
        setOnSale(true)
    }
    const onNewProductsActive = () => {
        setOnNew(true)
        setOnSale(false)
    }

    useEffect(() => {
        setFilteredProducts(productfiltering())
    }, [onSale, onNew, categorie])

    const prices = filteredProducts.map(prices => {
        return prices.price
    })

    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    const [maxPriceToggle, setMaxPriceToggle] = useState(maxPrice);
    const [minPriceToggle, setMinPriceToggle] = useState(minPrice);

    useEffect(() => {
        setMaxPriceProducts(maxPriceToggle)
        setMinPriceProducts(minPriceToggle)
    }, [minPriceToggle, maxPriceToggle])

    useEffect(() => {
        setMaxPriceToggle(maxPrice)
    }, [maxPrice])

    useEffect(() => {
        setMinPriceToggle(minPrice)
    }, [minPrice])


    const handleMaxPriceChange = (event) => {
        setMaxPriceToggle(event.target.value);
    };

    const handleMinPriceChange = (event) => {
        setMinPriceToggle(event.target.value);
    };
    const [selectedSubcategories, setSelectedSubcategories] = useState([]);


    const handleSubcategoryChange = (subcategory) => {
        if (selectedSubcategories.includes(subcategory)) {
            setSelectedSubcategories(selectedSubcategories.filter((item) => item !== subcategory));
        } else {
            setSelectedSubcategories([...selectedSubcategories, subcategory]);
        }
    };

    const filteredProduct = selectedSubcategories.length > 0
        ? productsThisPage.filter((product) => (selectedSubcategories.includes(product.categorie.subcategorie.arm)) || (selectedSubcategories.includes(product.categorie.subcategorie.rus)))
        : productsThisPage;


    useEffect(() => {
        setFilteredProducts(filteredProduct)
    }, [selectedSubcategories])


    return (
        <>
            <div className={!openAndCloseFiltersBar ? 'effect' : 'effect active'} onClick={() => dispatch(closeAndOpenFiltersBar())}></div>
            <div className={!openAndCloseFiltersBar ? 'filtersBar ' : 'filtersBar active'} >
                <div className='productFilters'>
                    <div className='productPriceFilter'>
                        <h3 className='productFiltersTitle'>PRICE</h3>
                        <div className='tooltipPrice'>
                            <p className='tooltipPriceMin'>от</p>
                            <p className='tooltipPriceMax'>до</p>
                        </div>
                        <div className='togglePriceInputs'>
                            <input type="text" placeholder={onSale && filteredProducts.length === 0 ? 0 : minPriceToggle} min={minPrice} max={maxPrice} onChange={handleMinPriceChange} />
                            <input type="text" placeholder={onSale && filteredProducts.length === 0 ? 0 : maxPriceToggle} min={minPrice} max={maxPrice} onChange={handleMaxPriceChange} />
                        </div>
                    </div>
                    {onSaleInput ? '' :
                        <label className='onSaleInput'  >
                            <div>
                                <h3 className='productFiltersTitle'>ON SALE</h3>
                                <input type="checkbox" checked={onSale} onChange={() => !onSale ? onSaleProductsActive() : setOnSale(false)} />
                            </div>
                        </label>
                    }
                    {onNewInput ? '' :
                        <label className='onNewInput' >
                            <div>
                                <h3 className='productFiltersTitle'>NEW</h3>
                                <input type="checkbox" checked={onNew} onChange={() => !onNew ? onNewProductsActive() : setOnNew(false)} />
                            </div>
                        </label>
                    }

                    <div className='subCategoriesToggleList'>
                        <h3 className='productFiltersTitle'>CATEGORY</h3>
                        {categorie.submenu.map((submenu, index) => {
                            return (
                                <div className='subCategoriesList' key={submenu.categorie}>
                                    <div className='subCategories' style={{ display: 'flex' }}>
                                        <label className='subCategorieInputs'>
                                            <input type="checkbox"
                                                value={submenu.categorie}
                                                checked={selectedSubcategories.includes(submenu.categorie)}
                                                onChange={() => handleSubcategoryChange(submenu.categorie)}
                                            />
                                            {submenu.categorie}
                                        </label>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductFilters