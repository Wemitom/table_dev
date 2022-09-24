import { Outlet } from 'react-router-dom';

import ShortFooter from '../ShortFooter/ShortFooter';

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
