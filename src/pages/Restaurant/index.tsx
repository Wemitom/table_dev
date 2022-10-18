import Footer from '../../components/Footer';
import HallScheme from '../../components/HallScheme';
import ImagesCarousel from '../../components/ImagesCarousel';
import RestaurantDescription from '../../components/RestaurantDescription';

const Restaurant = () => {
  return (
    <div className="content">
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
      <HallScheme />
      <Footer />
    </div>
  );
};

export default Restaurant;
