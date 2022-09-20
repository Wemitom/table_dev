import { Outlet } from 'react-router-dom';

import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Header from './Header';

const HeaderLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
    </>
  );
};

export default HeaderLayout;
