import { useSelector } from 'react-redux'
import './shopAdvertisement.media.scss'
import './shopAdvertisement.scss'
const ShopAdvertisement = ({ data }) => {


    const language = useSelector(state => state.language.language.languages)
    const { textTop, textBottom, img } = data

    return (
        <section className='shopAdvertisement'>
            <div className='shopAdvertisementImg'>
                <img src={img} alt="" />
            </div>
            <div className='overlayShopAdvertisement'>
                <h2>{language === 'arm' ? textTop.arm : textTop.rus}</h2>
                <h3>{language === 'arm' ? textBottom.arm : textBottom.rus}</h3>
            </div>
        </section>
    )
}

export default ShopAdvertisement