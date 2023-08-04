import './loginAndRegistrationForm.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { GrClose } from "react-icons/gr";

import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LoginForm = ({ handleCloseModals, linkOnRegistrationOnLoginPage }) => {
    const language = useSelector(state => state.language.language.registerAndlogin.login)
    const validationLanguage = useSelector(state => state.language.language.registerAndlogin.login.validation)
    const location = useLocation()
    const navigate = useNavigate()


    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                terms: false
            }}

            validationSchema={Yup.object({
                email: Yup.string()
                    .email(validationLanguage.email.error)
                    .required(validationLanguage.email.required),
                password: Yup.string()
                    .min(6, validationLanguage.password.min)
                    .max(12, validationLanguage.password.max)
                    .required(validationLanguage.password.required),
                terms: Yup.boolean()
                    .required(validationLanguage.terms.required)
                    .oneOf([true], validationLanguage.terms.required)
            })}

            onSubmit={values => {
                navigate(location.pathname)
                console.log(JSON.stringify(values, null, 2))
            }}

        >
            <div className='loginAndRegistrationForm'>
                <div className='cloaseModal' >
                    <Link to={handleCloseModals()}>
                        <GrClose className='cloaseModalIcon' />
                    </Link>
                </div>
                <h2>{language.login}</h2>
                <Form className="form">
                    <label htmlFor="email">{language.email}</label>
                    <Field
                        id="email"
                        name="email"
                        type="email"
                    />
                    <ErrorMessage className={'error'} name='email' component="div" />


                    <label htmlFor="password">{language.password}</label>
                    <Field
                        id="password"
                        name="password"
                        type="password"
                    />
                    <ErrorMessage className={'error'} name='password' component="div" />


                    <label className="checkbox">
                        <Field
                            name="terms"
                            type="checkbox"

                        />
                        {language.privacyPolicy}
                    </label>

                    <ErrorMessage className={'error'} name="terms" component="div" />
                    <div className='onSubmitButton'>

                        <button type="submit" className='button'><p>{language.login}</p></button>

                    </div>
                    <Link to={linkOnRegistrationOnLoginPage(`${location.pathname}?modal=registration`)} className='registrationOnLoginPage'>{language.registration}</Link>
                </Form>
            </div>
        </Formik >
    )
}

export default LoginForm