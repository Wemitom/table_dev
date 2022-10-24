import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import 'simplebar-react/dist/simplebar.min.css';

import ProtectedRoute from './components/ProtectedRoute';
import UserProfile from './components/UserProfile';
import AuthLayout from './layouts/AuthLayout';
import FooterLayout from './layouts/FooterLayout';
import HeaderLayout from './layouts/HeaderLayout';
import UserProfileLayout from './layouts/UserProfileLayout';
import ForPartnersPage from './pages/ForPartnersPage';
import Home from './pages/Home';
import LoginUser from './pages/LoginUser';
import ReservationStatusPage from './pages/ReservationStatusPage';
import Restaurant from './pages/Restaurant';
import Signup from './pages/Signup';
import { RootState } from './store';
import { useGetTranslationQuery } from './store/api/localizationApi';
import { Languages } from './store/interfaces';
import { setTranslations } from './store/slices/localizeSlice';

function App() {
  // Фетчим .json с локализацией для выбранного языка
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

  // Ставим текущий язык в тэг html
  useEffect(() => {
    document.documentElement.lang =
      Object.keys(Languages)[Object.values(Languages).indexOf(language)];
  }, [language]);

  return (
    <Routes>
      {/* Маршрут для регистрации/авторизации */}
      <Route path="/" element={<AuthLayout />}>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<LoginUser />} />
      </Route>
      {/* Главный маршрут с хедером */}
      <Route path="/" element={<HeaderLayout />}>
        <Route path="/" element={<FooterLayout />}>
          {/* Лендинг */}
          <Route index element={<Home />} />
          {/* Страница с информацией для партнеров */}
          <Route path="for-partners" element={<ForPartnersPage />} />
          {/* Страница ресторана */}
          <Route path="restaurant/:name" element={<Restaurant />} />
          {/* Статус резервации */}
          <Route
            path="restaurant/:name/reservation-status"
            element={<ReservationStatusPage />}
          />
        </Route>
        {/* Маршрут для страниц требующих авторизации */}
        <Route path="" element={<ProtectedRoute />}>
          {/* Личная страница */}
          <Route path="profile" element={<UserProfileLayout />}>
            <Route path="" element={<UserProfile />} />
            <Route path="favorites" element={<UserProfile />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
