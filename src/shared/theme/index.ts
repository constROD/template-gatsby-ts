import { IColorTheme, IScreenTheme, ITheme } from 'shared/interfaces/Theme';
import defaultStyled, {
  createGlobalStyle,
  ThemedStyledInterface,
  ThemeProvider as SThemeProvider,
} from 'styled-components';

const colors: IColorTheme = {
  red100: 'red',
  blue100: 'blue',
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
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }

  #___gatsby, #gatsby-focus-wrapper {
    display: grid;
    height: 100%;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
