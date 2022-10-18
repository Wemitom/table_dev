import { useState } from 'react';

import { Stack, Switch } from '@mui/material';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import LoginFormPhone from '../../components/LoginForm';
import LoginFormUserPassword from '../../components/LoginFormUserPassword';
import PhoneCode from '../../components/PhoneCode';
import { RootState } from '../../store';
import { useLazyLoginUserQuery } from '../../store/api/authApi';
import { AuthState } from '../../store/interfaces';
import { setTokens, setType, setUser } from '../../store/slices/authSlice';
import { LoginData } from './interfaces';

const LoginUser = () => {
  const [phoneSubmited, setPhoneSubmited] = useState(false);
  const [authWithPassword, setAuthWithPassword] = useState(false);
  const [login, { error, isSuccess }] = useLazyLoginUserQuery();
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

  const handleLogin = async (values: LoginData) => {
    try {
      const data = await login(values).unwrap();
      setAccountInfo(data);
    } catch (err) {
      console.log(err);
    }
  };

  if (user || isSuccess) {
    return <Navigate to="/" replace />;
  } else {
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
  }
};

export default LoginUser;
