import { FC } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { getCookie } from '../../utils/cookie';

export const ProtectedRoute: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  if (getCookie('accessToken')) {
    return children;
  } else {
    return <Navigate to='/login' />;
  }
};
