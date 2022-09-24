import { useSelector } from 'react-redux';
import { Route, Navigate, useLocation, Outlet } from 'react-router';

import { RootState } from '../../store/store';

const ProtectedRoute = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const location = useLocation();

  if (auth.user) {
    if (location.pathname === '/login') {
      return <Navigate to="/" replace />;
    }
    return <Outlet />;
  } else if (!auth.user) {
    return <Navigate to="/login" replace />;
  } else {
    return <></>;
  }
};

export default ProtectedRoute;
