import './productCard.scss'
import './productCard.media.scss'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import classNames from 'classnames'

const ProductCard = ({ data }) => {
    const language = useSelector(state => state.language.language)
    const { productCard } = language
    const { img, name, news, price, sale, salePrice,id} = data

    return (
        <Link to={`/New_Project/productItem/:${id}`} className='productCard'>
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
        </Link>
    )

}

export default ProductCard