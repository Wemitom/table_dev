import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';

const UserInfo = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <section className="personal-account">
      <div className="container">
        <div className="personal-account__info">
          <img
            className="personal-account__avatar"
            src="/img/personal-private/avatar-img.png"
            alt="Аватар"
            width="200"
            height="200"
          />
          <div className="personal-account__inner">
            <p className="personal-account__name">{user?.name}</p>
            <span className="personal-account__status">Гурман</span>
            <div className="personal-account__rating">
              <svg className="personal-account__star" width="28" height="26">
                <use href="/img/sprite.svg#icon-star"></use>
              </svg>
              4.94
            </div>
          </div>
          <div className="personal-account__contacts">
            {user?.email && (
              <a
                className="personal-account__link"
                href="mailto:abcd@gmail.com"
              >
                {user.email}
              </a>
            )}
            <a className="personal-account__link" href="tel:79123456789">
              {user?.phone}
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

export default UserInfo;
