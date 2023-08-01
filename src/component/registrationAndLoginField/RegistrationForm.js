import './loginAndRegistrationForm.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { GrClose } from "react-icons/gr";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const RegistrationForm = ({ handleCloseModals }) => {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                name: '',
                lastName: '',
                terms: false
            }}

            validationSchema={Yup.object({
                email: Yup.string()
                    .email('неправильный эл. адрес')
                    .required('Поле Эл. почта обязательно для заполнения'),

                password: Yup.string()
                    .min(6, 'Пароль должен содержать минимум 6 символов')
                    .max(12, 'Пароль должен содержать максимум 12 символов')
                    .required('Поле пароля обязательно для заполнения'),

                name: Yup.string()
                    .min(4, "Имя должен содержать максимум 4 символов")
                    .max(12, 'Имя должен содержать максимум 12 символов')
                    .required('Поле Имя обязательно для заполнения'),

                lastName: Yup.string()
                    .min(4, "Фамилия должен содержать максимум 4 символов")
                    .max(16, 'Фамилия  должен содержать максимум 16 символов')
                    .required('Поле Фамилия обязательно для заполнения'),

                terms: Yup.boolean()
                    .required('Необходимо согласие')
                    .oneOf([true], 'Необходимо согласие')
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
                <h2>Регистрация</h2>
                <Form className="form">
                    <label htmlFor="email">Эл. почта</label>
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


                    <label htmlFor="name">Имя</label>
                    <Field
                        id="name"
                        name="name"
                        type="text"
                    />
                    <ErrorMessage className={'error'} name='name' component="div" />

                    <label htmlFor="name">Фамилия</label>
                    <Field
                        id="lastName"
                        name="lastName"
                        type="text"
                    />
                    <ErrorMessage className={'error'} name='lastName' component="div" />

                    <label className="checkbox">
                        <Field
                            name="terms"
                            type="checkbox"

                        />
                        <p>
                            Соглашаетесь с политикой конфиденциальности?
                        </p>
                    </label>

                    <ErrorMessage className={'error'} name="terms" component="div" />

                    <div className='onSubmitButton'>
                        <button type="submit" className='button'><p>Регистрация</p></button>
                    </div>
                </Form>
            </div>
        </Formik >
    )
}

export default RegistrationForm