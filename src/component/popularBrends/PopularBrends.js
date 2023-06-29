import './popularBrends.scss'
import './popularBrends.media.scss'
import PopularBrendsSlider from './PopularBrendsSlider';
import { textsEng } from '../../resources/textAndLanguage/textAndLanguage'


const PopularBrends = () => {
    return (
        <section className='popularBrends'>
            <h2 className='titleSection '>{textsEng.sectionsTexts[3].name}</h2>
            <PopularBrendsSlider />
        </section>
    );



}

export default PopularBrends