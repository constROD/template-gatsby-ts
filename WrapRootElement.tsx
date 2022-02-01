import createStore from './src/shared/redux/store';
import { ThemeProvider, theme, GlobalStyle } from './src/shared/theme';

import React from 'react';
import { Provider } from 'react-redux';

export default ({ element }) => {
  return (
    <Provider store={createStore()}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {element}
      </ThemeProvider>
    </Provider>
  );
};
