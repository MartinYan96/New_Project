import './popularGoods.scss'
import { textsEng } from '../../resources/textAndLanguage/textAndLanguage'
import { useState } from 'react';
import ProductCard from '../productCard/ProductCard';
import img from '../../resources/img/2.jpg'

const PopularGoods = () => {
    const popularGoodsSections = textsEng.navMenuSectionsEng.slice(0, 6)

    const [popularGoodsSectionActive, setPopularGoodsSectionActive] = useState(null);
    
    const handleMouseEnter = (index) => {
        setPopularGoodsSectionActive(index);
    };

    const handleMouseLeave = () => {
        setPopularGoodsSectionActive(null);
    };
    return (
        <section className='popularGoods'>
            <h2 className='titleSection'>Popular goods</h2>
            <ul className='popularGoodsSections' >
                {popularGoodsSections.map((section, index) => {
                    return (
                        <li className={popularGoodsSectionActive === index ? 'popularGoodsSectionActive' : 'popularGoodsSection'}
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}>
                            {section.title}
                        </li>
                    )
                })}
            </ul>
            <div className='popularGoodsList'> 
                {textsEng.navMenuSectionsEng.map((section, index) => {
                    return (
                       <ProductCard key={index} img={img} />
                    )
                })}
            </div>
        </section >
    )


}

export default PopularGoods