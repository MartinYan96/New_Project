import './productCard.scss'
import './productCard.media.scss'
import { useSelector } from 'react-redux'


const ProductCard = ({ data }) => {
    const language = useSelector(state => state.language.language)
    const { productCard } = language
    console.log(data)
    const { img, name, news, price, sale, salePrice, } = data

    return (
        < div className='productCard' >
            <div className='productCardInfo'>
                <div className='productCardImgAndSale'>
                    {sale ? <p className='productCardSale'>{sale}%</p> : ''}
                    {news ? <p className='productCardNewProduct'>{productCard.new}</p> : ''}
                    <p className='productCardPreorder'>{productCard.preOrder}</p>
                    <div className='productCardImgFrame'>
                        <img className='productCardImg' src={img} alt='' />
                    </div>
                </div>
                <p className='productCardName'> {name}</p>
                <div className='productCardprices'>
                    <p className='productCardPrice'>{price}֏</p>
                    {sale ? <div className='formerAndSalePrice'>
                        <div className='deleteLinear'></div>
                        {salePrice} ֏
                    </div> : ''}
                </div>
            </div>
        </div >
    )

}

export default ProductCard