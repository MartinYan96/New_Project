import './footer.scss'
import logo from '../../resources/img/31studioLogo.jpg'
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='footer'>
            <ul className='footerSections'>
                <li className='footerLogo'>
                    <img src={logo} alt="" />
                </li>
                <li className='footerCategories'>Главная</li>
                <li className='footerCategories'>Магазины и салоны красоты</li>
                <li className='footerCategories'>Контакты</li>

            </ul>
            <ul className='footerSections'>
                <li className='footerCategories'>O нас</li>
                <li className='footerCategories'>Условия Пользования</li>
                <li className='footerCategories'>Доставка и Оплата</li>
            </ul>
            <div className='footerContactsSections'>
                <h3>Свяжитесь с нами!</h3>
                <div className='socLinks'>
                    <FaFacebookF className='footerIcons' />
                    <FaInstagram className='footerIcons' />
                </div>
                <ul className='footerSections'>
                    <li className='footerCategories'><FaPhoneAlt className='footerIcons' />+37412345678</li>
                    <li className='footerCategories'><GrMail className='footerIcons' /> 31studio@gmail.com</li>
                    <li className='footerCategories'><FaMapMarkerAlt className='footerIcons' /> ք. Երևան,  Աբովյան 37 փողոց</li>
                    <li className='footerCategories'> 31 studio © 2023
                        <br />
                        Բոլոր իրավունքները պաշտպանված են</li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer