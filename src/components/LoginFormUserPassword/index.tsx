import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { LoginData } from '../../pages/LoginUser/interfaces';
import { LoginSchema } from './interface';

const LoginFormUserPassword = ({
  handleLogin,
  error,
}: {
  handleLogin: (values: LoginData) => void;
  error: FetchBaseQueryError | undefined;
}) => {
  const invalidInput = {
    border: '1px solid #f79191',
  };

  return (
    <Formik
      initialValues={{
        phoneNum: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => handleLogin(values)}
    >
      {({ errors, touched }) => (
        <Form className="register-form">
          <div className="register-form__inner">
            <div className="register-form__group">
              <label className="register-form__label" htmlFor="user-login">
                Телефон
              </label>
              <Field
                className="register-form__input input-reset"
                id="phoneNum"
                style={
                  (errors.phoneNum && touched.phoneNum) || error
                    ? invalidInput
                    : undefined
                }
                type="tel"
                placeholder="+7(900) 123-45-67"
                name="phoneNum"
              />
              <ErrorMessage
                name="phoneNum"
                component="span"
                className="input-error"
              />
            </div>
            <div className="register-form__group">
              <label className="register-form__label" htmlFor="password">
                Пароль
              </label>
              <Field
                className="register-form__input input-reset"
                id="password"
                style={
                  (errors.password && touched.password) || error
                    ? invalidInput
                    : undefined
                }
                type="password"
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                name="password"
              />
              <ErrorMessage
                name="password"
                component="span"
                className="input-error"
              />
            </div>
            {error && (
              <span className="input-error">
                Введен неверный email или пароль
              </span>
            )}
          </div>
          <button
            className="register-form__btn main-btn btn-reset"
            type="submit"
          >
            Далее
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginFormUserPassword;
