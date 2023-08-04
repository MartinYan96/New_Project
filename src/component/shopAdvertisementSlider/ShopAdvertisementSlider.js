import './shopAdvertisementSlider.scss'
import './shopAdvertisementSlider.media.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ShopAdvertisement from './ShopAdvertisement'
import { useSelector } from 'react-redux';
import data from '../../resources/data/data';


const ShopAdvertisementSlider = () => {
    const { shopAdvertisementSlider } = data().data


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
                {shopAdvertisementSlider.map((data, index) => {
                    return (
                        <ShopAdvertisement key={index} data={data} />
                    )
                })}
            </Slider>
        </section>

    )
}

export default ShopAdvertisementSlider