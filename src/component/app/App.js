import './app.scss'
import './app.media.scss'
import NavMenu from '../navMenu/NavMenu'
import Header from '../header/Header'
import NewsAndSaleSlider from '../newsAndSaleSlider/NewsAndSaleSlider'
import NewProduct from '../newProductSlider/NewProduct'
import PopularGoods from '../popularGoods/PopularGoods'
import Sales from '../sales/Sales'
import PopularBrends from '../popularBrends/PopularBrends'
import Footer from '../footer/Footer'


const App = () => {
    return (
        <div className='app'>
            <Header />
            <NavMenu />
            <NewsAndSaleSlider />
            <Sales/>
            <NewProduct/>
            <PopularGoods/>
            <PopularBrends/>
            <Footer/>
        </div>
    )
}



export default App