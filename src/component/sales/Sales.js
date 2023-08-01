import './sales.scss'
import './sales.media.scss'
import ProductCard from '../productCard/ProductCard'
import { Link } from 'react-router-dom'
import data from '../../resources/data/data'
import { useSelector } from 'react-redux'

const Sales = () => {
    const language = useSelector(state => state.language.language)
    const { sectionsTexts } = language
    const { menu } = language

    const salesProducts = data().data.products.filter(saleProduct => saleProduct.sale !== '')


    return (
        <section className='sales'>
            <h2 className='titleSection'>{sectionsTexts[0].name}</h2>
            <div className='salesBlock'>
                <div className='salesList'>
                    {salesProducts.map((product, index) => {
                        return (
                            <ProductCard key={product.id} data={product} />
                        )
                    })}
                </div>

            </div>
            <div className='showAllSalesButton'>
                <Link to={`/New_Project${menu[2].url}`} className='button'>{sectionsTexts[0].button}</Link>
            </div>
        </section>
    )
}
export default Sales