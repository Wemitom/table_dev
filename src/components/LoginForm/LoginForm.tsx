import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const LoginForm = ({ handleSubmit }: { handleSubmit: () => void }) => {
  const invalidInput = {
    border: '1px solid #f79191',
  };

  return (
    <Formik
      initialValues={{
        phoneNum: '',
      }}
      validationSchema={Yup.object().shape({
        phoneNum: Yup.string()
          .required('Обязательно для заполнения')
          .phone('RU', true, 'Неверный телефон!'),
      })}
      onSubmit={handleSubmit}
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
                  errors.phoneNum && touched.phoneNum ? invalidInput : null
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
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
