import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PetsIcon from '@material-ui/icons/Pets';
import Divider from '@material-ui/core/Divider';

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
    position: 'fixed',
    minHeight: '5vh',
  },

  body: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  
  footer: {
    backgroundColor: theme.palette.error.main,
    minHeight: '15vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontFamily: 'Arial',
  },
  leftFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  rightFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialMediaContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  socialMedia: {

  },
  text1: {
    fontFamily: 'Verdana',
    fontSize: 15,
  },
  text2: {
    fontFamily: 'Arial',
    fontSize: 12,
  },
  divider: {
    backgroundColor: 'white',
    marginLeft: '0.5vw',
    marginRight: '0.5vw',
    height: '7.5vh',
    width: '0.25vw',
  }
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
        <div className={classes.body}>
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
            <Route exact path="/" component={Mainpage}/>
            <Route path="/food" component={Foodpage} />
            <Route exact path="/skit" component={Skitpage} />
            <Route exact path="/fashion" component={Fashionpage} />
            <Route exact path="/language" component={Langpage} />
          </Switch>
          <footer className={classes.footer}>
            <div className={classes.leftFooter}>
              <PetsIcon />
              <div>
                <p className={classes.text1}>
                  UNIVERSITY OF CALIFORNIA |
                  <br/>
                  SANTA CRUZ
                </p>
                <p>
                  CHINESE STUDENT ASSOCIATION
                </p>
              </div>
            </div>
            <div className={classes.rightFooter}>
              <div>
                <p>
                  LET'S KEEP IN TOUCH!
                </p>
                <p>
                  Please, we need friends
                </p>
              </div>
              <Divider className={classes.divider} orientation='vertical'
                variant='middle' flexItem/>
              <div className={classes.socialMediaContainer}>
                <div> 
                  <FacebookIcon />
                  Facebook
                </div>
                <div> 
                  <InstagramIcon />
                  Instagram
                </div>
                <div> 
                  <YouTubeIcon />
                  Youtube
                </div>
              </div>
            </div>
          </footer>
          </div>
        </ThemeProvider>
      </Router>
    </React.Fragment>
  );
}
