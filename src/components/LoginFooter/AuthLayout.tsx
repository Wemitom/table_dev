import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import LoginFooter from './LoginFooter';

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
        <Outlet />
      </div>
      <LoginFooter />
    </>
  );
};

export default AuthLayout;
