import './registrationAndLoginField.scss'
import './registrationAndLoginField.media.scss'
import { useSearchParams } from 'react-router-dom';

const RegistrationAndLoginField = ({ children }) => {

    return (
        <section className='registrationAndLoginField'>
            <div className='overlay' >
                {children}
            </div >
        </section >
    )
}

export default RegistrationAndLoginField