import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import './loginAndRegistrationForm.scss'
import { GrClose } from "react-icons/gr";

import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const LoginForm = ({ handleCloseModals, linkOnRegistrationOnLoginPage }) => {
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
                email: Yup.string().email('ne pravilniy mail adress').required('eto obezatelnoe pole'),
                terms: Yup.boolean().required('neobxodimo soglasie').oneOf([true], 'neobxodimo soglasie')
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
                <h2>Вход</h2>
                <Form className="form">
                    <label htmlFor="email">Ваша почта</label>
                    <Field
                        id="email"
                        name="email"
                        type="email"
                    />
                    <ErrorMessage className={'error'} name='email' component="div" />


                    <label htmlFor="name">Пароль</label>
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
                        Соглашаетесь с политикой конфиденциальности?
                    </label>

                    <ErrorMessage className={'error'} name="terms" component="div" />
                    <div className='onSubmitButton'>

                        <button type="submit" className='button'><p>Войти</p></button>

                    </div>
                    <Link to={linkOnRegistrationOnLoginPage(`${location.pathname}?modal=registration`)} className='registrationOnLoginPage'>Еще не зарегестрированы?</Link>
                </Form>
            </div>
        </Formik >
    )
}

export default LoginForm