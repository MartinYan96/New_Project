import './newsAndSale.scss'
import './newsAndSale.media.scss'

const NewsAndSale = ({ data}) => {
    const {img, name, news, price, salePrice, sale } = data

    return (
        <div className="newsAndSaleProducts" >
            <div className="newsAndSaleProductsInfo" >
                <div className='imgAndInfo'>
                    <div className='productInfo'>
                        <div className='productNewAndSaleMarker'>
                            {sale ? <div className='productSalePercent'>Скидка {sale} %</div> : ''}
                            {news ? <div className='newProduct'>Новинка</div> : ''}

                        </div>
                        <p className='productName'>{name}</p>
                        <div className='selectToPage'>
                            <p className='productPrice'>{price} ֏</p>
                            {salePrice ?
                                <div className='productSalePrice'>
                                    <div className='deleteSalePriceLinear'></div>
                                    {salePrice}֏
                                </div> :
                                ''
                            }
                        </div>
                        <button className='button'>Перейти</button>
                    </div>
                    <div className='img'>
                        <div>
                            <div>
                                <img src={img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NewsAndSale