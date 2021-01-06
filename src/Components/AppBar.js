import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
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
import Mainpage from '../Pages/MainPage.js';
import Foodpage from '../Pages/FoodPage.js';
import Skitpage from '../Pages/SkitPage.js';
import Fashionpage from '../Pages/FashionPage.js';
import Langpage from '../Pages/LangPage.js';
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
}));

export default function Appbar() {

  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <ThemeProvider theme={theme}>
        <AppBar position="relative" className={classes.appBar}>
          <Tabs aria-label="simple tabs example" value={value} onChange={handleChange}>
            <Tab label="Home" to="/" component={Link} value='home'/>
            <Tab label="Food" to="/food" component={Link} value='food'/>
            <Tab label="Skit" to="/skit" component={Link} value='skit'/>
            <Tab label="Fashion" to="/fashion" component={Link} value='fashion'/>
            <Tab label="Language" to="/language" component={Link} value='language'/>
          </Tabs>
        </AppBar>
        <Switch>
            <Route exact path="/" component={Mainpage} />
            <Route path="/food" component={Foodpage} />
            <Route exact path="/skit" component={Skitpage} />
            <Route exact path="/fashion" component={Fashionpage} />
            <Route exact path="/language" component={Langpage} />
          </Switch>
        </ThemeProvider>
      </Router>
    </React.Fragment>
  );
}
