import { useEffect } from 'react';

import { Link, Outlet } from 'react-router-dom';

import LoginFooter from '../../components/LoginFooter';

const AuthLayout = () => {
  useEffect(() => {
    document.body.classList.add('page__body--decor');

    return () => {
      document.body.classList.remove('page__body--decor');
    };
  }, []);

  return (
    <>
      <div className="content">
        <section className="register-visitor">
          <div className="container">
            <div className="register-visitor__inner">
              <Link to="/" className="register-visitor__logo logo">
                <img
                  src="/img/logo.svg"
                  alt="Логотип ресторана"
                  width="135"
                  height="59"
                />
              </Link>
              <Outlet />
            </div>
          </div>
        </section>
      </div>
      <LoginFooter />
    </>
  );
};

export default AuthLayout;
