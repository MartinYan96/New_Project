import './newProductSlider.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ProductCard from '../productCard/ProductCard';
import slide1 from '../../resources/img/1.jpg'
import slide2 from '../../resources/img/2.jpg'
import slide3 from '../../resources/img/3.jpg'
import slide4 from '../../resources/img/4.jpg'
import woomenSlide1 from '../../resources/img/woomen1.jpeg'
import woomenSlide2 from '../../resources/img/woomen2.jpeg'
import woomenSlide3 from '../../resources/img/woomen3.jpeg'
import woomenSlide4 from '../../resources/img/woomen4.jpeg'
import woomenSlide5 from '../../resources/img/woomen5.jpeg'





const NewProductSlider = () => {
    const data = {
        img: [slide1, slide2, slide3, slide4, woomenSlide1, woomenSlide2, woomenSlide3, woomenSlide4, woomenSlide5,],
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        className: 'newProductsParam',
        arrows: false,
    };

    return (
        <section className='sliderSection'>
            <Slider {...settings}>
                {data.img.map((image, index) => {
                    return (
                        <ProductCard key={index} img={image} />
                    )
                })}
            </Slider>
        </section>

    )
}


export default NewProductSlider 