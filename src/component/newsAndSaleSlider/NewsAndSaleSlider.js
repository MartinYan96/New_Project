import './newsAndSaleSlider.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import woomenSlide1 from '../../resources/img/woomen1.jpeg'
import woomenSlide2 from '../../resources/img/woomen2.jpeg'
import woomenSlide3 from '../../resources/img/woomen3.jpeg'
import woomenSlide4 from '../../resources/img/woomen4.jpeg'
import woomenSlide5 from '../../resources/img/woomen5.jpeg'
import NewsAndSale from './NewsAndSale'

const NewsAndSaleSlider = () => {
    const data = {
        img: [woomenSlide1, woomenSlide2, woomenSlide3, woomenSlide4, woomenSlide5,]
    }

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
                {data.img.map((img, index) => {
                    return (
                        <NewsAndSale key={index} data={img} index={index}/>
                    )
                })}
            </Slider>
        </section>

    )
}

export default NewsAndSaleSlider