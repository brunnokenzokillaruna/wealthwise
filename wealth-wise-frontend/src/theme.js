// wealth-wise-frontend/src/theme.js

import { createTheme } from '@mui/material/styles';

const commonSettings = {
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: { fontSize: '96px' },
    h2: { fontSize: '60px' },
    h3: { fontSize: '48px' },
    h4: { fontSize: '34px' },
    h5: { fontSize: '24px' },
    h6: { fontSize: '20px' },
    subtitle1: { fontSize: '16px' },
    subtitle2: { fontSize: '14px' },
    body1: { fontSize: '16px' },
    body2: { fontSize: '14px' },
    button: { fontSize: '14px', textTransform: 'uppercase' },
    caption: { fontSize: '12px' },
    overline: { fontSize: '10px', textTransform: 'uppercase' },
  },
};

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976D2' },
    secondary: { main: '#424242' },
    background: { default: '#F5F5F5', paper: '#FFFFFF' },
    text: { primary: '#212121', secondary: '#757575' },
    divider: '#E0E0E0',
    success: { main: '#388E3C' },
    error: { main: '#D32F2F' },
    warning: { main: '#FBC02D' },
    info: { main: '#448AFF' },
  },
  ...commonSettings,
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#BB86FC' },
    secondary: { main: '#03DAC6' },
    background: { default: '#121212', paper: '#1E1E1E' },
    text: { primary: '#FFFFFF', secondary: '#BDBDBD' },
    divider: '#373737',
    success: { main: '#81C784' },
    error: { main: '#E57373' },
    warning: { main: '#FFD54F' },
    info: { main: '#82B1FF' },
  },
  ...commonSettings,
});

export { lightTheme, darkTheme };
