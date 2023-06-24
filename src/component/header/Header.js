import './header.scss'
import logo from '../../resources/img/31studioLogo.jpg'



const Header = () => {
    return (
        <header className="header">
            <div className='languages'>
                <p className='language'>ARM</p> /
                <p className='language'>ENG</p> /
                <p className='language'>RUS</p>
            </div>
            <img className='logo' src={logo} alt="" />
            <div className='RegisterloginButtons'>
                <p className='register'>Գրանցում</p>/<p className='login'>Մուտք</p>
            </div>

        </header>
    )
}


export default Header