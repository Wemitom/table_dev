import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import 'simplebar-react/dist/simplebar.min.css';

import Footer from './components/Footer/Footer';
import ForPartners from './components/ForPartners/ForPartners';
import HeaderLayout from './components/Header/HeaderLayout';
import Home from './components/Home/Home';
import ImagesCarousel from './components/ImagesCarousel/ImagesCarousel';
import AuthLayout from './components/LoginFooter/AuthLayout';
import LoginUser from './components/LoginUser/LoginUser';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import RestaurantDescription from './components/RestaurantDescription/RestaurantDescription';
import SignupUser from './components/SignupUser/SignupUser';
import UserProfile from './components/UserProfile/UserProfile';
import UserProfileLayout from './components/UserProfileLayout/UserProfileLayout';
import { Languages } from './store/interfaces';
import { useGetTranslationQuery } from './store/localizationApi';
import { setTranslations } from './store/localizeSlice';
import { RootState } from './store/store';

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
        <Route path="signup" element={<SignupUser />} />
        <Route path="login" element={<LoginUser />} />
      </Route>
      {/* Главный маршрут с хедером */}
      <Route path="/" element={<HeaderLayout />}>
        {/* Лендинг */}
        <Route index element={<Home />} />
        {/* Страница с информацией для партнеров */}
        <Route
          path="for-partners"
          element={
            <>
              <div className="content">
                <ForPartners />
              </div>
              <Footer />
            </>
          }
        />
        {/* Страница ресторана */}
        <Route
          path="restaurant/:name"
          element={
            <>
              <ImagesCarousel
                slides={[
                  {
                    imgPath: '/img/hero-bg/bg1.jpg',
                    title: '',
                    description: '',
                  },
                ]}
              />
              <RestaurantDescription />
              <Footer />
            </>
          }
        />
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
