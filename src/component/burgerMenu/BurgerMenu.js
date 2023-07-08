import './burgerMenu.scss'
import './burgerMenu.media.scss'
import { useDispatch, useSelector} from 'react-redux';
import { openAndCloseBurger } from '../redux/closeAndOpenBugerMenu';

const BurgerMenu = () => {
    const openAndCloseNavMenuByBurgerMenu = useSelector(state => state.burger.burgerOpen)
    const dispatch = useDispatch()
    
    return (
        <section className='burgerMenuSection'>
            <div
                className={!openAndCloseNavMenuByBurgerMenu ? 'burgerMenu' : 'burgerMenu active'}
                onClick={() => { dispatch(openAndCloseBurger())  
                }}
            >
                <div className='burgerLiner1'></div>
                <div className='burgerLiner2'></div>
                <div className='burgerLiner3'></div>
            </div>
        </section>
    )
}

export default BurgerMenu