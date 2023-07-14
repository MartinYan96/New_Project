import './header.scss'
import './header.media.scss'
import logo from '../../resources/img/31studioLogo.jpg'
import LanguageButtons from '../toggleAndButtonsLanguges/LanguageButtons'
import { useMediaQuery } from 'react-responsive'
import BurgerMenu from '../burgerMenu/BurgerMenu'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'




const Header = () => {
    const tabletSize = useMediaQuery({ maxWidth: 1024 });
    const language = useSelector(state => state.language.language)

    return (
        <header className="header">
            {tabletSize ? <BurgerMenu /> : <LanguageButtons />}
            <Link to={'/'} >  <img className='logo' src={logo} alt="" /></Link>
            <div className='RegisterloginButtons'>
                <p className='register'>{language.registerAndlogin[0].register}</p>/
                <p className='login'>{language.registerAndlogin[1].login}</p>
            </div>
        </header>
    )
}

export default Header