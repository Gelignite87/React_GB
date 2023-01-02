import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = ({ component }) => {
    const isAuth = useSelector((store) => store.profile.isAuth)
    console.log('component',component);

  if (!isAuth) {
    return <Navigate to="/singin" />;
  }

  return component ? component : <Outlet />;
};