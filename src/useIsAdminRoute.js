import { useLocation } from 'react-router-dom';

export const useIsAdminRoute = () => {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith('/admin-secret');
  
  return isAdminRoute;
};
