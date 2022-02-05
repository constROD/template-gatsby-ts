import { IColorTheme, IScreenTheme, ITheme } from '../interfaces/Theme';

import defaultStyled, {
  createGlobalStyle,
  ThemedStyledInterface,
  ThemeProvider as SThemeProvider,
} from 'styled-components';

const colors: IColorTheme = {
  red100: 'red',
};

const screens: IScreenTheme = {
  bpSmall: '576px',
  bpMedium: '768px',
  bpLarge: '992px',
  bpXlarge: '1200px',
  bpXXlarge: '1920px',
};

export const theme = (): ITheme => ({ colors, screens });
export const ThemeProvider = SThemeProvider;
export const styled = defaultStyled as ThemedStyledInterface<ITheme>;
export const GlobalStyle = createGlobalStyle`
  html, body {
    background: #FAFDFF;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }

  #___gatsby, #gatsby-focus-wrapper {
    display: grid;
    height: 100%;
  }
  
  *, *::before, *::after {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 400;
  }
`;
