import './productInfoList.scss'
import './productInfoList.media.scss'
import { useParams } from 'react-router-dom';
import data from '../../resources/data/data';

const ProductInfoList = () => {
    const { id } = useParams();
    const a = id.slice(1)

    const salesProducts = data().data.products.filter(product => product.id === a)

    const { img ,name,characteristic,description} = salesProducts[0]

    return (
        <section className='productInfoList'>
            <div className='productImg'>
                <img src={img } alt="" />
            </div>
            <div className='productCharacteristicsInfo'>
                <h3 className='productName'>{name}</h3>
                <ul className='productCharacteristics'>
                    <li>{characteristic}</li>
                    <li>{description}</li>
                </ul>
            </div>
        </section>
    )
}

export default ProductInfoList