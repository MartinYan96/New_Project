import './productCard.scss'
import './productCard.media.scss'
import { useSelector } from 'react-redux'


const ProductCard = ({ img }) => {
    const language = useSelector(state => state.language.language)
    const { productCard } = language

    return (
        < div className='productCard' >
            <div className='productCardInfo'>
                <div className='productCardImgAndSale'>
                    <p className='productCardSale'>26%</p>
                    <p className='productCardNewProduct'>{productCard.new}</p>
                    <p className='productCardPreorder'>{productCard.preOrder}</p>
                    <div className='productCardImgFrame'>
                        <img className='productCardImg' src={img} alt='' />
                    </div>
                </div>
                <p className='productCardName'> Chanel N5</p>
                <div className='productCardprices'>
                    <p className='productCardPrice'>8.880 ֏</p>
                    <div className='formerAndSalePrice'>
                        <div className='deleteLinear'></div>
                        12.000 ֏
                    </div>
                </div>
            </div>
        </div >
    )

}

export default ProductCard