import { Link } from 'react-router-dom';

const SignupSuccessful = () => {
  return (
    <>
      <div className="register-visitor__box">
        <div className="register-visitor__text">
          <p>Поздравляем! Вы успешно зарегистрировались на платформе Table.</p>
        </div>
      </div>
      <div className="register-visitor__links">
        <Link to="/profile" className="register-visitor__link main-btn">
          В личный кабинет
        </Link>
        <Link to="/" className="register-visitor__link main-btn">
          К списку ресторанов
        </Link>
      </div>
    </>
  );
};

export default SignupSuccessful;
