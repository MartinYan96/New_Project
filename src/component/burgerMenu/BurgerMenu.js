import { useState } from 'react';
import './burgerMenu.scss'
import './burgerMenu.media.scss'

const BurgerMenu = () => {
    const [activeBurgerMenu, setActiveBurgerMenu] = useState(false);
    const burgerMenuClick = () => {
        !activeBurgerMenu ? setActiveBurgerMenu(true) : setActiveBurgerMenu(false);
    }

    return (
        <section className='burgerMenuSection'>
            <div
                className={!activeBurgerMenu ? 'burgerMenu' : 'burgerMenu active'}
                onClick={() => burgerMenuClick()}
            >
                <div className='burgerLiner1'></div>
                <div className='burgerLiner2'></div>
                <div className='burgerLiner3'></div>
            </div>
        </section>
    )
}

export default BurgerMenu