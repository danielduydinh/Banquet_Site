import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
// import { flexbox } from '@material-ui/system';
// import { positions } from '@material-ui/system';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import Carousel from 'react-bootstrap/Carousel'
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import tDance from '../Photos/tdance.png';
import nax from '../Photos/nax.png';
import tpose from '../Photos/tpose.jpg';
import bts from '../Photos/btsphoto.jpg';
import sworks from '../Photos/sworksphoto.jpg';
import aboutphoto from '../Photos/aboutusphoto.jpg';
import skitphoto from '../Photos/skitphoto.png';
import LocationContext from '../Components/LocationContext.js';
import YouTube from "react-youtube";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {
  Link
} from "react-router-dom";
AOS.init();
const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: ['Archivo Black', 'sans-serif'].join(','),
      fontSize: '32px',
      '@media screen and (min-width: 1400px) and (min-height: 1000px)':{
        fontSize: '60px',
      },
    },
    body1:{
      fontFamily: ['Lexend Exa', 'sans-serif',].join(','),
      fontSize: '12px',
      '@media screen and (min-width: 1200px) and (min-height: 1000px)':{
        fontSize: '24px',
      },
    },
    fontFamily: ['Lexend Exa', 'sans-serif',].join(','),
    fontSize: '12px',
    '@media screen and (min-width: 1000px) and (min-height: 1000px)':{
      fontSize: '24px',
    },
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
  PageContent: {
    paddingTop: '8vh',
    backgroundColor: '#171C20',
    padding: theme.spacing(8, 0, 6),
    minwidth: '100vw',
    minHeight: '85vh',
    flexGrow: 1,
    maxWidth: '100%',
    paddingBottom: '300px',
    justifyContent: 'center',
  },
  PageButtons: {
    marginTop: theme.spacing(2),
    paddingBottom: '50px',
  },
  carouseldiv: {
    width: '60%',
    paddingTop: '40%',
    borderRadius: '25px',
    overflow: 'hidden',
    zIndex: 1,
    position: 'relative',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      paddingBottom: '53.4375%',
      paddingTop: '5%'
    },

  },
  Carousel: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  carouselContainer:{
    paddingTop:'5vh',
    backgroundImage: `url(${nax})`,
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    mixBlendMode: 'lighten',
    height:'50%',
    maxWidth: '100%',
  },
  IntroPhoto:{
    display: 'flex',
    padding: theme.spacing(8, 0, 6),
    backgroundImage: `url(${tDance})`,
    backgroundSize: 'cover',
    mixBlendMode: 'lighten',
    minHeight: '750px',
    height:'50vh',
    width:'99vw',
    '@media (min-width: 1200px)':{
      width: '60vw',
    },
    maxWidth: '100%',
    flexGrow: '1',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    alignItems: 'flex-end',
  },
  bannerBoxes:{
    flexGrow:'1',
  },
  buttons:{
    borderRadius: 15,
  },
  videoContainer: { // div containing the video
    margin: 'auto',
    width: '60%',
    paddingBottom: '33.75%', // for ratio purposes 9/16 is 56.25%
    display: 'block', // takes up the whole width of the div
    borderRadius: '16px', // curves the edges of the div
    height:0,
    overflow: 'hidden', // removes any parts of the div that might extend outside it
    zIndex: 1, // idk its just says so in the code haha
    position: 'relative', // make the position relative while allowing us to make the video absolute
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      paddingBottom: '53.4375%',
    },
  },
  videoPlayer: { // the actual video itself
    position: 'absolute', // allows us to scale the video responsively
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
}));

const videoOptions = {
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
    rel: 0,
  }
};
function _onReady(event) {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
}

export default function Mainpage() {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleAbout = (setValue) => {
    setValue('about');
  }

  const handleSkit = (setValue) => {
    setValue('skit');
  }
  const handleBts = (setValue) => {
    setValue('BTSpage');
  }
  const handleSwork = (setValue) => {
    setValue('student work');
  }
  const handleFashion = (setValue) => {
    setValue('fashion');
  }

  React.useEffect(() => {
    console.log('Scrolling to top in mainpage');
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.PageContent}>
        <Container maxWidth="1/4">
            <Grid className={classes.IntroPhoto} container wrap='nowrap' spacing={3}>
              <Grid item>
                <Typography underline="always" variant="h1" align="left" color="textPrimary" gutterBottom>
                  WELCOME TO OUR ANNUAL BANQUET
                </Typography>
                <Grid item>
                  <Typography component="body1" variant="body1" align="justify" margin='auto' color="textPrimary" gutterBottom>
                    Hey there, thanks for stopping by! We’ve been working really hard to put together a fantastic show throughout the past few months.
                    Despite occasional adversity, we can confidently say that this 35th banquet will be unlike anything you’ve seen in the past.
                    <br/>
                    Unique times call for a unique banquet! That being said, enjoy the show, as well as the works of our banquet committees!
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Box height="100px"/>
            <div className= {classes.videoContainer}>
              <YouTube className={classes.videoPlayer} videoId="3yVPCwnk-I8" opts={videoOptions} onReady={_onReady}  />
            </div>
          <div data-aos="fade-right">
          <Box width="100%" paddingTop='100px'>
            <Typography component="h1" underline="always" variant="h1" align="center" color="textPrimary" gutterBottom>
              WHAT CSA'S BANQUET IS ABOUT
            </Typography>
          </Box>
          <Box p={2} width="60vw"  margin="auto" textAlign= 'center'>
            <Typography component="body1" variant="body1" color="textPrimary" align="justify" gutterBottom>
              Banquet has been strange this year, with communication and planning being strictly online.
              As a result, the experience accrued through past banquets is not as applicable.
              Banquet has been a journey, and we have embarked on a new, different path.
            </Typography>
            <br/>
            <br/>
            <Typography component="body1" variant="body1" color="textPrimary" align="justify" gutterBottom>
              However, the core beliefs of banquet have not changed; banquet is hosted by Asian-Americans
              for the celebration of Asian-American culture and heritage. This much will never change.
              Our exhibition of this culture and heritage encapsulate what unites us under the CSA banner,
              and imbues the pride we have as Asian-Americans.
            </Typography>
          </Box>
          </div>
          <div className={classes.PageButtons} data-aos='fade-in'>
            <LocationContext.Consumer>
              {({value, setValue}) => (
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Link style={{ textDecoration: 'none' }} to="/about">
                      <Button variant="contained" color="#171C20" className={classes.buttons}
                        onClick={() => handleAbout(setValue)}>
                        LEARN MORE ABOUT US
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              )}
            </LocationContext.Consumer>
          </div>
          <Grid className={classes.carouselContainer}>
            <Grid item paddingBottom="15vh">
              <div className={classes.carouseldiv} >
              <LocationContext.Consumer>
              {({value, setValue}) => (
                <Carousel className= {classes.Carousel} activeIndex={index} onSelect={handleSelect} borderRadius="16px">
                  <Carousel.Item>
                    <Link to="/about">
                      <img
                        className="d-block w-100"
                        src={aboutphoto}
                        alt="About"
                        onClick={() => handleAbout(setValue)}
                      />
                    </Link>
                    <Carousel.Caption>
                      <Typography variant= "body1" align="center" color="textPrimary" gutterBottom>
                        ABOUT US
                      </Typography>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Link to="/skit">
                      <img
                        className="d-block w-100"
                        src={skitphoto}
                        alt="Skit"
                        onClick={() => handleSkit(setValue)}
                      />
                    </Link>
                    <Carousel.Caption>
                      <Typography variant= "body1" align="center" color="textPrimary" gutterBottom>
                        SKIT
                      </Typography>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Link to="/bts">
                      <img
                        className="d-block w-100"
                        src={bts}
                        alt="BTS"
                        onClick={() => handleBts(setValue)}
                      />
                    </Link>
                    <Carousel.Caption>
                      <Typography variant="body1" align="center" color="textPrimary" gutterBottom>
                        BEHIND THE SCENES
                      </Typography>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Link to="/student-work">
                      <img
                        className="d-block w-100"
                        src={sworks}
                        alt="SWORKS"
                        onClick={() => handleSwork(setValue)}
                      />
                    </Link>
                    <Carousel.Caption>
                      <Typography variant="body1"  align="center" color="textPrimary" gutterBottom>
                        STUDENT WORKS
                      </Typography>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Link to="/fashion">
                      <img
                        className="d-block w-100"
                        src={tpose}
                        alt="FASHION"
                        onClick={() => handleFashion(setValue)}
                      />
                    </Link>
                    <Carousel.Caption>
                      <Typography variant="body1" align="center" color="textPrimary" gutterBottom>
                        FASHION SHOW
                      </Typography>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
                )}
                </LocationContext.Consumer>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  )
}
