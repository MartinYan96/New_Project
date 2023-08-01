import ProductCard from "../productCard/ProductCard"

const FilteredPriceProductList = ({recommended , minPriceToggle,maxPriceToggle}) => {
    return recommended.map(product => {
        if ((product.price >= minPriceToggle) || (product.price >= minPriceToggle)) {
            if ((product.price <= maxPriceToggle) || (product.price <= maxPriceToggle)) {
                return (
                    <ProductCard key={product.id} data={product} />
                )
            }
        }
    })
}


export default FilteredPriceProductList