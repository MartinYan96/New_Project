import './loginAndRegistrationForm.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { GrClose } from 'react-icons/gr';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RegistrationForm = ({ handleCloseModals }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const language = useSelector(state => state.language.language.registerAndlogin.register)
    const validationLanguage = useSelector(state => state.language.language.registerAndlogin.register.validation)
    console.log(validationLanguage)
    return (
        <Formik
            initialValues={{
                email: '',
                phoneNumber: '+374',
                password: '',
                name: '',
                lastName: '',
                terms: false
            }}

            validationSchema={Yup.object({
                email: Yup.string()
                    .email(validationLanguage.email.error)
                    .required(validationLanguage.email.required),
                phoneNumber: Yup.string()
                    .matches(/^\+[0-9]+$/, validationLanguage.phoneNumber.matches)
                    .required(validationLanguage.phoneNumber.required),
                password: Yup.string()
                    .min(6, validationLanguage. password.min)
                    .max(12, validationLanguage. password.max)
                    .required(validationLanguage.password.required),
                name: Yup.string()
                    .min(4, validationLanguage.name.min)
                    .max(12, validationLanguage.name.max)
                    .required(validationLanguage.name.required),

                lastName: Yup.string()
                    .min(4, validationLanguage.lastName.min)
                    .max(16, validationLanguage.lastName.max)
                    .required(validationLanguage.lastName.required),

                terms: Yup.boolean()
                    .required(validationLanguage.terms.required)
                    .oneOf([true], validationLanguage.terms.required)
            })}

            onSubmit={values => {
                navigate(location.pathname)
                console.log(JSON.stringify(values, null, 2))
            }
            }

        >
            <div className='loginAndRegistrationForm'>
                <div className='cloaseModal'>
                    <Link to={handleCloseModals()}>
                        <GrClose className='cloaseModalIcon' />
                    </Link>

                </div>
                <h2>{language.register}</h2>
                <Form className='form'>
                    <label htmlFor='email'>{language.email}</label>
                    <Field
                        id='email'
                        name='email'
                        type='email'
                    />
                    <ErrorMessage className={'error'} name='email' component='div' />


                    <label htmlFor='phoneNumber'>{language.phone}</label>
                    <Field
                        id='phoneNumber'
                        name='phoneNumber'
                        type='tel'
                    />
                    <ErrorMessage className={'error'} name='phoneNumber' component='div' />


                    <label htmlFor='password'>{language.password}</label>
                    <Field
                        id='password'
                        name='password'
                        type='password'
                    />
                    <ErrorMessage className={'error'} name='password' component='div' />


                    <label htmlFor='name'>{language.name}</label>
                    <Field
                        id='name'
                        name='name'
                        type='text'
                    />
                    <ErrorMessage className={'error'} name='name' component='div' />

                    <label htmlFor='lastName'>{language.lastName}</label>
                    <Field
                        id='lastName'
                        name='lastName'
                        type='text'
                    />
                    <ErrorMessage className={'error'} name='lastName' component='div' />

                    <label className='checkbox'>
                        <Field
                            name='terms'
                            type='checkbox'
                        />
                        <p>
                            {language.privacyPolicy}
                        </p>
                    </label>

                    <ErrorMessage className={'error'} name='terms' component='div' />

                    <div className='onSubmitButton'>
                        <button type='submit' className='button'><p>{language.register}</p></button>
                    </div>
                </Form>
            </div>
        </Formik >
    )
}

export default RegistrationForm