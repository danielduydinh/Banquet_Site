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
  PageButtons: {
    marginTop: theme.spacing(4),
  },
  fashiondescription: {
    width: '100',
    height: '100',
  },
  IntroPhoto: {
    padding: theme.spacing(8, 0, 6),
    backgroundImage: `url(${fashion})`,
    mixBlendMode: 'lighten',
    height:'50vh',
    width:'99vw',
    '@media (min-width: 1200px)':{
      width: '60vw',
      position: 'absolute',
      right: '0%',
    },
    maxWidth: '100%',
    flexGrow: '1',
    backgroundRepeat: 'no-repeat',
    //backgroundImage: `url(${pic})`,
    //width: '1306px',
    //height: '731px',
  },
  entirebox: {
    position: 'absolute',
    left: '10%',
    top: '20%',
  },
  Video: {
    //position: 'relative',
    //down: '50%',
      transform: 'translate(5%, 50%)',
    //borderRadius: '25px',
    //borderBottomLeftRadius: '25px',
    //borderBottomRightRadius: '25px',
    //overflow: 'hidden',
    
  },
  icon: {
    background: 'lightblue',
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    //image: `url(${icon1})`,
    //transform: 'translate(10%, 50%)',
    //height: '715px',
    //width: '715px',
  },
}));
const videoOptions = {
  height: "390",
  width: "700", //640
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1
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
        <Grid>
          <Grid item width="1500px" className={classes.IntroPhoto} paddingTop='50px'></Grid>
            <Grid item className={classes.entirebox}>
            <Typography component="h1" variant="h1" align="left" color="textPrimary">
              FASHION 
            </Typography>
            <Typography component="h1" variant="h1" align="left" color="textPrimary">
              SHOW
            </Typography>
            <Grid item className={classes.fashiondescription}>
            <Typography component="h2" variant="h2" align="left" color="textPrimary">
              We don't got designer brands but this is it, this is the best school funding could provide.
            </Typography>
            </Grid>
          </Grid>
        </Grid>
        
        <Box className={classes.Video} paddingTop="12vh" paddingLeft="10vh">
          <YouTube videoId="JOwmYhAFiGk" opts={videoOptions} onReady={_onReady} />;
        </Box>
        
        
        
      </Container>
    </div>
  </ThemeProvider>
  )
}

