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
import pic from './Photos/DanielPFP.jpg';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: ['Archivo Black', 'sans-serif'].join(','),
      fontSize: '60px',
    },
    h2: {
      fontFamily: ['Lexend Exa', 'sans-serif',].join(','),
      //fontSize: '30px'
    },
    color: {
      textPrimary: 'white',
    }
  },
  palette: {
    type: 'dark',
    primary: {
      light: '#ff7961',
      main: '#B63D2D',
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
  fashiontitle: {
    transform: 'translate(-100%, 50%)'
  },
  fashiondescription: {
    width: '100',
    height: '100',
  },
  IntroPhoto: {
    backgroundImage: `url(${pic})`,
    height: '1080px',
    //position: 'fixed',
    transform: 'translate(20%)',
  },
  Video: {
    //borderRadius: '25px',
    //borderBottomLeftRadius: '25px',
    //borderBottomRightRadius: '25px',
    //overflow: 'hidden',
    transform: 'translate(-100%, 50%)'
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
        <Box width="1501px" className={classes.IntroPhoto} paddingTop='20px'>
          <Box p={2} width = "80vw" mx={16}>
          <Box paddingTop="30px" paddingBottom="10px" paddingLeft='20px'>
            <Typography component="h1" variant="h1" align="left" color="textPrimary" className={classes.fashiontitle} >
              FASHION 
            </Typography>
            </Box>
            <Typography component="h1" variant="h1" align="left" color="textPrimary">
              SHOW
            </Typography>
          <div className={classes.fashiondescription}>
            <Typography component="h2" variant="h2" align="left" color="textPrimary">
              We don't got designer brands but this is it, this is the best school funding could provide.
            </Typography>
          </div>
        </Box>
        </Box>
        <Box className={classes.Video}>
          <YouTube videoId="JOwmYhAFiGk" opts={videoOptions} onReady={_onReady} />;
        </Box>
        
      </Container>
    </div>
  </ThemeProvider>
  )
}

