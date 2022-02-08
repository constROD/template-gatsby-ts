import Login from 'components/Login/Login';
import { navigate } from 'gatsby';
import React from 'react';
import { ROUTES } from 'shared/constants/Routes';
import { useAppSelector } from 'shared/hooks/useRedux';

const IndexPage: React.FC = () => {
  const isAuth = useAppSelector(state => state.user.isAuth);

  if (isAuth) {
    navigate(ROUTES.HOME);
    return null;
  }

  return <Login />;
};

export default IndexPage;
