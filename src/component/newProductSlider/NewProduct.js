import './newProduct.scss'
import './newProduct.media.scss'
import NewProductSlider from './NewProductSlider'
import { useSelector } from 'react-redux'

const NewProduct = () => {
    const language = useSelector(state => state.language.language)
    const {sectionsTexts} = language

    return (
        <div className='latestProductsBlok'>
            <h2 className='titleSection '>{sectionsTexts[1].name}</h2>
            <div className='newProductBlock'>
                <div className='newProductSlider'>
                    <NewProductSlider />
                </div>

            </div>
        </div>
    )
}


export default NewProduct