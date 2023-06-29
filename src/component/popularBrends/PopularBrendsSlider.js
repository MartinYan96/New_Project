import './popularBrendsSlider.scss'
import './popularBrendsSlider.media.scss'
import Slider from "react-slick";
import popularBrends1 from '../../resources/img/popularBrends1.png'
import popularBrends2 from '../../resources/img/popularBrends2.png'
import popularBrends3 from '../../resources/img/popularBrends3.png'
import popularBrends4 from '../../resources/img/popularBrends4.png'
import popularBrends5 from '../../resources/img/popularBrends5.png'

const PopularBrendsSlider = () => {
    const images = [popularBrends1, popularBrends2, popularBrends3, popularBrends4, popularBrends5]
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        arrows: false,
        autoplaySpeed:2000,
        className: 'poularBrendsSlider'
    };
    return (
        <section className='sliderSection'>
            <Slider {...settings}>
                {images.map((img, index) => {
                    return (
                        <div key={index} className='popularBrendsImages'>
                            <img src={img} alt='' />
                        </div>
                    )
                })}
            </Slider>
        </section>
    );



}

export default PopularBrendsSlider