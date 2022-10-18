import { useLocation } from 'react-router-dom';

import Reservations from '../Reservations';
import UserInfo from '../UserInfo';

const UserProfile = () => {
  const location = useLocation();

  return (
    <>
      <UserInfo />
      {location.pathname === '/profile' ? (
        <>
          <Reservations type="current" />
          <Reservations type="history" />
        </>
      ) : (
        <Reservations type="favorites" />
      )}
    </>
  );
};

export default UserProfile;
