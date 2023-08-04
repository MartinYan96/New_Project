import './popularGoods.scss'
import './popularGoods.media.scss'
import { useState } from 'react';
import ProductCard from '../productCard/ProductCard';
import { useSelector } from 'react-redux';
import data from '../../resources/data/data';

const PopularGoods = () => {
    const salesProducts = data().data.products.filter(saleProduct => saleProduct.sale !== '')
    const language = useSelector(state => state.language.language)
    const { menu, sectionsTexts } = language

    const popularGoodsSections = menu.slice(3, 8)

    const [popularGoodsSectionActive, setPopularGoodsSectionActive] = useState(0);

    const handleMouseEnter = (index) => {
        !popularGoodsSectionActive ? setPopularGoodsSectionActive(index) : setPopularGoodsSectionActive(index);
    };

    return (
        <section className='popularGoods'>
            <h2 className='titleSection'>{sectionsTexts[3].name}</h2>
            <ul className='popularGoodsSections' >
                {popularGoodsSections.map((section, index) => {
                    return (
                        <li className={popularGoodsSectionActive === index ? 'popularGoodsSectionActive' : 'popularGoodsSection'}
                            key={index}
                            onClick={() => handleMouseEnter(index)}
                        >
                            {section.categorie}
                        </li>
                    )
                })}
            </ul>
            <div className='popularGoodsBlock'>
                <div className='popularGoodsList'>
                    {salesProducts.map(product => {
                        return (
                            <ProductCard key={product.id} data={product} />
                        )
                    })}
                </div>
            </div>
        </section >
    )


}

export default PopularGoods