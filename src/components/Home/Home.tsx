import { HomeWrapper } from './Home.styled';

import React from 'react';
import { useAsyncFn } from 'react-use';
import UserActions from 'shared/redux/User/Actions';

const Home: React.FC = () => {
  const { logout } = UserActions();

  const [, logoutAsync] = useAsyncFn(async () => {
    const { error } = await logout();

    if (error) {
      // eslint-disable-next-line no-console
      console.log('logout: ', error);
    }
  });

  return (
    <HomeWrapper>
      This is HomePage. <button onClick={logoutAsync}>Logout</button>
    </HomeWrapper>
  );
};

export default Home;
