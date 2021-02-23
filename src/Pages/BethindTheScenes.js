import React from 'react';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import bts from '../Photos/bts.png'
import YouTube from "react-youtube";
// import { Block } from '@material-ui/icons';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: ['Archivo Black', 'sans-serif'].join(','),
      //Font size for the title
      fontSize: '64px',
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
  PageContent: {
    paddingTop: '8vh',
    flexGrow: 1,
    backgroundColor: '#171C20',
    padding: theme.spacing(8, 0, 6),
    minwidth: '100vw',
    minHeight: '85vh',
    maxWidth: '100%',
  },
  IntroPhoto: {
    padding: theme.spacing(8, 0, 6),
    backgroundImage: `url(${bts})`,
    mixBlendMode: 'lighten',
    height:'50vh',
    width:'99vw',
    '@media (min-width: 1200px)':{
      width: '100vw',
      right: '0%',
    },
    maxWidth: '100%',
    flexGrow: '1',
    backgroundRepeat: 'no-repeat',
    zIndex: 0,
    flexWrap: 'wrap',
  },
  PageButtons: {
    marginTop: theme.spacing(4),
  },
  Video: {
    marginLeft: "-7%",
  },
}));
const videoOptions = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};
function _onReady(event) {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
}

export default function BTSpage() {
  const classes = useStyles();

  React.useEffect(() => {
    console.log('Scrolling to top in bts');
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
                Behind the Scenes
            </Typography>
            <Box className={classes.fashiondescription} width="40vw">
              <Typography component="body1" variant="body1" align="left" color="textPrimary">
                  I don't know what to put for BTS, idk anything about BTS either.
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
        
        <Grid container width="1500px"  container wrap='nowrap' paddingTop='50px'>
          <Grid item className={classes.entirebox}>
          <YouTube className={classes.videoPlayer} videoId="5qap5aO4i9A" opts={videoOptions} onReady={_onReady}  />
            <Typography component="h1" variant="h1" align="right" color="textPrimary">
                Behind the Scenes
            </Typography>
            <Box className={classes.fashiondescription} width="40vw">
              <Typography component="body1" variant="body1" align="right" color="textPrimary">
                  I don't know what to put for BTS, idk anything about BTS either.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
      </Container>
    </div>
  </ThemeProvider>
  )
}