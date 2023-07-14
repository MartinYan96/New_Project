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

const NavMenu = () => {
    const dispatch = useDispatch()
    const openAndCloseNavMenuByBurgerMenu = useSelector(state => state.burger.burgerOpen)
    const language = useSelector(state => state.language.language)

    const { navMenuSections } = language

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
                {tabletSize ? <Search /> : ''}
                {tabletSize ? <LanguageButtons /> : ''}
                {navMenuSections.map((item, index) => {
                    console.log(item.link)
                    return (
                        <li
                            className='navMenuSections'
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link to={item.link}>
                                {item.title}
                                {item.subMenu.length > 0 && <FiChevronDown className={activeSubMenu === index ? 'downIcon active' : 'downIcon'} />}
                                {item.subMenu.length > 0 &&
                                    <ul
                                        className={activeSubMenu === index ? 'navMenuSectionsCategorys active' : 'navMenuSectionsCategorys'}
                                    >
                                        {item.subMenu.map((subItem, subIndex) => (
                                            <li className='categories' key={subIndex} onTouchStart={() => {
                                                dispatch(openAndCloseBurger())
                                            }}>
                                                {subItem}
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