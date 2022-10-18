import { Radio, RadioGroup } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

import {
  FormGenders,
  SignupData,
  SignupSchema,
} from '../../pages/Signup/interfaces';

const SignupUserForm = ({
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
  const red = {
    color: 'red',
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        telegram: '',
        phoneNum: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        gender: FormGenders.first,
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => handleSignup(values)}
    >
      {({ handleChange, errors, touched, values }) => (
        <Form className="register-form">
          <div className="register-form__inner">
            <div className="register-form__group">
              <label className="register-form__label" htmlFor="firstName">
                Имя<span style={red}>*</span>
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
              <label className="register-form__label" htmlFor="telegram">
                Telegram
              </label>
              <Field
                className={`register-form__input input-reset${
                  loading ? ' input--disabled' : ''
                }`}
                style={
                  errors.telegram && touched.telegram ? invalidInput : null
                }
                id="telegram"
                type="text"
                name="telegram"
                placeholder="Telegram"
                disabled={loading}
              />
              <ErrorMessage
                name="telegram"
                component="span"
                className="input-error"
              />
            </div>
            <div className="register-form__group">
              <label className="register-form__label" htmlFor="phoneNum">
                Телефон<span style={red}>*</span>
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
            <div className="register-form__group">
              <label className="register-form__label" htmlFor="password">
                Пароль<span style={red}>*</span>
              </label>
              <Field
                className={`register-form__input input-reset${
                  loading ? ' input--disabled' : ''
                }`}
                style={
                  errors.password && touched.password ? invalidInput : null
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
                className="input-error"
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
                className={`register-form__input input-reset${
                  loading ? ' input--disabled' : ''
                }`}
                style={
                  errors.passwordConfirmation && touched.passwordConfirmation
                    ? invalidInput
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
                className="input-error"
              />
            </div>
            <div className="register-form__group">
              <label className="register-form__label" htmlFor="gender">
                Пол<span style={red}>*</span>
              </label>
              <RadioGroup
                defaultValue="Феечка"
                id="gender"
                name="gender"
                onChange={handleChange}
                value={values.gender}
              >
                <FormControlLabel
                  value={FormGenders.first}
                  control={<Radio />}
                  label="Феечка"
                />
                <FormControlLabel
                  value={FormGenders.second}
                  control={<Radio />}
                  label="Принц"
                />
                <FormControlLabel
                  value={FormGenders.third}
                  control={<Radio />}
                  label="Другое"
                />
              </RadioGroup>
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

export default SignupUserForm;
