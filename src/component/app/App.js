import './app.scss'
import './app.media.scss'
import NavMenu from '../navMenu/NavMenu'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Provider } from 'react-redux';
import { store } from '../redux/reducers'
import { BrowserRouter as Router } from 'react-router-dom'
import Pages from '../pages/PagesEnter'



const App = () => {
    return (
        <Router>
            <Provider store={store}>
                <div className='app'>
                    <Header />
                    <NavMenu />
                    <div className='project'>
                        <Pages />
                    </div>
                    <Footer />
                </div>
            </Provider>
        </Router>
    )
}



export default App