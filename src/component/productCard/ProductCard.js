import './productCard.scss'
import './productCard.media.scss'
import { textsEng } from '../../resources/textAndLanguage/textAndLanguage'


const ProductCard = ({ img }) => {


    return (
        < div className='productCard' >
            <div className='productCardInfo'>
                <div className='productCardImgAndSale'>
                    <p className='productCardSale'>26%</p>
                    <p className='productCardNewProduct'>{textsEng.productCard.new}</p>
                    <p className='productCardPreorder'>{textsEng.productCard.preOrder}</p>
                    <img className='productCardImg' src={img} alt='' />
                </div>
                <p className='productCardName'> Chanel N5</p>
                <div className='productCardprices'>
                    <p className='productCardPrice'>8.880 {textsEng.productCard.currencySign}</p>
                    <div className='formerAndSalePrice'>
                        <div className='deleteLinear'></div>
                        12.000 {textsEng.productCard.currencySign}
                    </div>
                </div>
            </div>
        </div >
    )

}

export default ProductCard