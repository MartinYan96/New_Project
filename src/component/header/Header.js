import './header.scss'
import './header.media.scss'
import logo from '../../resources/img/LOGO.png'
import LanguageButtons from '../toggleAndButtonsLanguges/LanguageButtons'
import { useMediaQuery } from 'react-responsive'
import BurgerMenu from '../burgerMenu/BurgerMenu'
import { Link } from 'react-router-dom'
import RegistrationAndLoginButtons from '../registrationAndLoginField/RegistrationAndLoginButtons'
import { useSelector } from 'react-redux'




const Header = () => {
    const openSearchWindow = useSelector(state => state.search.searchWindowOpen)
    const tabletSize = useMediaQuery({ maxWidth: 1024 });
    return (
        <>
            {
                !openSearchWindow ? <header className="header">
                    {tabletSize ? <BurgerMenu /> : <LanguageButtons />}
                    < Link to={'/New_Project'} > <img className='logo' src={logo} alt="" /></Link >
                    <RegistrationAndLoginButtons />
                </header >
                    : ''
            }
        </>
    )
}

export default Header