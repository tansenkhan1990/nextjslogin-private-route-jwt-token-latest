import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { logout } from '../store/authSlice';

const LogoutPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
	dispatch(logout());
	document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
	router.push('/logout');
  }, [dispatch, router]);

  return <div>Logging out...</div>;
};

export default LogoutPage;