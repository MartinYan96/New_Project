import './header.scss'
import './header.media.scss'
import logo from '../../resources/img/31studioLogo.jpg'
import LanguageButtons from '../toggleAndButtonsLanguges/LanguageButtons'
import { textsEng } from '../../resources/textAndLanguage/textAndLanguage'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import BurgerMenu from '../burgerMenu/BurgerMenu'




const Header = () => {
    const tabletSize = useMediaQuery({ maxWidth: 1024 });

    return (
        <header className="header">
            {tabletSize ? <BurgerMenu/> : <LanguageButtons />}
            <img className='logo' src={logo} alt="" />
            <div className='RegisterloginButtons'>
                <p className='register'>{textsEng.registerAndlogin[0].register}</p>/
                <p className='login'>{textsEng.registerAndlogin[1].login}</p>
            </div>
        </header>
    )
}

export default Header