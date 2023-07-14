import './productsSection.scss'
import './productsSection.media.scss'
import { useState } from 'react';
import { data } from '../../resources/products/products'
import ProductCard from '../productCard/ProductCard';

const ProductsSection = () => {
    const prices = data.products.map((product) => product.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const [price, setPrice] = useState(maxPrice);
    const [onSale, setOnSale] = useState(false);


    const handleMinPriceChange = (event) => {
        setPrice(event.target.value);
    };


    const FilteredProductList = () => data.products.map(product => {
        if ((onSale && product.sale && product.price <= price) || (!onSale && product.price <= price)) {
            return (
                <ProductCard key={product.id} data={product} />
            )
        }
    })

    return (
        <section className='productSection'>
            <div className='productFilters'>
                <div className='productPriceFilter'>
                    <h3 className='productFiltersTitle'>PRICE</h3>
                    <input type="range" min={minPrice} value={price} max={maxPrice} onChange={handleMinPriceChange} />
                    <div className='tooltipPrice'>
                        <p className='tooltipPriceMin'>
                            {price}
                        </p>
                        <p className='tooltipPriceMax'>

                            {maxPrice}
                        </p>
                    </div>
                </div>
                <div>
                    <h3 className='productFiltersTitle'>ON SALE</h3>
                    <input type="checkbox" checked={onSale} onChange={() => !onSale ? setOnSale(true) : setOnSale(false)} />
                </div>
                <div>
                    <h3 className='productFiltersTitle'>INVENTORY</h3>
                    <input type="checkbox" />
                </div>
                <div>
                    <h3 className='productFiltersTitle'>CATEGORY</h3>
                    <input type="checkbox" />
                </div>
            </div>
            <div className='productList'>
                <div className='products'>
                    <FilteredProductList />
                </div>
                <button className='button'>TRY IT</button>
            </div>

        </section>
    )
}

export default ProductsSection