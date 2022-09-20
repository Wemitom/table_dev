import { useState } from 'react';

import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { useLazySignupUserQuery } from '../../store/authApi';
import { setTokens, setUser } from '../../store/authSlice';
import SignupForm from '../SignupForm/SignupForm';
import SignupSuccessful from '../SignupSuccessful/SignupSuccessful';
import { SignupData } from './interfaces';

const SignupUser = () => {
  const [signupSuccessful, setSignupSuccessful] = useState(false);
  const [signup, { data, error, isLoading }, lastPromiseInfo] =
    useLazySignupUserQuery();

  const dispatch = useDispatch();

  const handleSignup = (values: SignupData) => {
    /* Посылаем информацию на бэкенд => получаем в ответ либо 200, либо 4** / 5** =>
       200 - Сохраняем token, refreshToken и инфу об аккаунте в redux store
       4** / 5** - Выводим инфу об ошибке
    */
    signup(values).then(() => {
      if (data) {
        dispatch(
          setTokens({
            accessToken: data.accessToken!,
            refreshToken: data.refreshToken!,
          })
        );
        dispatch(setUser(data.user!));
        setSignupSuccessful(true);
      }
    });
  };

  return (
    <>
      {!signupSuccessful ? (
        <SignupForm
          handleSignup={handleSignup}
          loading={isLoading}
          error={error as FetchBaseQueryError | undefined}
        />
      ) : (
        <SignupSuccessful />
      )}
    </>
  );
};

export default SignupUser;
