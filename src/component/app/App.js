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
import { Provider } from 'react-redux';
import { store } from '../redux/reducers'



const App = () => {
    return (
        <Provider store={store }>
            <div className='app'>
                <Header />
                <NavMenu />
                <NewsAndSaleSlider />
                <Sales />
                <NewProduct />
                <PopularGoods />
                <PopularBrends />
                <Footer />
            </div>
        </Provider>
    )
}



export default App