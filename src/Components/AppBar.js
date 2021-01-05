import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// im a comment
/**
 * Resources consulted:
 * react route tutorial https://reactrouter.com/web/example/basic
 * Tab and Link https://stackoverflow.com/questions/51313969/using-material-ui-tabs-as-navbar
 */

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    background: {
      default: '#424242',
      paper: '#424242',
    },
  },
});
const useStyles = makeStyles((theme) => ({
  appBar: {
    flexGrow: 1,
  },
  heroContent: {
    backgroundColor: '#424242',
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function Appbar() {

  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();
  console.log(theme);
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <ThemeProvider theme={theme}>
        <AppBar position="relative" className={classes.appBar}>
          <Tabs aria-label="simple tabs example" value={value} onChange={handleChange}>
            <Tab label="Home" to="/" component={Link}/>
            <Tab label="Item One" to="/one" component={Link}/>
            <Tab label="Item Two" to="/two" component={Link}/>
          </Tabs>
        </AppBar>
        <main color="#424242">
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Main Page
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Button 1
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Button 2
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
        </main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/one" component={One} />
            <Route exact path="/two" component={Two} />
          </Switch>
        </ThemeProvider>
      </Router>
    </React.Fragment>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function One() {
  return (
    <div>
      <h2>One</h2>
    </div>
  );
}

function Two() {
  return (
    <div>
      <h2>Two</h2>
    </div>
  );
}
