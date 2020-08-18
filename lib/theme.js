import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Inter, Arial, Helvetica, sans-serif',
  },
  palette: {
    primary: {
      main: '#1DB954',
      contrastText: '#ffffff',
      dark1: '##ADADAD',
      dark2: '#505050',
      dark3: '#202020',
      dark4: '#191414',
      white: '#ffffff',
    },
    secondary: {
      main: '#1DB954',
      contrastText: '#ffffff',
    },
    type: 'dark',
  },
});

export default theme;
