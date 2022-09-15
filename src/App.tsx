import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ForPartners from './components/ForPartners/ForPartners';
import HeaderLayout from './components/Header/HeaderLayout';
import Home from './components/Home/Home';
import AuthLayout from './components/LoginFooter/AuthLayout';
import LoginUser from './components/LoginUser/LoginUser';
import RegisterUser from './components/RegisterUser/RegisterUser';

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="signup" element={<RegisterUser />} />
            <Route path="login" element={<LoginUser />} />
          </Route>
          <Route path="/" element={<HeaderLayout />}>
            <Route index element={<Home />} />
            <Route
              path="for-partners"
              element={
                <>
                  <ForPartners /> <Footer />
                </>
              }
            />
          </Route>
        </Routes>
      </div>
    </div>
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
