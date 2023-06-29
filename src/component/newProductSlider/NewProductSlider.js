import './newProductSlider.scss'
import './newProductSlider.media.scss'
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
import { useEffect } from 'react';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';


const NewProductSlider = () => {
    const [slideQuantity, setslideQuantity] = useState(4);
    const dekstopAndTabletLandscapeResize = useMediaQuery({ maxWidth: 1279 });
    const tabletSize = useMediaQuery({ maxWidth: 719 });
    const veryBigPhoneSize = useMediaQuery({ maxWidth: 499 });
    const bigPhoneSize = useMediaQuery({ maxWidth: 460 });
    const smolePhoneSize = useMediaQuery({ maxWidth: 319 });



    // const tabletHeightSize = useMediaQuery({ maxWidth: 1000 });


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

    // useEffect(() => {
    //     setslideQuantity(1)
    // },[smolePhoneSize])

    const data = {
        img: [slide1, slide2, slide3, slide4, woomenSlide1, woomenSlide2, woomenSlide3, woomenSlide4, woomenSlide5,],
    }

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