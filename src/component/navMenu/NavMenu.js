import './navMenu.scss'
import './navMenu.media.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi'
import { useMediaQuery } from 'react-responsive'
import LanguageButtons from '../toggleAndButtonsLanguges/LanguageButtons';
import Search from '../search/Search';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { openAndCloseBurger } from '../redux/closeAndOpenBugerMenu';
import BurgerMenu from '../burgerMenu/BurgerMenu'

const NavMenu = () => {
    const dispatch = useDispatch()
    const openAndCloseNavMenuByBurgerMenu = useSelector(state => state.burger.burgerOpen)
    const openSearchWindow = useSelector(state => state.search.searchWindowOpen)
    const language = useSelector(state => state.language.language)
  

    const { menu } = language

    const tabletSize = useMediaQuery({ maxWidth: 1024 });


    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveSubMenu(index);
    };

    const handleMouseLeave = () => {
        setActiveSubMenu(null);
    };


    const navMenuClassName = openAndCloseNavMenuByBurgerMenu ? 'navMenu' : 'navMenu active'

    return (
        <nav className={navMenuClassName} >
            <ul className='navSictionsMenu'>
                {tabletSize ? <BurgerMenu /> : ''}
                {tabletSize ? <Search /> : ''}
                {tabletSize ? <LanguageButtons /> : ''}
                {openSearchWindow ? '' : menu.map((item, index) => {
                    return (
                        <li
                            className='navMenuSections'
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link to={`/New_Project${item.url}`}>
                                {item.categorie}
                                {item.submenu.length > 0 && <FiChevronDown className={activeSubMenu === index ? 'downIcon active' : 'downIcon'} />}
                                {item.submenu.length > 0 &&
                                    <ul
                                        className={activeSubMenu === index ? 'navMenuSectionsCategorys active' : 'navMenuSectionsCategorys'}
                                    >
                                        {item.submenu.map((subItem, subIndex) => (
                                            <li className='categories' key={subIndex} onTouchStart={() => {
                                                dispatch(openAndCloseBurger())
                                            }}>
                                                {subItem.categorie}
                                            </li>
                                        ))}
                                    </ul>
                                }
                            </Link>
                        </li>
                    )
                }
                )
                }
            </ul>
            <div className='heroHeader' onTouchStart={() => {
                dispatch(openAndCloseBurger())
            }}>

            </div>
            {!tabletSize ? <Search /> : ''}
        </nav>

    );
};

export default NavMenu;