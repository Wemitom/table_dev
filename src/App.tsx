import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import ForPartners from './components/ForPartners/ForPartners';
import HeaderLayout from './components/Header/HeaderLayout';
import Home from './components/Home/Home';
import AuthLayout from './components/LoginFooter/AuthLayout';
import LoginUser from './components/LoginUser/LoginUser';
import RegisterUser from './components/SignupUser/SignupUser';
import { Languages } from './store/interfaces';
import { useGetTranslationQuery } from './store/localizationApi';
import { setTranslations } from './store/localizeSlice';
import { RootState } from './store/store';

function App() {
  const language = useSelector(
    (state: RootState) => state.localization.language
  );
  const { data, isError, isLoading, isSuccess } =
    useGetTranslationQuery(language);
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
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="signup" element={<RegisterUser />} />
        <Route path="login" element={<LoginUser />} />
      </Route>
      <Route path="/" element={<HeaderLayout />}>
        <Route index element={<Home />} />
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
      </Route>
    </Routes>
  );
}

export default App;

/* Landing page 
        <Header />
        <ImagesCarousel />
        <ChooseRestaurant />
        <Footer />

    Assessment
        <Header />
        <HostesProfile />
        <GuestAssessment />
        <ShortFooter /> 
*/
