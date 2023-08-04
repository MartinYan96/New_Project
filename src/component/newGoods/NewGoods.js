import './newGoods.scss'
import './newGoods.media.scss'
import ProductCard from '../productCard/ProductCard'
import { Link } from 'react-router-dom'
import data from '../../resources/data/data'
import { useSelector } from 'react-redux'


const NewGoods = () => {
    const language = useSelector(state => state.language.language)
    const { sectionsTexts } = language
    const { menu } = language

    const newProducts = data().data.products.filter(saleProduct => saleProduct.news)


    return (
        <section className='newGoods'>
            <h2 className='titleSection'>{sectionsTexts[1].name}</h2>
            <div className='newBlock'>
                <div className='newList'>
                    {newProducts.map((product, index) => {
                        return (
                            index < 8 ? <ProductCard key={product.id} data={product} /> : ''
                        )
                    })}
                </div>
            </div>
            <div className='showAllNewButton'>
                <Link to={`/New_Project${menu[1].url}`} className='button'>{sectionsTexts[1].button}</Link>
            </div>
        </section>
    )
}

export default NewGoods