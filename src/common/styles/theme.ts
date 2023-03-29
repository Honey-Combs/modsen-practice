import { ITheme } from './ITheme';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const theme: ITheme = {
  fontSizes: {
    base: '1rem',
    medium: '1.5rem',
    large: '2rem',
    xlarge: '2.5rem',
    xxlarge: '3rem',
    xxxlarge: '4rem',
  },

  fonts: {
    base: 'Roboto',
    title: 'Roboto',
  },

  fontWeight: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },

  device: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
  },
};
