import './recommendedGoodsSlider.scss'
import './recommendedGoodsSlider.media.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ProductCard from '../productCard/ProductCard';
import { useEffect } from 'react';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import data from '../../resources/data/data';


const RecommendedGoodsSlider = () => {
    const recommendedGoods = data().data.products.filter(saleProduct => saleProduct.recommended)
    const [slideQuantity, setslideQuantity] = useState(4);
    const dekstopAndTabletLandscapeResize = useMediaQuery({ maxWidth: 1279 });
    const tabletSize = useMediaQuery({ maxWidth: 719 });
    const veryBigPhoneSize = useMediaQuery({ maxWidth: 499 });
    const bigPhoneSize = useMediaQuery({ maxWidth: 464 });



    useEffect(() => {
        if (dekstopAndTabletLandscapeResize) {
            setslideQuantity(3)
        } else {
            setslideQuantity(4)
        }

    }, [dekstopAndTabletLandscapeResize, tabletSize]);

    useEffect(() => {
        if (tabletSize) {
            setslideQuantity(2)
        }
    }, [tabletSize])


    useEffect(() => {
        if (veryBigPhoneSize) {
            setslideQuantity(3)
        }
    }, [veryBigPhoneSize])

    useEffect(() => {
        if (bigPhoneSize) {
            setslideQuantity(2)
        }
    }, [bigPhoneSize])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slideQuantity,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        className: 'recommendedGoodsParam',
    };
  
    return (
        <section className='sliderSection'>
            <Slider {...settings}>
                {recommendedGoods.map((product, index) => {
                    return (
                        index < 5 ? <ProductCard key={product.id} data={product} /> : ''
                    )
                })}
            </Slider>
        </section>

    )
}


export default RecommendedGoodsSlider 