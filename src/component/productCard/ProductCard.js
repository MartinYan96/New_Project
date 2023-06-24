import './productCard.scss'

const ProductCard = ({img}) => {
 
    return (
        < div className='productCard' >
            <div className='productCardInfo'>
                <div className='productCardImgAndSale'>
                    <p className='productCardSale'>26%</p>
                    <p className='productCardNewProduct'>Новинка</p>
                    <p className='productCardPreorder'>Предзаказ</p>
                    <img className='productCardImg' src={img} alt='' />
                </div>
                <p className='productCardName'> Chanel N5</p>
                <p className='productCardPrice'>8.880 ֏</p>
                <div className='formerPrice'>
                    <div className='deleteLinear'></div>
                    12.000 ֏
                </div>
            </div>
        </div >
    )

}

export default ProductCard