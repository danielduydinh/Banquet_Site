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
import Typography from '@material-ui/core/Typography';
import LocationContext from './LocationContext';
import Grid from '@material-ui/core/Grid';
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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Popover from '@material-ui/core/Popover';
import popo from '../Photos/popo.png'
import AboutUs from '../Pages/AboutUs.js';
import BTSpage from '../Pages/BethindTheScenes';

// im a comment
/**
 * Resources consulted:
 * react route tutorial https://reactrouter.com/web/example/basic
 * Tab and Link https://stackoverflow.com/questions/51313969/using-material-ui-tabs-as-navbar
 */

const theme = createMuiTheme({
  typography: {
    color:"white",
    body2: {
      fontFamily: ['Archivo Black', 'sans-serif'].join(','),
      fontSize: '18px',
    },
    fontFamily: ['Lexend Exa', 'sans-serif',].join(','),
  },
  palette: {
    type: 'dark',
    primary: {
      light: '#f44336',
      main: '#f44336',
      dark: '#f44336',
      contrastText: '#000',
    },
    secondary: {
      light: '#f44336',
      main: '#f44336',
      dark: '#f44336',
      contrastText: '#000',
    },
    background: {
      default: '#171C20',
      paper: '#171C20',
    },
  },
});
const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer +300,
    width: '100vw',
    maxWidth: '100%',
    position: 'fixed',
    height: '100px',
    minWidth: '100vw',
    position: 'fixed',
    minHeight: '8vh',
    background: '#171C20',
    boxShadow: 'none',
    color: 'white',
    fontSize: '70px',
    fontWeight: 'bold',
  },
  appbarTabs:{
    // [theme.breakpoints.down('md')]: {
    //   display: 'none',
    // },
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '77vh',
  },

  footer: {
    color: "#FFFFFF",
    width: '100vw',
    maxWidth: '100%',
    backgroundColor: theme.palette.error.main,
    minHeight: '15vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontFamily: 'Arial',
    position: 'relative',
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
    //
    alignItems: 'baseline'
  },
  socialMediaContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  facebook: {
    display: 'flex',
    alignItems: 'center',
  },
  instagram: {
    display: 'flex',
    alignItems: 'center',
  },
  youtube: {
    display: 'flex',
    alignItems: 'center',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    marginLeft: '0.5vw',
    marginRight: '0.5vw',
    height: '8vh',
    width: '2px',
    veritcalAlign: 'middle',
  },
  logo: {
    maxWidth: 100,
  },
  Menu: {
    transform:' translate(0px, 6%)',
  },
  footerLogo: {
    transform:' translate(-20px, 50%)'
  },
  link: {
    textDecoration: 'inherit',
    color: 'inherit',
    // underline: 'inherit',
  },
  indicator: {
    backgroundColor: '#171C20',
  },
}));

export default function Appbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleOpen = (event) => {
    if (anchorEl == null){
      setAnchorEl(event.currentTarget);
    } else {
      setAnchorEl(null);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    console.log('appbar running use effect');
  }, [value]);

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <ThemeProvider theme={theme}>
        <div className={classes.body}>
        <AppBar position="relative" className={classes.appBar}>
          <Tabs aria-label="simple tabs example" value={value} onChange={handleChange} centered variant="fullWidth"
            classes={{
              indicator: classes.indicator,
            }}>
            <Tab className={classes.link} label="Home" to="/" component={Link} value='home'/>
            <Tab label="About Us" to="/about" component={Link} value='about'/>
            <Tab label="Fashion Show" to="/fashion" component={Link} value='fashion'/>
            <img src={popo} className={classes.logo}/>
            {/*<Tab label="Themes" value='themes' onClick={handleOpen}/>*/}
            <Tab label="Student Work" to='/student-work' component={Link} value='food'/>
            <Tab label="Behind the Scenes" to='/bts' component={Link} value='BTSpage'/>
            <Tab label="Skit" to="/skit" component={Link} value='skit'/>
          </Tabs>
        </AppBar>
        {console.log(value)}
          <Switch>
            <Route exact path="/">
              <LocationContext.Provider value={{value, setValue}}>
                <Mainpage/>
              </LocationContext.Provider>
            </Route>
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/student-work" component={Foodpage} />
            <Route exact path="/bts" component={BTSpage} />
            <Route exact path="/skit" component={Skitpage} />
            <Route exact path="/fashion" component={Fashionpage} />
            <Route exact path="/about" component={AboutUs} />
          </Switch>
          <footer className={classes.footer}>
            <div className={classes.leftFooter}>
              <div className={classes.footerLogo}>
                <img src={popo} className={classes.logo}/>
              </div>
              <div>
                <br/>
                <Typography color="#FFFFFF" variant="body2">UNIVERSITY OF CALIFORNIA | <br/>SANTA CRUZ</Typography>
                <br/>
                <Typography>CHINESE STUDENT ASSOCIATION</Typography>
              </div>
            </div>
            <div className={classes.rightFooter} >
              <div paddingRight='50px' alignItems="center">
                <br/>
                <br/>
                <br/>
                <Typography variant= "body2"> LET'S KEEP IN TOUCH! </Typography>
                <br/>
                <Typography>Please, we need friends.</Typography>
              </div>
              <Divider className={classes.divider} orientation='vertical'
                variant='middle' flexItem/>
              <div className={classes.socialMediaContainer} paddingLeft='50px'>
                <br/>
                <br />
                <div className={classes.facebook}>
                  <FacebookIcon />
                  <Typography>FACEBOOK</Typography>
                </div>
                <br />
                <div className={classes.instagram}>
                  <InstagramIcon />
                  <Typography>INSTAGRAM</Typography>
                </div>
                <br />
                <div className={classes.youtube}>
                  <YouTubeIcon />
                  <Typography>YOUTUBE</Typography>
                </div>
              </div>
            </div>
          </footer>
          </div>
          {/*
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            borderRadius = "20px"
            className={classes.Menu}
          >
            <MenuItem onClick={handleClose} to="/food" component={Link}> FOOD + FORTUNE </MenuItem>
            <MenuItem onClick={handleClose} to="/fashion" component = {Link}> FASHION + BEAUTY </MenuItem>
            <MenuItem onClick={handleClose} to="/language" component={Link}> INFLUENCE + LANGUAGE </MenuItem>
            <MenuItem onClick={handleClose} to="/skit" component={Link}> FILM + MEDIA </MenuItem>
          </Menu>*/}
        </ThemeProvider>
      </Router>
    </React.Fragment>
  );
}
