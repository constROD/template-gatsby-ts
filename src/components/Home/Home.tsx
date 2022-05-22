import { HomeWrapper } from './Home.styled';

import { navigate } from 'gatsby';
import React from 'react';
import { useAsyncFn } from 'react-use';
import { ROUTES } from 'shared/constants/Routes';
import useAppStore from 'shared/store';
import CommonUtil from 'shared/utils/Common';

const Home: React.FC = () => {
  const logout = useAppStore(state => state.logout);

  const [, logoutAsync] = useAsyncFn(async () => {
    const { error } = logout();

    if (!error) return navigate(ROUTES.LOGIN);

    CommonUtil.logger({
      path: 'components/Home/Home.tsx',
      event: 'loginAsync',
      log: error,
    });
  });

  return (
    <HomeWrapper>
      This is HomePage. <button onClick={logoutAsync}>Logout</button>
    </HomeWrapper>
  );
};

export default Home;
