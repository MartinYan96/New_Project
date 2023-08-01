import './footer.scss'
import './footer.media.scss'
import logo from '../../resources/img/LOGO.png'
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';



const Footer = () => {
    const language = useSelector(state => state.language.language)
    const { footer } = language
 
    return (
        <footer className='footer'>
            <section className='footerSection'>
                <ul className='footerSections'>
                    <li className='footerLogo'>
                        <img src={logo} alt="" />
                    </li>
                    {
                        footer.categories.slice(0, 3).map((categories, index) => {
                            return (
                                <li key={index} className='footerCategories'>{categories.categories}</li>
                            )
                        })
                    }

                </ul>
                <ul className='footerSections'>
                    {
                        footer.categories.slice(3, 6).map((categories, index) => {
                            return (
                                <li key={index} className='footerCategories'>{categories.categories}</li>
                            )
                        })
                    }
                </ul>
                <div className='footerContactsSections'>
                    <h3>{footer.footerContactsSections[0].footerContacts}</h3>
                    <div className='socLinks'>
                        <FaFacebookF className='footerIcons' />
                        <FaInstagram className='footerIcons' />
                    </div>
                    <ul className='footerSections'>
                        <li className='footerCategories'><FaPhoneAlt className='footerIcons' />+37412345678</li>
                        <li className='footerCategories'><GrMail className='footerIcons' /> mikro@gmail.com</li>
                        <li className='footerCategories'><FaMapMarkerAlt className='footerIcons' /> {footer.footerContactsSections[1].address}</li>
                    </ul>
                </div>
            </section>
            <div className='allRightsReserved'>
                <span>{footer.footerContactsSections[2].text}</span>
            </div>
        </footer>
    )
}
export default Footer