import './sales.scss'
import './sales.media.scss'
import ProductCard from '../productCard/ProductCard'
import slide1 from '../../resources/img/1.jpg'
import slide2 from '../../resources/img/2.jpg'
import slide3 from '../../resources/img/3.jpg'
import slide4 from '../../resources/img/4.jpg'
import woomenSlide1 from '../../resources/img/woomen1.jpeg'
import woomenSlide2 from '../../resources/img/woomen2.jpeg'
import woomenSlide3 from '../../resources/img/woomen3.jpeg'
import woomenSlide4 from '../../resources/img/woomen4.jpeg'
import woomenSlide5 from '../../resources/img/woomen5.jpeg'
import { useSelector } from 'react-redux'

const Sales = () => {
    const language = useSelector(state => state.language.language)
    const {sectionsTexts} = language


    const data = {
        img: [slide1, slide2, slide3, slide4, woomenSlide1, woomenSlide2, woomenSlide3, woomenSlide4, woomenSlide5,],
    }

    return (
        <section className='sales'>
            <h2 className='titleSection'>{sectionsTexts[0].name}</h2>
            <div className='salesBlock'>
                <div className='salesList'>
                    {data.img.map((img, index) => {
                        return (
                            <ProductCard key={index} img={img} />
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