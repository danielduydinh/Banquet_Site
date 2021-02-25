import React from 'react';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import YouTube from "react-youtube";
// import { Block } from '@material-ui/icons';
import icon1 from '../Photos/CommitteHeads/BrianLiu.jpg';

const theme = createMuiTheme({
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
    flewGrow: 1,
    backgroundColor: '#424242',
    padding: theme.spacing(8, 0, 6),
    width: '99.1vw',
    height: '100vh',
    //
    maxwidth: "100%",
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

export default function Skitpage() {
  const classes = useStyles();

  React.useEffect(() => {
    console.log('Scrolling to top in skit');
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.PageContent} content="width=device-width">
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Skit Page
          </Typography>
          <div className={classes.Video}>
            <YouTube videoId="JOwmYhAFiGk" opts={videoOptions} onReady={_onReady} />;
          </div>
          <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
            Description:
          </Typography>
          <Typography component="body1" variant="body1" align="center" color="textPrimary" gutterBottom>
            Codeijdisijidsj Codeijdisijidsj Codeijdisijidsj Codeijdisijidsj
          </Typography>
          <div className={classes.PageButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Button 1
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary">
                  Button 2
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </ThemeProvider>
  )
}
