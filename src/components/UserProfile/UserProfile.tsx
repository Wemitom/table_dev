import { useLocation } from 'react-router-dom';

import Reservations from '../Reservations/Reservations';
import UserInfo from '../UserInfo/UserInfo';

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
