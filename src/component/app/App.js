import './app.scss'
import './app.media.scss'
import NavMenu from '../navMenu/NavMenu'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Provider } from 'react-redux';
import { store } from '../redux/reducers'
import ProductsSection from '../productsList/ProductsSection'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from '../homePage/HomePage'



const App = () => {
    return (
        <Router>
            <Provider store={store}>
                <div className='app'>
                    <Header />
                    <NavMenu />     
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/hair" element={<ProductsSection />} />
                        <Route path="/FACE & BODY" element={<ProductsSection />} />
                    </Routes>
                    <Footer />
                </div>
            </Provider>
        </Router>
    )
}



export default App