import { ThemeConfig } from 'antd';

export const THEME_CONFIG: ThemeConfig = {
  token: {
    fontFamily: 'Open Sans, sans-serif',
    colorTextHeading: 'inherit',
    colorPrimary: '#20a8d8',
  },
  components: {
    Breadcrumb: {
      colorText: 'white',
      colorPrimary: 'white',
    },
    Typography: {
      colorPrimary: 'inherit',
      titleMarginBottom: 0,
      lineHeightHeading2: 1.38,
      fontWeightStrong: 700,
      margin: 0,
    },
  },
};
