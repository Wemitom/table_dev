import { useState } from 'react';

import { Link } from 'react-router-dom';

import SignupForm from '../SignupForm/SignupForm';
import SignupSuccessful from '../SignupSuccessful/SignupSuccessful';
import { SignupData } from './interfaces';

const SignupUser = () => {
  const [signupSuccessful, setSignupSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = (values: SignupData) => {
    /* Посылаем информацию на бэкенд => получаем в ответ либо 200, либо 4** / 5** =>
       200 - Сохраняем token, refreshToken и инфу об аккаунте в redux store
       4** / 5** - Выводим инфу об ошибке
    */

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSignupSuccessful(true);
    }, 1000);
  };

  return (
    <>
      {!signupSuccessful ? (
        <SignupForm handleSignup={handleSignup} loading={loading} />
      ) : (
        <SignupSuccessful />
      )}
    </>
  );
};

export default SignupUser;
