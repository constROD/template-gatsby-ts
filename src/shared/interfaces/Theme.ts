export interface IColorTheme {
  red100: string;
}

export interface IScreenTheme {
  bpSmall: string;
  bpMedium: string;
  bpLarge: string;
  bpXlarge: string;
  bpXXlarge: string;
}

export interface ITheme {
  colors: IColorTheme;
  screens: IScreenTheme;
}
