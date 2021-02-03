import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import theme from "../constants/theme";

const useStyles = makeStyles({
  appBar: {
    display: 'flex',
  },
  offset: theme.mixins.toolbar,
});

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <header>
        <AppBar className={classes.appBar}>
          <Container maxWidth="lg" disableGutters>
            <Toolbar variant="dense">
              <Typography>My New Website</Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </header>
      <div className={classes.offset} />
      <main>
        <Container maxWidth="lg">{children}</Container>
      </main>
    </>
  );
};

export default Layout;
