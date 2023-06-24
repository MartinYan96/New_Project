import './popularBrends.scss'
import popularBrends1 from '../../resources/img/popularBrends1.png'
import PopularBrendsSlider from './PopularBrendsSlider';


const PopularBrends = () => {
    return (
        <section className='popularBrends'>
            <h2 className='titleSection '>Popular Brends</h2>
            <PopularBrendsSlider />
        </section>
    );



}

export default PopularBrends