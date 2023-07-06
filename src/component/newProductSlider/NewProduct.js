import './newProduct.scss'
import './newProduct.media.scss'
import NewProductSlider from './NewProductSlider'
import { textsEng } from '../../resources/textAndLanguage/textAndLanguage'

const NewProduct = () => {
    return (
        <div className='latestProductsBlok'>
            <h2 className='titleSection '>{textsEng.sectionsTexts[1].name}</h2>
            <div className='newProductBlock'>
                <div className='newProductSlider'>
                    <NewProductSlider />
                </div>

            </div>
        </div>
    )
}


export default NewProduct