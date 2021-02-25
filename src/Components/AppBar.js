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
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import LocationContext from './LocationContext';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
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
import Toolbar from '@material-ui/core/Toolbar';
import Popover from '@material-ui/core/Popover';
import popo from '../Photos/popo.png'
import AboutUs from '../Pages/AboutUs.js';
import BTSpage from '../Pages/BethindTheScenes';
import SvgIcon from '@material-ui/core/SvgIcon';

const theme = createMuiTheme({
  typography: {
    color:"white",
    body2: {
      fontFamily: ['Archivo Black', 'sans-serif'].join(','),
      fontSize: '18px',
    },
    fontFamily: ['Lexend Exa', 'sans-serif',].join(','),
    /*color: {
      textPrimary: 'white',
    }*/
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
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    zIndex: theme.zIndex.drawer +1,
    width: '100vw',
    maxWidth: '100%',
    position: 'fixed',
    minWidth: '100vw',
    minHeight: '8vh',
    background: '#171C20',
    boxShadow: 'none',
    color: 'white',
    fontSize: '70px',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-between',
    },
  },
  mobileMenu: {
    '@media screen and (max-width: 1280px)':{
      display: 'flex',

    },
    display: 'none',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: "20px",
    justifyContent: 'space-between',
  },
  appBarTabs:{
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
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
    minHeight: '30vh',
    height: '30vh',
    //minHeight: '300px',
    //height: '20vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontFamily: 'Arial',
    position: 'relative',
    bottom: '0px',
  },

  footerGrid: {
    width: '80vw',
    maxWidth: '80%',
    height: '100%',
  },
  footerLeft: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  footerRight: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-end',
    }
  },
  divider: {
    backgroundColor: 'white',
    height: '100px',
    width: '2px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  UCSCText: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    }
  },
  UniversityText: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
  socials: {
    display: 'flex',
    flexDirection: 'row',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  
 
  socialText: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  icons: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '32px'
    },
  },

  logo: {
    height: '10vh',
    minHeight: '80px',
    maxHeight: '100px',
  },
  mobilelogo: {
    height: '8vh',
    minHeight: '80px',
    maxHeight: '95px',
  },
  footerlogo: {
    marginRight: '20px',
    paddingLeft: '20px',
    height: '10vh',
  },
  footerRightText: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  Menu: {
    transform:' translate(0px, 8%)',
  },
  link: {
    textDecoration: 'inherit',
    color: 'inherit',
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

  const navFacebook = () => {

  }

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
          <div className={classes.mobileMenu}>
            <div>
              <IconButton edge="start" color="inherit" aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpen}
              >
                <MenuIcon />
              </IconButton>
              <img src={popo} alt="mobilepopo" className={classes.mobilelogo}/>
            </div>
            <div>
              <Typography marginLeft="20px">CSA of UCSC</Typography>
            </div>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              borderRadius = "20px"
              className={classes.Menu}
            >
              <MenuItem onClick={handleClose} to="/" component={Link} value='home'> HOME </MenuItem>
              <MenuItem onClick={handleClose} to="/about" component={Link} value='about'> ABOUT US </MenuItem>
              <MenuItem onClick={handleClose} to="/fashion" component={Link} value='fashion'> FASHION SHOW </MenuItem>
              <MenuItem onClick={handleClose} to='/student-work' component={Link} value='food'> STUDENT WORKS </MenuItem>
              <MenuItem onClick={handleClose} to='/bts' component={Link} value='BTSpage'> BEHIND THE SCENES </MenuItem>
              <MenuItem onClick={handleClose} to="/skit" component={Link} value='skit'> SKIT </MenuItem>
            </Menu>
          </div>

          <Tabs className={classes.appBarTabs} aria-label="simple tabs example" value={value} onChange={handleChange} centered variant="fullWidth"
            classes={{
              indicator: classes.indicator,
            }}>
            <Tab className={classes.link} label="Home" to="/" component={Link} value='home'/>
            <Tab label="About Us" to="/about" component={Link} value='about'/>
            <Tab label="Fashion Show" to="/fashion" component={Link} value='fashion'/>
            <img src={popo} alt="headpopo" className={classes.logo}/>
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
            <Grid className = {classes.footerGrid} container>
              <Grid item xs={6} className={classes.footerLeft}>
                <img src ={popo} alt="popo" className={classes.footerlogo}/>
                <div className={classes.footerLeftText}>
                  <Typography variant="body2" className={classes.UniversityText}>UNIVERSITY OF CALIFORNIA |<br/> SANTA CRUZ</Typography>
                  <Typography>CHINESE STUDENT ASSOCIATION</Typography>
                  <Typography className={classes.UCSCText}> UCSC </Typography>
                </div>
              </Grid>
              <Grid item xs={6} className = {classes.footerRight}>
                <div className = {classes.footerRightText}>
                  <Typography variant= "body2"> LET'S KEEP IN TOUCH! </Typography>
                  <br/>
                  <Typography>Check out our socials!</Typography>
                </div>
                <Divider className={classes.divider} orientation='vertical' variant='middle' />
                <div className={classes.socialContainer}>
                  <div className={classes.socials} onClick={() => window.open("https://www.facebook.com/CSAUCSC", "_blank")}>
                    <FacebookIcon className={classes.icons}/>
                    <Typography className={classes.socialText} >FACEBOOK</Typography>
                  </div>
                  <br/>
                  <div className={classes.socials} onClick={() => window.open("https://www.instagram.com/csa_ucsc/?hl=en", "_blank")}>
                    <InstagramIcon className={classes.icons}/>
                    <Typography className={classes.socialText} >INSTAGRAM</Typography>
                  </div>
                  <br/>
                  <div className={classes.socials}
                    onClick={() => window.open("https://www.youtube.com/channel/UCMHgsts6RlX_2QWuzsYXKiQ", "_blank")}>
                    <YouTubeIcon className={classes.icons}/>
                    <Typography className={classes.socialText} >YOUTUBE</Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </footer>
          </div>
        </ThemeProvider>
      </Router>
    </React.Fragment>
  );
}
