import { useState } from 'react';

import { Link } from 'react-router-dom';

import LoginForm from '../LoginForm/LoginForm';
import PhoneCode from '../PhoneCode/PhoneCode';

const LoginUser = () => {
  const [phoneSubmited, setPhoneSubmited] = useState(false);

  return (
    <>
      {!phoneSubmited ? (
        <LoginForm handleSubmit={() => setPhoneSubmited(true)} />
      ) : (
        <PhoneCode />
      )}
      <div className="register-form__links">
        <Link to="/signup" className="register-form__link">
          Нет аккаунта?
        </Link>
        <Link
          to="/signup"
          className="register-form__link register-form__link--register"
        >
          Зарегистрироваться
        </Link>
      </div>
    </>
  );
};

export default LoginUser;
