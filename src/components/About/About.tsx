import { AboutWrapper } from './About.styled';

import { navigate } from 'gatsby';
import React from 'react';
import { useAsyncFn } from 'react-use';
import { ROUTES } from 'shared/constants/Routes';
import UserActions from 'shared/redux/User/Actions';

const About: React.FC = () => {
  const { logout } = UserActions();

  const [, logoutAsync] = useAsyncFn(async () => {
    const { error } = await logout();

    if (!error) return navigate(ROUTES.LOGIN);

    // eslint-disable-next-line no-console
    console.log('logout: ', error);
  });

  return (
    <AboutWrapper>
      This is AboutPage. <button onClick={logoutAsync}>Logout</button>
    </AboutWrapper>
  );
};

export default About;
