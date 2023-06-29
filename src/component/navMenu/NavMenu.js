import './navMenu.scss'
import './navMenu.media.scss'
import { useState } from 'react';
import { textsEng } from '../../resources/textAndLanguage/textAndLanguage';
import { FiChevronDown } from 'react-icons/fi'
import { useMediaQuery } from 'react-responsive'
import Search from '../search/Search';

const NavMenu = () => {
    const { navMenuSections } = textsEng
    const tabletSize = useMediaQuery({ maxWidth: 1024 });

    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveSubMenu(index);
    };

    const handleMouseLeave = () => {
        setActiveSubMenu(null);
    };

    return (
        <nav className='navMenu'>
            <ul className='navSictionsMenu'>
                {tabletSize ? <Search /> : ''}
                {navMenuSections.map((item, index) => {
                    return (
                        <li
                            className='navMenuSections'
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {item.title}
                            {item.subMenu.length > 0 && <FiChevronDown className={activeSubMenu === index ? 'downIcon active' : 'downIcon'} />}
                            {item.subMenu.length > 0 &&
                                <ul
                                    className={activeSubMenu === index ? 'navMenuSectionsCategorys active' : 'navMenuSectionsCategorys'}
                                >
                                    {item.subMenu.map((subItem, subIndex) => (
                                        <li className='categories' key={subIndex}>
                                            {subItem}
                                        </li>
                                    ))}
                                </ul>
                            }
                        </li>
                    )
                }
                )
                }
            </ul>
            {!tabletSize ? <Search /> : ''}
        </nav>

    );
};

export default NavMenu;