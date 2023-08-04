import './registrationAndLoginButtons.scss'
import './registrationAndLoginButtons.media.scss'
import { useSelector } from 'react-redux'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'
import RegistrationAndLoginField from './RegistrationAndLoginField'

const RegistrationAndLoginButtons = () => {
    const language = useSelector(state => state.language.language.registerAndlogin)
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const modalType = searchParams.get('modal');

    const handleCloseModals = () => {
        if (modalType === 'registration' || modalType === 'login') {
            return location.pathname
        }
    };

    useEffect(() => {
        modalType === 'registration' || modalType === 'login' ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }, [modalType === 'registration' || modalType === 'login'])

    const linkOnRegistrationOnLoginPage = (modalPage) => {
        return modalPage
    }

    const registration = modalType === 'registration' ?
        <RegistrationAndLoginField>
            <RegistrationForm
                handleCloseModals={handleCloseModals}
            />
        </RegistrationAndLoginField> :
        ''

    const login = modalType === 'login' ?
        <RegistrationAndLoginField>
            <LoginForm
                handleCloseModals={handleCloseModals}
                linkOnRegistrationOnLoginPage={linkOnRegistrationOnLoginPage}
            />
        </RegistrationAndLoginField> :
        ''

    return (
        <div className='RegisterloginButtons'>
            <Link to={linkOnRegistrationOnLoginPage(`${location.pathname}?modal=registration`)} className='register'  >{language.register.register}</Link>/
            <Link to={linkOnRegistrationOnLoginPage(`${location.pathname}?modal=login`)} className='login' >{language.login.login}</Link>
            {registration}
            {login}
        </div>
    )
}
export default RegistrationAndLoginButtons