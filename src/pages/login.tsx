import Login from 'components/Login/Login';
import { navigate } from 'gatsby';
import React from 'react';
import { useEffectOnce } from 'react-use';
import { ROUTES } from 'shared/constants/Routes';
import useAppStore from 'shared/store';

const IndexPage: React.FC = () => {
  const isAuth = useAppStore(state => state.isAuth);

  useEffectOnce(() => {
    if (isAuth) navigate(ROUTES.HOME);
  });

  if (isAuth) return null;

  return <Login />;
};

export default IndexPage;
