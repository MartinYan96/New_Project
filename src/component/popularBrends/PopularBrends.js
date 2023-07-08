import './popularBrends.scss'
import './popularBrends.media.scss'
import PopularBrendsSlider from './PopularBrendsSlider';
import { useSelector } from 'react-redux';


const PopularBrends = () => {
    const language = useSelector(state => state.language.language)
    const {sectionsTexts} = language

    return (
        <section className='popularBrends'>
            <h2 className='titleSection '>{sectionsTexts[3].name}</h2>
            <div className='popularBrendsSliderBlock'>
                <PopularBrendsSlider />
            </div>
        </section>
    );



}

export default PopularBrends