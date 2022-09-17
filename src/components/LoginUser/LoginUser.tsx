import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

import { SignupSchema } from '../SignupUser/interfaces';

const LoginUser = () => {
  const invalidInput = {
    border: '1px solid #f79191',
  };

  return (
    <section className="register-visitor">
      <div className="container">
        <div className="register-visitor__inner">
          <Link
            to="/"
            className="register-visitor__logo register-visitor__logo--login logo"
          >
            <img
              src="../img/logo.svg"
              alt="Логотип ресторана"
              width="135"
              height="59"
            />
          </Link>
          <Formik
            initialValues={{
              phoneNum: '',
            }}
            validationSchema={SignupSchema.fields.phoneNum}
            onSubmit={(values) => alert(JSON.stringify(values))}
          >
            {({ errors, touched }) => (
              <Form className="register-form" action="#">
                <div className="register-form__inner">
                  <div className="register-form__group">
                    <label className="register-form__label" htmlFor="tel">
                      Введите номер телефона
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
                </div>
                <button
                  className="register-form__btn main-btn btn-reset"
                  type="submit"
                >
                  Далее
                </button>
                <div className="register-form__links">
                  <Link to="/auth/signup" className="register-form__link">
                    Нет аккаунта?
                  </Link>
                  <Link
                    to="/auth/signup"
                    className="register-form__link register-form__link--register"
                  >
                    Зарегистрироваться
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default LoginUser;
