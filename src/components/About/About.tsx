import { AboutWrapper } from './About.styled';

import { navigate } from 'gatsby';
import React from 'react';
import { useAsyncFn } from 'react-use';
import { ROUTES } from 'shared/constants/Routes';
import useAppStore from 'shared/store';
import CommonUtil from 'shared/utils/Common';

const About: React.FC = () => {
  const logout = useAppStore(state => state.logout);

  const [, logoutAsync] = useAsyncFn(async () => {
    const { error } = logout();

    if (!error) return navigate(ROUTES.LOGIN);

    CommonUtil.logger({
      path: 'components/About/About.tsx',
      event: 'loginAsync',
      log: error,
    });
  });

  return (
    <AboutWrapper>
      This is AboutPage. <button onClick={logoutAsync}>Logout</button>
    </AboutWrapper>
  );
};

export default About;
