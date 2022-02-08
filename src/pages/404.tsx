import { NotFoundPageWrapper } from './404.styled';

import { navigate } from 'gatsby';
import React from 'react';
import { ROUTES } from 'shared/constants/Routes';

const NotFoundPage: React.FC = () => {
  return (
    <NotFoundPageWrapper>
      <span>Sorry, the page you visited does not exist.</span>
      <button onClick={() => navigate(ROUTES.HOME)}>Back Home</button>
    </NotFoundPageWrapper>
  );
};

export default NotFoundPage;
