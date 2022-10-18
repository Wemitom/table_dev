import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import SignupPartnersForm from '../../components/SignupPartnersForm';
import { SignupRestaurantData } from '../../components/SignupPartnersForm/interfaces';
import SignupSuccessful from '../../components/SignupSuccessful';
import SignupUserForm from '../../components/SignupUserForm';
import { RootState } from '../../store';
import { useLazySignupUserQuery } from '../../store/api/authApi';
import { AuthState } from '../../store/interfaces';
import { setTokens, setType, setUser } from '../../store/slices/authSlice';
import { SignupData } from './interfaces';

const Signup = () => {
  const [signup, { error, isLoading, isSuccess }] = useLazySignupUserQuery();
  const user = useSelector((state: RootState) => state.auth.user);
  const version = useSelector((state: RootState) => state.version.version);
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

  const handleSignup = async (values: SignupData | SignupRestaurantData) => {
    /* Посылаем информацию на бэкенд => получаем в ответ либо 201, либо 4** / 5** =>
       201 - Сохраняем token, refreshToken и инфу об аккаунте в redux store
       4** / 5** - Выводим инфу об ошибке
    */
    try {
      let data: AuthState;
      if (version === 'forClients') {
        data = await signup(values as SignupData).unwrap();
      } else {
        data = {
          token: 'test',
          refresh: 'test',
          user: {
            id_visitor: 1,
            email: 'test@test.com',
          },
          type: 'partner',
        };
      }
      setAccountInfo(data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderForm = () =>
    version === 'forClients' ? (
      <SignupUserForm
        handleSignup={handleSignup}
        loading={isLoading}
        error={error as FetchBaseQueryError | undefined}
      />
    ) : (
      <SignupPartnersForm
        handleSignup={handleSignup}
        loading={isLoading}
        error={error as FetchBaseQueryError | undefined}
      />
    );

  if (user && !isSuccess) {
    return <Navigate to="/" replace />;
  } else {
    return <>{!isSuccess ? renderForm() : <SignupSuccessful />}</>;
  }
};

export default Signup;
