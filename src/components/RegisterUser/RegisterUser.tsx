import { Link } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { SignupSchema } from './interfaces';
import InputMask from 'react-input-mask';

const RegisterUser = () => {
  const invalidInput = {
    border: '1px solid #be0000',
  };

  return (
    <section className="register-visitor">
      <div className="container">
        <div className="register-visitor__inner">
          <Link to="/" className="register-visitor__logo logo">
            <img
              src="/img/logo.svg"
              alt="Логотип ресторана"
              width="135"
              height="59"
            />
          </Link>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              phoneNum: '',
              email: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => console.log(values)}
          >
            {({ errors, touched }) => (
              <Form className="register-form">
                <div className="register-form__inner">
                  <div className="register-form__group">
                    <label className="register-form__label" htmlFor="firstName">
                      Имя
                    </label>
                    <Field
                      className="register-form__input input-reset"
                      style={
                        errors.firstName && touched.firstName
                          ? invalidInput
                          : null
                      }
                      id="firstName"
                      type="text"
                      name="firstName"
                      placeholder="Имя"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="span"
                      className="input-error"
                    />
                  </div>
                  <div className="register-form__group">
                    <label className="register-form__label" htmlFor="lastName">
                      Фамилия
                    </label>
                    <Field
                      className="register-form__input input-reset"
                      style={
                        errors.lastName && touched.lastName
                          ? invalidInput
                          : null
                      }
                      id="lastName"
                      type="text"
                      name="lastName"
                      placeholder="Фамилия"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="span"
                      className="input-error"
                    />
                  </div>
                  <div className="register-form__group">
                    <label className="register-form__label" htmlFor="phoneNum">
                      Телефон
                    </label>
                    <Field
                      className="register-form__input input-reset"
                      style={
                        errors.phoneNum && touched.phoneNum
                          ? invalidInput
                          : null
                      }
                      id="phoneNum"
                      type="tel"
                      name="phoneNum"
                      placeholder="+7(900) 123-45-67"
                    />
                    <ErrorMessage
                      name="phoneNum"
                      component="span"
                      className="input-error"
                    />
                  </div>
                  <div className="register-form__group">
                    <label className="register-form__label" htmlFor="email">
                      Электронная почта
                    </label>
                    <Field
                      className="register-form__input input-reset"
                      style={
                        errors.email && touched.email ? invalidInput : null
                      }
                      id="email"
                      type="email"
                      name="email"
                      placeholder="example@example.com"
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="input-error"
                    />
                  </div>
                </div>
                <button
                  className="register-form__btn main-btn btn-reset"
                  type="submit"
                >
                  Зарегистрироваться
                </button>
                <p className="register-form__text">
                  Нажимая «Зарегистрироваться», вы соглашаетесь с 
                  <Link to="#">Условиями использования</Link>
                  и подтверждаете прочтение
                  <Link to="#"> Политики конфиденциальности.</Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default RegisterUser;
