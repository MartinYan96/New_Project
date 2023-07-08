import './popularGoods.scss'
import './popularGoods.media.scss'
import { useState } from 'react';
import ProductCard from '../productCard/ProductCard';
import img from '../../resources/img/2.jpg'
import { useSelector } from 'react-redux';

const PopularGoods = () => {

    const language = useSelector(state => state.language.language)
    const { navMenuSections, sectionsTexts } = language


    const popularGoodsSections = navMenuSections.slice(0, 6)

    const [popularGoodsSectionActive, setPopularGoodsSectionActive] = useState(0);

    const handleMouseEnter = (index) => {
        !popularGoodsSectionActive ? setPopularGoodsSectionActive(index) : setPopularGoodsSectionActive(index);
    };

    return (
        <section className='popularGoods'>
            <h2 className='titleSection'>{sectionsTexts[2].name}</h2>
            <ul className='popularGoodsSections' >
                {popularGoodsSections.map((section, index) => {
                    return (
                        <li className={popularGoodsSectionActive === index ? 'popularGoodsSectionActive' : 'popularGoodsSection'}
                            key={index}
                            onClick={() => handleMouseEnter(index)}
                        >
                            {section.title}
                        </li>
                    )
                })}
            </ul>
            <div className='popularGoodsBlock'>
                <div className='popularGoodsList'>
                    {navMenuSections.map((section, index) => {
                        return (
                            <ProductCard key={index} img={img} />
                        )
                    })}
                </div>
            </div>
        </section >
    )


}

export default PopularGoods