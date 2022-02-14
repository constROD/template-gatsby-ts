import Layout from './src/components/Layout';
import { GlobalStyle } from './src/shared/theme';

import React from 'react';

export default ({ element, props }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Layout {...props}>{element}</Layout>
    </React.Fragment>
  );
};
