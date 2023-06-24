import './navMenu.scss'
import { useState } from 'react';
import { textsEng } from '../../resources/textAndLanguage/textAndLanguage';
import { FaSearch } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'


const NavMenu = () => {
    const { navMenuSectionsEng } = textsEng

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
                {navMenuSectionsEng.map((item, index) => {
                    return (
                        <li
                            className='navMenuSections'
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {item.title}
                            {item.subMenu.length > 0 && <FiChevronDown className='downIcon' />}
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
            <FaSearch className='search' />
        </nav>

    );
};

export default NavMenu;