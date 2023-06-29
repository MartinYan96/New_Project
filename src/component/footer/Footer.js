import './footer.scss'
import './footer.media.scss'
import logo from '../../resources/img/31studioLogo.jpg'
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { textsEng } from '../../resources/textAndLanguage/textAndLanguage'



const Footer = () => {
    return (
        <footer className='footer'>
            <section className='footerSection'>
                <ul className='footerSections'>
                    <li className='footerLogo'>
                        <img src={logo} alt="" />
                    </li>
                    {
                        textsEng.footer.categories.slice(0, 3).map((categories, index) => {
                            return (
                                <li key={index}  className='footerCategories'>{categories.categories}</li>
                            )
                        })
                    }

                </ul>
                <ul className='footerSections'>
                    {
                        textsEng.footer.categories.slice(3, 6).map((categories, index) => {
                            return (
                                <li key={index} className='footerCategories'>{categories.categories}</li>
                            )
                        })
                    }
                </ul>
                <div className='footerContactsSections'>
                    <h3>{textsEng.footer.footerContactsSections[0].footerContacts}</h3>
                    <div className='socLinks'>
                        <FaFacebookF className='footerIcons' />
                        <FaInstagram className='footerIcons' />
                    </div>
                    <ul className='footerSections'>
                        <li className='footerCategories'><FaPhoneAlt className='footerIcons' />+37412345678</li>
                        <li className='footerCategories'><GrMail className='footerIcons' /> 31studio@gmail.com</li>
                        <li className='footerCategories'><FaMapMarkerAlt className='footerIcons' /> {textsEng.footer.footerContactsSections[1].address}</li>
                    </ul>
                </div>
            </section>
            <div className='allRightsReserved'>
                <span>{textsEng.footer.footerContactsSections[2].text}</span>
            </div>
        </footer>
    )
}
export default Footer