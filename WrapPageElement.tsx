import Root from './src/components/Root';
import { GlobalStyle } from './src/shared/theme';

import React from 'react';

export default ({ element, props }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Root {...props}>{element}</Root>
    </React.Fragment>
  );
};
