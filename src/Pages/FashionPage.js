import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

import YouTube from "react-youtube";
import {Block, Translate} from '@material-ui/icons';
import Box from '@material-ui/core/Box';
import pic from './Photos/fashion.png';

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
  IntroPhoto: {
    backgroundImage: `url(${pic})`,
    //height:'800px',
    height: '731px',
    width: '1306px',
  },
  textbox: {
    transform: 'translate(20%)'
  },
  description: {
    width: "100px"
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
        
        <Box width="1500px" className={classes.IntroPhoto} marginTop="5vh">
          <Box className={classes.textbox} width="100%" paddingTop="30px" paddingBottom="10px" paddingLeft='20px'>
          
            <Typography component="h1" variant="h1" align="left" color="textPrimary" position="fixed" className={classes.fashiontitle} >
              FASHION 
            </Typography>
            <Typography component="h1" variant="h1" align="left" color="textPrimary">
              SHOW
            </Typography>
            <div className={classes.description} >
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

