import { useState } from 'react';

import { Link } from 'react-router-dom';

import SignupForm from '../SignupForm/SignupForm';
import SignupSuccessful from '../SignupSuccessful/SignupSuccessful';
import { SignupData } from './interfaces';

const SignupUser = () => {
  const [signupSuccessful, setSignupSuccessful] = useState(false);

  const handleSignup = (values: SignupData) => {
    /* Посылаем информацию на бэкенд => получаем в ответ либо 200, либо 4** / 5** =>
       200 - Сохраняем token, refreshToken и инфу об аккаунте в redux store
       4** / 5** - Выводим инфу об ошибке
    */
    setSignupSuccessful(true);
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
          {!signupSuccessful ? (
            <SignupForm handleSignup={handleSignup} />
          ) : (
            <SignupSuccessful />
          )}
        </div>
      </div>
    </section>
  );
};

export default SignupUser;
