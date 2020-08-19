import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';

let theme = createMuiTheme({
  typography: {
    fontFamily: 'Inter, Arial, Helvetica, sans-serif',
  },
  palette: {
    primary: indigo,
    secondary: {
      main: '#1DB954',
      contrastText: '#ffffff',
    },
    type: 'dark',
  },
});

theme = responsiveFontSizes(theme);

export default theme;
