import { useState } from 'react';

import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { useLazySignupUserQuery } from '../../store/authApi';
import { setTokens, setType, setUser } from '../../store/authSlice';
import { AuthState } from '../../store/interfaces';
import { RootState } from '../../store/store';
import SignupForm from '../SignupForm/SignupForm';
import SignupSuccessful from '../SignupSuccessful/SignupSuccessful';
import { SignupData } from './interfaces';

const SignupUser = () => {
  const [signup, { error, isLoading, isSuccess }] = useLazySignupUserQuery();
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const setAccountInfo = (data: AuthState) => {
    dispatch(
      setTokens({
        token: data.token!,
        refresh: data.refresh!,
      })
    );
    dispatch(setUser(data.user!));
    dispatch(setType('client'));
  };

  const handleSignup = async (values: SignupData) => {
    /* Посылаем информацию на бэкенд => получаем в ответ либо 201, либо 4** / 5** =>
       201 - Сохраняем token, refreshToken и инфу об аккаунте в redux store
       4** / 5** - Выводим инфу об ошибке
    */
    try {
      const data = await signup(values).unwrap();
      setAccountInfo(data);
    } catch (err) {
      console.log(err);
    }
  };

  if (user && !isSuccess) {
    return <Navigate to="/" replace />;
  } else {
    return (
      <>
        {!isSuccess ? (
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
  }
};

export default SignupUser;
