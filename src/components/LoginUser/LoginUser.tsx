import { useState } from 'react';

import { Stack, Switch } from '@mui/material';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { useLazyLoginUserQuery } from '../../store/authApi';
import { setTokens, setUser } from '../../store/authSlice';
import LoginFormPhone from '../LoginForm/LoginFormPhone';
import LoginFormUserPassword from '../LoginFormUserPassword/LoginFormUserPassword';
import PhoneCode from '../PhoneCode/PhoneCode';
import { LoginData } from './interfaces';

const LoginUser = () => {
  const [phoneSubmited, setPhoneSubmited] = useState(false);
  const [authWithPassword, setAuthWithPassword] = useState(false);
  const [login, { data, error, isLoading }] = useLazyLoginUserQuery();
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const handleLogin = (values: LoginData) => {
    login(values).then(() => {
      if (data) {
        dispatch(
          setTokens({
            token: data.token!,
            refresh: data.refresh!,
          })
        );
        dispatch(setUser(data.user!));
        navigator('/');
      }
    });
  };

  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="center"
      >
        По телефону
        <Switch
          checked={authWithPassword}
          onChange={(e) => setAuthWithPassword(e.target.checked)}
        />
        По паролю
      </Stack>
      {authWithPassword ? (
        <LoginFormUserPassword
          handleLogin={handleLogin}
          error={error as FetchBaseQueryError | undefined}
        />
      ) : !phoneSubmited ? (
        <LoginFormPhone handleSubmit={() => setPhoneSubmited(true)} />
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
