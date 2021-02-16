import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

import YouTube from "react-youtube";
import {Block} from '@material-ui/icons';
import Box from '@material-ui/core/Box';
import fashion from '../Photos/fashion.png';
import icon1 from '../Photos/icon.png';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: ['Archivo Black', 'sans-serif'].join(','),
      fontSize: '60px',//32
      //'@media screen and (min-width: 1400px) and (min-height: 1000px':{
        //fonSize: '60px',
      //}
    },
    h2: {
      fontFamily: ['Lexend Exa', 'sans-serif',].join(','),
      fontSize: '24px',//32
      //'@media screen and (min-width: 1200px) and (min-height: 1000px)':{
        //fontSize: '24px',
      //}
    },
    color: {
      textPrimary: 'white',
    }

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
    width: '100vw',
    minHeight: '85vh',
  },
  IntroPhoto: {
    padding: theme.spacing(8, 0, 6),
    backgroundImage: `url(${fashion})`,
    mixBlendMode: 'lighten',
    height:'50vh',
    width:'99vw',
    '@media (min-width: 1200px)':{
      width: '60vw',
      right: '0%',
    },
    maxWidth: '100%',
    flexGrow: '1',
    backgroundRepeat: 'no-repeat',
    zIndex: 0,
    flexWrap: 'wrap',
  },
  fashiondescription: {
    width: '100',
    height: '100',
  },
  videoContainer: { // div containing the video
    paddingTop: '56.25%', // for ratio purposes 9/16 is 56.25%
    display: 'block', // takes up the whole width of the div
    borderRadius: '16px', // curves the edges of the div
    height:0,
    overflow: 'hidden', // removes any parts of the div that might extend outside it
    zIndex: 1, // idk its just says so in the code haha
    position: 'relative', // make the position relative while allowing us to make the video absolute
  },
  videoPlayer: { // the actual video itself
    position: 'absolute', // allows us to scale the video responsively
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }
}));
const videoOptions = {
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,

  }

};
function _onReady(event) {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
}

export default function Fashionpage() {
  const classes = useStyles();
  React.useEffect(() => {
    console.log('Scrolling to top in fashionpage');
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.PageContent}>
      <Container maxWidth="1/4">
      <div>
        <Grid container width="1500px" className={classes.IntroPhoto} container wrap='nowrap' paddingTop='50px'>
          <Grid item className={classes.entirebox}>
            <Typography component="h1" variant="h1" align="left" color="textPrimary">
                FASHION
            </Typography>
            <Typography component="h1" variant="h1" align="left" color="textPrimary">
                SHOW
            </Typography>
            <Box className={classes.fashiondescription} width="40vw">
              <Typography component="h2" variant="h2" align="left" color="textPrimary">
                  We don't got designer brands but this is it, this is the best school funding could provide.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
      {
      // You can try containing this portion into a grid so you can add other text and stuff
      // currently, this is pretty darn big, so try playing around with the numbers here or setting your own
      // width and height. Play around with different screen size by pressing F12 in the Chrome tab you're
      // working in
      // Good luck!
      }
      <div className= {classes.videoContainer}>
        <YouTube className={classes.videoPlayer} videoId="JOwmYhAFiGk" opts={videoOptions} onReady={_onReady} />
      </div>
      </Container>
    </div>
  </ThemeProvider>
  )
}
