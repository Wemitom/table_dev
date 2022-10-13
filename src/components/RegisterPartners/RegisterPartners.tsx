import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

import {
  SignupRestaurantData,
  SignupRestaurantSchema,
} from '../RegisterPartners/interfaces';

const RegisterPartners = ({
  handleSignup,
  loading,
  error,
}: {
  handleSignup: (values: SignupRestaurantData) => void;
  loading: boolean;
  error: FetchBaseQueryError | undefined;
}) => {
  const invalidField = {
    border: '1px solid #f79191',
  };
  const red = {
    color: 'red',
  };

  return (
    <Formik
      initialValues={{
        restaurantName: '',
        login: '',
        password: '',
        passwordConfirmation: '',
      }}
      validationSchema={SignupRestaurantSchema}
      onSubmit={(values) => handleSignup(values)}
    >
      {({ handleChange, errors, touched, values }) => (
        <Form className="register-form">
          <div className="register-form__inner">
            <div className="register-form__group">
              <label className="register-form__label" htmlFor="restaurantName">
                Название ресторана<span style={red}>*</span>
              </label>
              <Field
                className={`register-form__field field-reset${
                  loading ? ' field--disabled' : ''
                }`}
                style={
                  errors.restaurantName && touched.restaurantName ? invalidField : null
                }
                id="restaurantName"
                type="text"
                name="restaurantName"
                placeholder="Название ресторана"
                disabled={loading}
              />
              <ErrorMessage
                name="restaurantName"
                component="span"
                className="field-error"
              />
            </div>
            <div className="register-form__group">
              <label className="register-form__label" htmlFor="login">
                Логин
              </label>
              <Field
                className={`register-form__field field-reset${
                  loading ? ' field--disabled' : ''
                }`}
                style={errors.login && touched.login ? invalidField : null}
                id="login"
                type="login"
                name="login"
                placeholder="Логин"
                disabled={loading}
              />
              <ErrorMessage
                name="login"
                component="span"
                className="field-error"
              />
            </div>
            <div className="register-form__group">
              <label className="register-form__label" htmlFor="password">
                Пароль<span style={red}>*</span>
              </label>
              <Field
                className={`register-form__field field-reset${
                  loading ? ' field--disabled' : ''
                }`}
                style={
                  errors.password && touched.password ? invalidField : null
                }
                id="password"
                type="password"
                name="password"
                placeholder="Пароль"
                disabled={loading}
              />
              <ErrorMessage
                name="password"
                component="span"
                className="field-error"
              />
            </div>
            <div className="register-form__group">
              <label
                className="register-form__label"
                htmlFor="passwordConfirmation"
              >
                Повторите пароль<span style={red}>*</span>
              </label>
              <Field
                className={`register-form__field field-reset${
                  loading ? ' field--disabled' : ''
                }`}
                style={
                  errors.passwordConfirmation && touched.passwordConfirmation
                    ? invalidField
                    : null
                }
                id="passwordConfirmation"
                type="password"
                name="passwordConfirmation"
                placeholder="Повторите пароль"
                disabled={loading}
              />
              <ErrorMessage
                name="passwordConfirmation"
                component="span"
                className="field-error"
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
            <p className="field-error" style={{ marginBottom: '0.5em' }}>
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

export default RegisterPartners;
