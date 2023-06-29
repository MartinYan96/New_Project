import './newsAndSale.scss'
import './newsAndSale.media.scss'

const NewsAndSale = ({ data, index }) => {
    const slideNumber = index + 1
    return (
        <div className="imagesBlok" >
            <div className="saleProductInfos" >
                <div className='imgAndSelectToPage'>
                    <div className='saleProductInfo'>
                        <div className='salePercent'>Скидки</div>
                        <div className='selectToPage'>
                            <h4 className='saleTitle'>
                                Бьюти-неделя!
                                <br />
                                .Скидки до 50%</h4>
                            <h5 className='saleDiscription'>
                                Успейте купить любимые
                                <br />
                                средства по супер-выгодной цене!
                            </h5>
                            <button className='button'>Перейти</button>
                        </div>
                        <p className='slideNumber'>0{slideNumber}</p>
                    </div>
                    <div className='img'>
                        <div>
                            <img src={data} alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NewsAndSale