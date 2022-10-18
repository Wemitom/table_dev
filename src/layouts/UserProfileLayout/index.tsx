import { Outlet } from 'react-router-dom';

import ShortFooter from '../../components/ShortFooter';

const UserProfileLayout = () => {
  return (
    <>
      <div className="content">
        <Outlet />
      </div>
      <ShortFooter />
    </>
  );
};

export default UserProfileLayout;
