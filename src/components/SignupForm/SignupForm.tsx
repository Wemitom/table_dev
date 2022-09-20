import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

import { SignupData, SignupSchema } from '../SignupUser/interfaces';

const SignupForm = ({
  handleSignup,
  loading,
  error,
}: {
  handleSignup: (values: SignupData) => void;
  loading: boolean;
  error: FetchBaseQueryError | undefined;
}) => {
  const invalidInput = {
    border: '1px solid #f79191',
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        phoneNum: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => handleSignup(values)}
    >
      {({ errors, touched }) => (
        <Form className="register-form">
          <div className="register-form__inner">
            <div className="register-form__group">
              <label className="register-form__label" htmlFor="firstName">
                Имя
              </label>
              <Field
                className={`register-form__input input-reset${
                  loading ? ' input--disabled' : ''
                }`}
                style={
                  errors.firstName && touched.firstName ? invalidInput : null
                }
                id="firstName"
                type="text"
                name="firstName"
                placeholder="Имя"
                disabled={loading}
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
                className={`register-form__input input-reset${
                  loading ? ' input--disabled' : ''
                }`}
                style={
                  errors.lastName && touched.lastName ? invalidInput : null
                }
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Фамилия"
                disabled={loading}
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
                className={`register-form__input input-reset${
                  loading ? ' input--disabled' : ''
                }`}
                style={
                  errors.phoneNum && touched.phoneNum ? invalidInput : null
                }
                id="phoneNum"
                type="tel"
                name="phoneNum"
                placeholder="+7(900) 123-45-67"
                disabled={loading}
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
                className={`register-form__input input-reset${
                  loading ? ' input--disabled' : ''
                }`}
                style={errors.email && touched.email ? invalidInput : null}
                id="email"
                type="email"
                name="email"
                placeholder="example@example.com"
                disabled={loading}
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
            disabled={loading}
          >
            Зарегистрироваться
          </button>
          {error && (
            <p className="input-error" style={{ marginBottom: '0.5em' }}>
              При регистрации произошла ошибка!
            </p>
          )}
          <p className="register-form__text">
            Нажимая «Зарегистрироваться», вы соглашаетесь с 
            <Link to="#">Условиями использования</Link>
            и подтверждаете прочтение
            <Link to="#"> Политики конфиденциальности.</Link>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
