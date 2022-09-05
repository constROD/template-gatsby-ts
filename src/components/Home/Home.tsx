import { HomeWrapper } from './Home.styled';

import { navigate } from 'gatsby';
import React from 'react';
import { useAsyncFn } from 'react-use';
import { ROUTES } from 'shared/constants/Routes';
import { useUserStore } from 'shared/store';
import CommonUtil from 'shared/utils/Common';

const Home: React.FC = () => {
  const logout = useUserStore(state => state.logout);

  const [, logoutAsync] = useAsyncFn(async () => {
    const response = logout();

    if (!response) return navigate(ROUTES.LOGIN);

    CommonUtil.logger({
      path: 'components/Home/Home.tsx',
      event: 'loginAsync',
      log: response.error,
    });
  });

  return (
    <HomeWrapper>
      <div className="content">
        This is HomePage. <button onClick={logoutAsync}>Logout</button>
      </div>
    </HomeWrapper>
  );
};

export default Home;
