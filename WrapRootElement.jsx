import { ThemeProvider, theme } from './src/shared/theme';

import React from 'react';

export default ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};
