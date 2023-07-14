import './sales.scss'
import './sales.media.scss'
import ProductCard from '../productCard/ProductCard'
import { data } from '../../resources/products/products'
import { useSelector } from 'react-redux'

const Sales = () => {
    const language = useSelector(state => state.language.language)
    const {sectionsTexts} = language

    return (
        <section className='sales'>
            <h2 className='titleSection'>{sectionsTexts[0].name}</h2>
            <div className='salesBlock'>
                <div className='salesList'>
                    {data.products.map((product, index) => {
                        return (
                            <ProductCard key={product.id} data={product} />
                        )
                    })}
                </div>

            </div>
            <div className='showAllSalesButton'>
                <button className='button'>{sectionsTexts[0].button}</button>
            </div>
        </section>
    )
}
export default Sales