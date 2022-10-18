import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

import { RootState } from '../../store';

// Ставим данный компонент как пропс component для Route, когда для выбранного маршрута нужна авторизация
const ProtectedRoute = () => {
  const auth = useSelector((state: RootState) => state.auth);

  if (auth.user) {
    return <Outlet />;
  } else if (!auth.user) {
    return <Navigate to="/login" replace />;
  } else {
    return <></>;
  }
};

export default ProtectedRoute;
