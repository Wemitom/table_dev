import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import ForPartners from './components/ForPartners/ForPartners';
import HeaderLayout from './components/Header/HeaderLayout';
import Home from './components/Home/Home';
import AuthLayout from './components/LoginFooter/AuthLayout';
import LoginUser from './components/LoginUser/LoginUser';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import RegisterPartners from './components/RegisterPartners/RegisterPartners';
import RegisterUser from './components/SignupUser/SignupUser';
import UserProfile from './components/UserProfile/UserProfile';
import UserProfileLayout from './components/UserProfileLayout/UserProfileLayout';
import { Languages } from './store/interfaces';
import { useGetTranslationQuery } from './store/localizationApi';
import { setTranslations } from './store/localizeSlice';
import { RootState } from './store/store';

function App() {
  const language = useSelector(
    (state: RootState) => state.localization.language
  );
  const { data } = useGetTranslationQuery(language);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setTranslations(data));
    }
  }, [dispatch, data]);

  useEffect(() => {
    document.documentElement.lang =
      Object.keys(Languages)[Object.values(Languages).indexOf(language)];
  }, [language]);

  return (
    <RegisterPartners handleSignup={() => { } } loading={false} error={undefined} />
  );
}

export default App;
