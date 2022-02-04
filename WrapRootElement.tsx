import createStore from './src/shared/redux/store';
import { ThemeProvider, theme, GlobalStyle } from './src/shared/theme';

import React from 'react';
import { Provider } from 'react-redux';

export default ({ element }) => {
  const store = createStore();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {element}
      </ThemeProvider>
    </Provider>
  );
};
