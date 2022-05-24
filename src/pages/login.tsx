import Login from 'components/Login/Login';
import { navigate } from 'gatsby';
import React from 'react';
import { useEffectOnce } from 'react-use';
import { ROUTES } from 'shared/constants/Routes';
import { useUserStore } from 'shared/store';

const IndexPage: React.FC = () => {
  const { isSignedIn } = useUserStore(state => state.computed);

  useEffectOnce(() => {
    if (isSignedIn) navigate(ROUTES.HOME);
  });

  if (isSignedIn) return null;

  return <Login />;
};

export default IndexPage;
