export interface ITheme {
  fontSizes: {
    base: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
    xxxlarge: string;
  };

  fonts: {
    base: string;
    title: string;
  };

  fontWeight: {
    thin: number;
    light: number;
    regular: number;
    medium: number;
    bold: number;
  };

  device: {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    laptopL: string;
    desktop: string;
    desktopL: string;
  };
}
