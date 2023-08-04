import './salesGoods.scss'
import './salesGoods.media.scss'
import ProductCard from '../productCard/ProductCard'
import { Link } from 'react-router-dom'
import data from '../../resources/data/data'
import { useSelector } from 'react-redux'

const SalesGoods = () => {
    const language = useSelector(state => state.language.language)
    const { sectionsTexts } = language
    const { menu } = language

    const salesGoodsProducts = data().data.products.filter(saleProducts => saleProducts.sale !== '')


    return (
        <section className='salesGoods'>
            <h2 className='titleSection'>{sectionsTexts[0].name}</h2>
            <div className='salesGoodsBlock'>
                <div className='salesGoodsList'>
                    {salesGoodsProducts.map((product, index) => {
                        return (
                            index < 8 ? <ProductCard key={product.id} data={product} /> : ''
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
export default SalesGoods