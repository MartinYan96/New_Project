import './newProduct.scss'
import NewProductSlider from './NewProductSlider'

const NewProduct = () => {
    return (
        <div className='latestProductsBlok'>
            <h2 className='titleSection '>ՆՈՐ ՏԵՍԱԿԱՆԻ</h2>
            <h3 className='descriptionSection'>Մենք մշտապես թարմացնում ենք մեր տեսականին: <br />
                Շտապեք ուսումնասիրել մեր նորույթները:</h3>
            <div className='newProductSlider'>
                <NewProductSlider />
            </div>
        </div>
    )
}


export default NewProduct