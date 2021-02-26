import React from 'react';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import bts from '../Photos/bts_2.png'

import YouTube from "react-youtube";

import icon1 from '../Photos/CommitteeHeads/AustinLiu.jpg';
import icon2 from '../Photos/CommitteeHeads/KennethNg.jpg';
import icon3 from '../Photos/CommitteeHeads/FanLiu.jpg';

// import { Block } from '@material-ui/icons';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: ['Archivo Black', 'sans-serif'].join(','),
      //Font size for the title
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
    h2: {
      fontFamily: ['Archivo Black', 'sans-serif'].join(','),
      fontSize: '24px',
      '@media screen and (min-width: 1400px) and (min-height: 1000px)':{
        fontSize: '42px',
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
    h5: {
      fontFamily: ['Lexend Exa', 'sans-serif'].join(','),
      fontSize: '18px',
      '@media screen and (min-width: 1400px) and (min-height: 1000px)':{
        fontSize: '36px',
      },
    },

    subtitle1: {
      fontFamily: ['Lexend Exa', 'sans-serif',].join(','),
      fontSize: '32px',//32
      '@media screen and (min-width: 1200px) and (min-height: 1000px)':{
        fontSize: '24px',
      },
    fontFamily: ['Lexend Exa', 'sans-serif',].join(','),
    fontSize: '12px',
    '@media screen and (min-width: 1000px) and (min-height: 1000px)':{
      fontSize: '24px',
    },
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
    paddingTop: '100px',
    flexGrow: 1,
    backgroundColor: '#171C20',
    padding: theme.spacing(8, 0, 6),
    minwidth: '100vw',
    minHeight: '85vh',
    maxWidth: '100%',
  },
  videoContainer: { // div containing the video
    width: '100%', //60%
    height: '100%',
    paddingTop: '0%', // for ratio purposes 9/16 is 56.25% //33.75%
    display: 'block', // takes up the whole width of the div
    borderRadius: '16px', // curves the edges of the div
    //height:0,
    overflow: 'hidden', // removes any parts of the div that might extend outside it
    zIndex: 1, // idk its just says so in the code haha
    position: 'left', // make the position relative while allowing us to make the video absolute
    //
    flex: '1',
    //paddingBottom: '75%',
    // maxWidth: '70%',
    // maxHeight: '30%',
  },
  Page: {
    paddingTop: '2vh',
    flexGrow: 1,
    backgroundColor: '#171C20',
    padding: theme.spacing(8, 0, 6),
    minwidth: '100vw',
    minHeight: '85vh',
    maxWidth: '100%',
  },
  IntroPhoto: {
    padding: theme.spacing(8, 0, 6),
    paddingTop: '2vh',
    backgroundImage: `url(${bts})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    mixBlendMode: 'lighten',
    margin: 'auto',
    '@media (min-width: 1200px)':{
      // width: '100vw',
      // height: '45vw',
      right: '0%',
    },
    //minHeight: '500px',
    height:'60vh',
    width:'99vw',
  },
  // videoPlayer: { // the actual video itself
  //   position: 'absolute', // allows us to scale the video responsively
  //   top: 0,
  //   left: 0,
  //   width: '20%',
  //   height: '20%',
  // },
  entirebox: {
    paddingTop: '2vh',
    backgroundImage: `url(${bts})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    mixBlendMode: 'lighten',
    margin: 'auto',
    '@media (min-width: 1200px)':{
      // width: '100vw',
      // height: '45vw',
      right: '0%',
    },
    //minHeight: '500px',
    height:'60vh',
    width:'99vw',
  },
  btsPhoto: {
    mixBlendMode: 'lighten',
    paddingTop : '5vh',
    paddingLeft: '5vh',
    minHeight:'100vh',
    width:'99vw',
    backgroundImage: `url(${bts})`,
    backgroundSize: 'contain',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundOrigin: 'padding-box',
  },
  PageButtom: {
    marginTop: theme.spacing(4),
  },
  btsdescription: {
    width: '100',
    height: '100',
  },
  middle: {
    paddingTop: '100px',
  },
  contenthead: {
    height: '150px',
    width: '150px',
    marginBottom: '15px',
  },
  contentHeads: {
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  contentleadtext: {
    paddingBottom: '20px',
  },
  videoContainer: { // div containing the video
    margin: 'auto',
    width: '100%',
    paddingBottom: '33.75%', // for ratio purposes 9/16 is 56.25%
    display: 'block', // takes up the whole width of the div
    borderRadius: '16px', // curves the edges of the div
    height:'100%',
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
    <Grid container width="1500px" className={classes.IntroPhoto} container wrap='nowrap' paddingTop='50px'>
        <Grid item >
          <Typography component="h1" variant="h1" align="left" color="textPrimary">
            Behind the
          </Typography>
          <Typography component="h1" variant="h1" align="left" color="textPrimary">
              Scenes
          </Typography>
          <Box className={classes.btsdescription} width="30vw">
              <Typography component="body1" variant="body1" align="left" color="textPrimary">
                As banquet navigates through a unique situation of working online, banquet committees continue to work hard to make this event a memorable one.
                 Dive deep into the minds of the committee heads of the five committees into what it was like to work to make the virtual banquet possible behind the scenes!
              </Typography>
          </Box>
        </Grid>
    </Grid>


{/*

      {
      // You can try containing this portion into a grid so you can add other text and stuff
      // currently, this is pretty darn big, so try playing around with the numbers here or setting your own
      // width and height. Play around with different screen size by pressing F12 in the Chrome tab you're
      // working in
      // Good luck!
      }
        {/* // <div className= {classes.videoContainer}>
        <Grid container spacing = {2} width="1500px"  container wrap='nowrap' className={classes.middle}>
          <Grid item xs={12} lg={8} align='left'>
              <Typography className={classes.contentleadtext} component="h3" variant="h3" align="left" color="textPrimary">
                    CONTENT LEADS
                </Typography>
              <Grid container>
                    <Grid item lg={4} md={6}>
                        <Avatar alt="Kenneth Ng" src={icon1} className={classes.contenthead}/>
                    </Grid>
                    <Grid item lg={4} md={6}>
                        <Typography component="h2" variant="h2" align="center" color="textPrimary"> KENNETH NG </Typography>
                        <Typography component="h5" variant="h5" align="center" color="textPrimary"> 1ST YEAR </Typography>
                    </Grid>
                    <Typography className={classes.contentleadtext} component="h3" variant="h3" color="textPrimary">
                      CONTENT LEADS
                    </Typography>
              </Grid>

              <Grid container>
                  <Grid item lg={4} md={6}>
                    <Avatar alt="Kenneth Ng" src={icon1} className={classes.contenthead}/>
                  </Grid>
                  <Grid item lg={4} md={6}>
                    <Typography component="h2" variant="h2" align="center" color="textPrimary"> KENNETH NG </Typography>
                  </Grid>
              </Grid>
              <Box height="20px"/>

              <Grid container>
                <Grid item lg={4} md={6}>
                  <Avatar alt="Austin Liu" src={icon2} className={classes.contenthead}/>
                </Grid>
                <Grid item lg={4} md={6}>
                  <Typography component="h2" variant="h2" align="center" color="textPrimary"> AUSTIN LIU </Typography>
                  <Typography component="h5" variant="h5" align="center" color="textPrimary"> 1ST YEAR </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item lg={4} md={6}>
                  <Avatar alt="Fan Liu" src={icon3} className={classes.contenthead}/>
                </Grid>
                <Grid item lg={4} md={6}>
                  <Typography component="h2" variant="h2" align="center" color="textPrimary"> FAN LIU </Typography>
                  <Typography component="h5" variant="h5" align="center" color="textPrimary"> 1ST YEAR </Typography>
                </Grid>
              </Grid>

          </Grid>
        </Grid>
      </Grid>*/}
    </div>
  </ThemeProvider>
  )
}
