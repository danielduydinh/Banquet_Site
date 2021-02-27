import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import YouTube from "react-youtube";
import Box from '@material-ui/core/Box';
import icon1 from '../Photos/CommitteeHeads/BrianLiu.jpg';
import rectangle from '../Photos/redrectangle.png';
import Avatar from '@material-ui/core/Avatar';
import skitphoto from '../Photos/CSASkitBanner.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
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
      fontSize: '32px',//32
      '@media screen and (min-width: 1200px) and (min-height: 1000px)':{
        fontSize: '24px',
      },
    },
    body2:{
      fontFamily: ['Lexend Exa', 'sans-serif',].join(','),
      fontSize: '12px',
      '@media screen and (min-width: 1200px) and (min-height: 1000px)':{
        fontSize: '16px',
      },
    },
    h2: {
      fontFamily: ['Archivo Black', 'sans-serif'].join(','),
      fontSize: '20px',//24
      '@media screen and (min-width: 1400px) and (min-height: 1000px)':{
        fontSize: '24px',//42
      },
    },
    h3: {
      fontFamily: ['Archivo Black', 'sans-serif'].join(','),
      fontSize: '32px',
      '@media screen and (min-width: 1400px) and (min-height: 1000px)':{
        fontSize: '50px',
      },
    },
    h4: {
      fontFamily: ['Archivo Black', 'sans-serif'].join(','),
      fontSize: '30px',
      '@media screen and (min-width: 1400px) and (min-height: 1000px)':{
        fontSize: '40px',
      },
    },
    subtitle1: {
      fontFamily: ['Lexend Exa', 'sans-serif',].join(','),
      fontSize: '32px',//32
      '@media screen and (min-width: 1200px) and (min-height: 1000px)':{
        fontSize: '24px',
      },
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
    flexGrow: 1,
    backgroundColor: '#171C20',
    padding: theme.spacing(8, 0, 6),
    minwidth: '100vw',
    minHeight: '85vh',
    maxWidth: '100%',

    flexGrow: 1,

  },
  IntroPhoto: {
    paddingTop:'20%',//5vh
    backgroundImage: `url(${skitphoto})`,
    backgroundSize: 'contain',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    mixBlendMode: 'lighten',
    height:'50%',//50vh
    maxWidth: '100%',
  },

  fashiondescription: {
    width: '100',
    height: '100',
  },
  videoContainer: { // div containing the video
    width: '100%', //60%
    paddingTop: '56.25%', // for ratio purposes 9/16 is 56.25% //33.75%
    display: 'block', // takes up the whole width of the div
    borderRadius: '16px', // curves the edges of the div
    //height:0,
    overflow: 'hidden', // removes any parts of the div that might extend outside it
    zIndex: 1, // idk its just says so in the code haha
    position: 'relative', // make the position relative while allowing us to make the video absolute
    //
    flex: '1',
    //paddingBottom: '75%',
    // maxWidth: '70%',
    // maxHeight: '30%',
  },
  videoPlayer: { // the actual video itself
    position: 'absolute', // allows us to scale the video responsively
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  rectangleimage: {
    backgroundImage: `url(${rectangle})`,
    width: '25rem',
    height: '2rem',
    //
    position: 'absolute',
  },
  flexcontainer: {
    display: 'flex',
    //maxWidth: '200vh',
    margin: '50px auto',
  },
  rightcontainer: {
    marginRight: '20%',
  },
  t1: {
    width: '30vh',
    '@media screen and (min-width: 1200px) and (min-height: 1000px)': {
      width: '25vh',
    },
  },
  icon1: {
    image: `url(${icon1})`,
  },
  ah: {
    height: '100px',
    width: '100px',
    marginBottom: '15px',
  },
  fashionleadtext: {
    paddingBottom: '20px',
  },
  labels: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
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

export default function Skitpage() {
  const classes = useStyles();
  React.useEffect(() => {
    console.log('Scrolling to top in fashionpage');
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.PageContent}>
      <Container maxWidth="1/4">
        <Grid container width="1500px" className={classes.IntroPhoto} wrap='nowrap' spacing={3} paddingTop='50px'>
          <Grid item className={classes.firsttext} lg={4} sm={8} xs={12}>
          <div className = {classes.f}>
            <Typography component="h1" variant="h1" align="left" color="textPrimary" gutterBottom>
                SKIT
            </Typography>
            <Grid item>
              <Typography component="body1" variant="body1" align="left" color="textPrimary" gutterBottom data-aos="fade-right">
                  Skit this year has been difficult during the pandemic. Nonetheless, we were able to produce
                  something truly special even when apart. We hope you enjoy the show.
              </Typography>
            </Grid>

            </div>
          </Grid>
        </Grid>


      <Box height="50px"/>

      <Grid container spacing ={2}>
        <Grid item lg={8} xs = {12}>
          <div className= {classes.videoContainer}>
            <YouTube className={classes.videoPlayer} videoId="jooTwG-An_U" opts={videoOptions} onReady={_onReady} />
          </div>
        </Grid>
        <Grid item lg={4} sm={8} xs={12}>
          <div className = {classes.fashionHeads} data-aos="fade-left">
            <Typography className={classes.fashionleadtext} component="h3" variant="h3" align="center" color="textPrimary">
                SKIT LEAD
            </Typography>
            <Grid container spacing={4}>
              <Grid item lg={4} className={classes.labels}>
                <Avatar alt="Angela Hong" src={icon1} className={classes.ah}/>
              </Grid>
              <Grid item lg={4} className={classes.labels}>
                <Typography component="h2" variant="h2" align="center" color="textPrimary"> BRIAN LIU </Typography>
                <Typography component="body2" variant="body2" align="center" color="textPrimary"> 3RD YEAR </Typography>
              </Grid>
            </Grid>

          </div>
        </Grid>
      </Grid>



      </Container>
    </div>

  </ThemeProvider>
  )
}
