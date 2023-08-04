import './recommendedGoods.scss'
import './recommendedGoods.media.scss'
import RecommendedGoodsSlider from './RecommendedGoodsSlider'
import { useSelector } from 'react-redux'

const RecommendedGoods = () => {
    const language = useSelector(state => state.language.language)
    const {sectionsTexts} = language

    return (
        <div className='recommendedGoods'>
            <h2 className='titleSection '>{sectionsTexts[2].name}</h2>
            <div className='recommendedGoodsBlok'>
                <div className='recommendedGoodsSlider'>
                    <RecommendedGoodsSlider />
                </div>

            </div>
        </div>
    )
}



export default RecommendedGoods