import './newProductSlider.scss'
import './newProductSlider.media.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ProductCard from '../productCard/ProductCard';
import { data } from '../../resources/products/products';
import { useEffect } from 'react';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';


const NewProductSlider = () => {
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
        className: 'newProductsParam',
    };

    return (
        <section className='sliderSection'>
            <Slider {...settings}>
                {data.products.map(product => {
                    return (
                        <ProductCard key={product.id} data={product} />
                    )
                })}
            </Slider>
        </section>

    )
}


export default NewProductSlider 