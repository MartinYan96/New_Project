import './newsAndSaleSlider.scss'
import './newsAndSaleSlider.media.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import {data} from '../../resources/products/products'
import NewsAndSale from './NewsAndSale'

const NewsAndSaleSlider = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        className: 'newsAndSaleSliderParam',
    };

    return (
        <section className='sliderSection'>
            <Slider {...settings}>
                {data.products.map((data, index) => {
                    return (
                        <NewsAndSale key={index} data={data}/>
                    )
                })}
            </Slider>
        </section>

    )
}

export default NewsAndSaleSlider