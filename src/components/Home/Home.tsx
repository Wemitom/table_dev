import ChooseRestaurant from '../ChooseRestaurant/ChooseRestaurant';
import Footer from '../Footer/Footer';
import ImagesCarousel from '../ImagesCarousel/ImagesCarousel';

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
