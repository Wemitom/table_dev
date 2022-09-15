const RestaurantInfo = () => {
  return (
    <section className="personal-account">
      <div className="container">
        <div className="personal-account__info">
          <img
            className="personal-account__avatar"
            src="img/personal-private/img3.png"
            alt="Аватар"
            width="200"
            height="200"
          />
          <div className="personal-account__inner personal-account__inner--partners">
            <p className="personal-account__name">Tottori</p>
          </div>
          <div className="personal-account__contacts">
            <a className="personal-account__link" href="mailto:abcd@gmail.com">
              abcd@gmail.com{' '}
            </a>
            <a className="personal-account__link" href="tel:79123456789">
              +7 912 345-67-89{' '}
            </a>
            <a className="personal-account__edit" href="#">
              редактировать
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantInfo;
