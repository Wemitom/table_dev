import Applications from './components/Applications/Applications';
import BookingCanceled from './components/BookingCanceled/BookingCanceled';
import ChooseRestaurant from './components/ChooseRestaurant/ChooseRestaurant';
import Favorite from './components/Favorite/Favorite';
import Favorites from './components/Favorites/Favorites';
import Footer from './components/Footer/Footer';
import ForPartners from './components/ForPartners/ForPartners';
import GuestAssessment from './components/GuestAssessment/GuestAssessment';
import Header from './components/Header/Header';
import HostesProfile from './components/HostesProfile/HostesProfile';
import ImagesCarousel from './components/ImagesCarousel/ImagesCarousel';
import LoginFooter from './components/LoginFooter/LoginFooter';
import LoginPartner from './components/LoginPartner/LoginPartner';
import LoginUser from './components/LoginUser/LoginUser';
import PhoneCode from './components/PhoneCode/PhoneCode';
import RegisterPartners from './components/RegisterPartners/RegisterPartners';
import RegisterUser from './components/RegisterUser/RegisterUser';
import RestaurantAssessment from './components/RestaurantAssessment/RestaurantAssessment';
import RestaurantDescription from './components/RestaurantDescription/RestaurantDescription';
import RestaurantInfo from './components/RestaurantInfo/RestaurantInfo';
import ShortFooter from './components/ShortFooter/ShortFooter';
import UserInfo from './components/UserInfo/UserInfo';

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <ImagesCarousel
          slides={[
            {
              imgPath: 'img/hero-bg/bg1.jpg',
              title: 'Tottori',
              description:
                'Текст с описанием ресторана. Буквально 2 предложения. Желательно указать кухню',
            },
            {
              imgPath: 'img/hero-bg/bg2.jpg',
              title: 'Tottori',
              description:
                'Текст с описанием ресторана. Буквально 2 предложения. Желательно указать кухню',
            },
          ]}
        />
        <ChooseRestaurant />
        <Footer />
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
