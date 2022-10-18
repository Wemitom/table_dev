import ChooseRestaurant from '../../components/ChooseRestaurant';
import Footer from '../../components/Footer';
import ImagesCarousel from '../../components/ImagesCarousel';

const Home = () => {
  return (
    <>
      <div className="content">
        <ImagesCarousel
          slides={[
            {
              imgPath: '/img/hero-bg/bg1.jpg',
              title: 'Tottori',
              description:
                'Текст с описанием ресторана. Буквально 2 предложения. Желательно указать кухню',
            },
            {
              imgPath: '/img/hero-bg/bg2.jpg',
              title: 'Tottori',
              description:
                'Текст с описанием ресторана. Буквально 2 предложения. Желательно указать кухню',
            },
            {
              imgPath: '/img/hero-bg/bg1.jpg',
              title: 'Tottori',
              description:
                'Текст с описанием ресторана. Буквально 2 предложения. Желательно указать кухню',
            },
            {
              imgPath: '/img/hero-bg/bg2.jpg',
              title: 'Tottori',
              description:
                'Текст с описанием ресторана. Буквально 2 предложения. Желательно указать кухню',
            },
          ]}
        />
        <ChooseRestaurant />
      </div>
      <Footer />
    </>
  );
};

export default Home;
