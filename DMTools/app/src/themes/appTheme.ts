import '../styles.scss';
import { createTheme } from '@mui/material/styles';

const appTheme = createTheme({
  palette: {
    background: {
      default: '#998B80'
    },
    primary: {
      light: '#6a504b',
      main: '#3e2823',
      dark: '#1b0000',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#857365',
      main: '#58483b',
      dark: '#2e2115',
      contrastText: '#ffffff'
    }
  },
  typography: {
    fontFamily: ['Draconis', 'DndDonjonIkon', 'Verdana', 'Arial', 'sans-serif'].join(',')
  }
});

export default appTheme;
