import './productInfoList.scss'
import './productInfoList.media.scss'
import { useParams } from 'react-router-dom';
import data from '../../resources/data/data';

const ProductInfoList = () => {
    const { id } = useParams();
    const a = id.slice(1)

    const salesProducts = data().data.products.filter(product => product.id === a)

    const { img, name, characteristic, description, price, salePrice } = salesProducts[0]

    return (
        <section className='productInfoList'>
            <div className='productImg'>
                <img src={img} alt="" />
            </div>
            <div className='productCharacteristicsInfo'>
                <h3 className='productName'>SHATER</h3>
                <ul className='productsPrices'>
                    <li className='productPrice'>Գին <span className='productPriceInfo'>{salePrice} ֏</span></li>
                    <li className='productFormerPrice'>Նախկին գին<span className='productPriceInfo'>{price} ֏ <div className='deleteLinear'></div></span>
                    </li>
                </ul>
                <ul className='productCharacteristics'>
                    Տեխնիկական բնութագիր
                    <li className='productCharacteristicCategory'>Մոդել <span className='productCharacteristicsInfo'>GT300</span> </li>
                    <li className='productCharacteristicCategory'>Հոսանքի լարում <span className='productCharacteristicsInfo'>220v</span></li>
                    <li className='productCharacteristicCategory'>Հզորություն <span className='productCharacteristicsInfo'>2.7</span></li>
                    <li className='productCharacteristicCategory'>Առավելագույն հզորություն <span className='productCharacteristicsInfo'>3.0</span> </li>
                    {/* <li>Եռակցման հոսանք: {description}</li> */}
                    {/* <li>Չափս: {description}</li>         
                    <li>Էլեկտրոդի չափս: {description}</li>
                    <li>Քաշ: {description}</li>
                    <li>Օդի արտադրողականություն: {description}</li>
                    <li>Առավելագույն ճնշում: {description}</li>
                    <li>Բակի ծավալ: {description}</li>
                    <li>Մխոցի քանակ: {description}</li>
                    <li>Ձայնի բարձրություն: {description}</li>
                    <li>Բակի տարողություն: {description}</li>
                    <li>Գլխիկի չափս: {description}</li>
                    <li>Պտույտների քանակ: {description}</li>
                    <li>Մարտկոցի տեսակ: {description}</li>
                    <li>Մարտկոցի լարում: {description}</li>
                    <li>Մարտկոցի հզորություն: {description}</li>
                    <li>Սկավառակի չափս: {description}</li>
                    <li>Միացման լարի երկարություն: {description}</li>
                    <li>Սղոցի չափս: {description}</li>
                    <li>Կտրող չափս: {description}</li>
                    <li>Հավաքածուի քանակ: {description}</li>
                    <li>Գլխիկի միացման չափ: {description}</li>
                    <li>Դարձակի նվազագույն չափ: {description}</li>
                    <li>Դարձակի առավելագույն չափ: {description}</li>
                    <li>Պարկի տարողություն: {description}</li>
                    <li>Հնձման բարձրություն: {description}</li>
                    <li>Դանակի կտրման տրամագիծ: {description}</li>
                    <li>Թելի կտրման տրամագիծ: {description}</li>
                    <li>Շարժիչի տեսակ: {description}</li> */}
                </ul>
                <div className='producDescriptionSection'>

                    <h4 className='producDescriptionTitle'>Նկարագրություն</h4>
                    <p className='producDescription'>STEHER GT-300 շարժիչ-բլոկը նախատեսված է անձնական հողամասում հողը թուլացնելու և մշակելու համար։ Արդյունավետ շարժիչը նավթի լոգանքի օդային զտիչով մեծացնում է շարժիչի կյանքը: Ծալովի, կարգավորվող ղեկը և տրանսպորտային անիվը հեշտացնում են այն օգտագործելը, տեղափոխելը և պահելը: </p>
                </div>
            </div>
        </section>
    )
}

export default ProductInfoList