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

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: ['Archivo Black', 'sans-serif'].join(','),
      fontSize: '60px',
    },
    h2: {
      fontFamily: ['Lexend Exa', 'sans-serif',].join(','),
      fontSize: '30px'
    },
    color: {
      textPrimary: 'white',
 
    }
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
    backgroundColor: '#424242',
    padding: theme.spacing(8, 0, 6),
    width: '99.1vw',
    height: '100vh',
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
  Video: {
    borderRadius: '25px',
    borderBottomLeftRadius: '25px',
    borderBottomRightRadius: '25px',
    overflow: 'hidden',
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

export default function Fashionpage() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <div className={classes.PageContent} content="width=device-width">
      <Container maxWidth="sm">
        <div className={classes.fashiontitle} content="width=device-width">
          <div>
            <Typography component="h1" variant="h1" align="left" color="textPrimary">
              FASHION 
            </Typography>
          </div>
          <div>
            <Typography component="h1" variant="h1" align="left" color="textPrimary">
              SHOW
            </Typography>
          </div>
          <div className={classes.fashiondescription}>
            <Typography component="h2" variant="h2" align="left" color="textPrimary">
              We don't got designer brands but this is it, this is the best school funding could provide.
            </Typography>
          </div>
        </div>
        <div className={classes.Video}>
          <YouTube videoId="JOwmYhAFiGk" opts={videoOptions} onReady={_onReady} />;
        </div>
        
      </Container>
    </div>
  </ThemeProvider>
  )
}
