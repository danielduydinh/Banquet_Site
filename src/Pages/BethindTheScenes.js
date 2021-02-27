import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import bts from '../Photos/bts_2.png'

import YouTube from "react-youtube";

import icon2 from '../Photos/CommitteeHeads/AustinLiu.jpg';
import icon1 from '../Photos/CommitteeHeads/KennethNg.jpg';
import icon3 from '../Photos/CommitteeHeads/FanLiu.jpg';
import Kathy from '../Photos/CommitteeHeads/KathyYan.jpg';
import Robin from '../Photos/CommitteeHeads/RobinLiu.jpg';
import Samuel from '../Photos/CommitteeHeads/SamuelChern.jpg';
import Christy from '../Photos/CommitteeHeads/ChristyMei.jpg';
import Tommy from '../Photos/CommitteeHeads/TommyChan.JPG';
import Tristyn from '../Photos/CommitteeHeads/TristynLai.jpg';
import Wendy from '../Photos/CommitteeHeads/WendyChan.jpg';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar';
// import { Block } from '@material-ui/icons';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const theme = createMuiTheme({
  typography: {
    margin: 'auto',
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
    body2:{
      fontFamily: ['Lexend Exa', 'sans-serif',].join(','),
      fontSize: '12px',
      '@media screen and (min-width: 1200px) and (min-height: 1000px)':{
        fontSize: '16px',
      },
    },
    h2: {
      fontFamily: ['Archivo Black', 'sans-serif'].join(','),
      fontSize: '20px',
      '@media screen and (min-width: 1400px) and (min-height: 1000px)':{
        fontSize: '24px',
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
      default: '#171C20',
      paper: '#171C20',
    },
  },
});
const useStyles = makeStyles((theme) => ({
  PageContent: {
    paddingTop: '100px',
    flexGrow: 1,
    backgroundColor: '#171C20',
    padding: theme.spacing(8, 0, 6),
    //minwidth: '100vw',
    minHeight: '85vh',
    width:'100vw',
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
  IntroPhoto: {
    paddingTop: '20%',
    backgroundImage: `url(${bts})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    mixBlendMode: 'lighten',
    // margin: 'auto',
    height:'50%',
    maxWidth: '100%',
    [theme.breakpoints.down('sm')]: {
      backgroundSize: 'auto',
    }
  },
  btsdescription: {
    width: '100',
    height: '100',
  },
  middle: {
    paddingTop: '100px',
  },
  contenthead: {
    height: '100px',
    width: '100px',
    marginBottom: '15px',
  },
  contentHeads: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  contentleadtext: {
    paddingBottom: '20px',
  },
  videoContainer: { // div containing the video
    // margin: 'auto',
    width: '100%',
    paddingBottom: '56.25%', // for ratio purposes 9/16 is 56.25%
    display: 'block', // takes up the whole width of the div
    borderRadius: '16px', // curves the edges of the div
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
  },
  labels: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  f: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  gridContainer: {
    paddingTop: '5vh',
    maxWidth: '100%',
  },
  card: {
    minWidth: 337,
    minHeight: 475,
    borderRadius: 65,
  },
  cardContent: {
    height: 400,
    display:'flex',
    flexDirection: "column",
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  avatar: {
    width: '150px',
    height: '150px',
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

export default function BTSpage() {
  const classes = useStyles();

  React.useEffect(() => {
    console.log('Scrolling to top in bts');
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.PageContent}>
    <Container maxWidth="100%">
      <Grid container width="1500px" className={classes.IntroPhoto} wrap='nowrap' >
          <Grid item>
              <Typography component="h1" variant="h1" align="left" color="textPrimary" margin='auto'>
                  BEHIND THE SCENES
              </Typography>
              <Typography component="body1" variant="body1" align="justify" color="textPrimary" gutterBottom>
                As banquet navigates through a unique situation of working online, banquet committees continue to work hard to make this event a memorable one.
                 Dive deep into the minds of the committee heads of the five committees into what it was like to work to make the virtual banquet possible behind the scenes!
              </Typography>

          </Grid>
      </Grid>

      <Box height="50px"/>

      <Grid container spacing = {2}>
          {/*
            <Typography className={classes.contentleadtext} component="h3" variant="h3" align="left" color="textPrimary">
                  CONTENT LEADS
              </Typography>
                  <Grid item lg={4} md={6}>
                      <Avatar alt="Kenneth Ng" src={icon1} className={classes.contenthead}/>
                  </Grid>
                  <Grid item lg={4} md={6}>
                      <Typography component="h2" variant="h2" align="center" color="textPrimary"> KENNETH NG </Typography>
                      <Typography component="h5" variant="h5" align="center" color="textPrimary"> 1ST YEAR </Typography>
                  </Grid>
                  <Grid item lg={4} md={6}>
                      <Avatar alt="Austin Liu" src={icon2} className={classes.contenthead}/>
                  </Grid>
                  <Grid item lg={4} md={6}>
                      <Typography component="h2" variant="h2" align="center" color="textPrimary"> AUSTIN LIU </Typography>
                      <Typography component="h5" variant="h5" align="center" color="textPrimary"> 1ST YEAR </Typography>
                  </Grid>
                  <Grid item lg={4} md={6}>
                      <Avatar alt="Fan Liu" src={icon3} className={classes.contenthead}/>
                  </Grid>
                  <Grid item lg={4} md={6}>
                      <Typography component="h2" variant="h2" align="center" color="textPrimary"> FAN LIU </Typography>
                      <Typography component="h5" variant="h5" align="center" color="textPrimary"> 1ST YEAR </Typography>
                  </Grid> */}
                <Grid item lg={4} sm={8} xs={12} spacing={2}>
                  <Typography paddingBottom="20px" component="h3" variant="h3" align="center" color="textPrimary">
                      CONTENT LEADS
                  </Typography>
                  <Grid container spacing={4}>
                      <Grid item lg={4} >
                          <Avatar alt="Kenneth Ng" src={icon1} className={classes.contenthead}/>
                      </Grid>
                      <Grid item lg={4}  className={classes.labels}>
                          <Typography component="h2" variant="h2" align="center" color="textPrimary"> KENNETH NG </Typography>
                          <Typography component="body2" variant="body2" align="center" color="textPrimary"> 1ST YEAR </Typography>
                      </Grid>
                  </Grid>
                  <Grid container spacing={4}>
                      <Grid item lg={4} >
                          <Avatar alt="Austin Liu" src={icon2} className={classes.contenthead}/>
                      </Grid>
                      <Grid item lg={4} className={classes.labels}>
                          <Typography component="h2" variant="h2" align="center" color="textPrimary"> AUSTIN LIU </Typography>
                          <Typography component="body2" variant="body2" align="center" color="textPrimary"> 1ST YEAR </Typography>
                      </Grid>
                  </Grid>
                  <Grid container spacing={4}>
                      <Grid item lg={4} >
                          <Avatar alt="Fan Liu" src={icon3} className={classes.contenthead}/>
                      </Grid>
                      <Grid item lg={4} className={classes.labels}>
                          <Typography component="h2" variant="h2" align="center" color="textPrimary"> FAN LIU </Typography>
                          <Typography component="body2" variant="body2" align="center" color="textPrimary"> 1ST YEAR </Typography>
                      </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={8}>
                    <div className= {classes.videoContainer}>
                        <YouTube className={classes.videoPlayer} videoId="5qap5aO4i9A" opts={videoOptions} onReady={_onReady}  />
                    </div>
                </Grid>
        </Grid>
        </Container>
        <Box width="100%" paddingTop="100px" data-aos="fade-right">
          <Typography variant="h3" align="center" color="textPrimary">
            GRAPHIC LEADS
          </Typography>
        </Box>
        <div className={classes.gridContainer} data-aos="fade-right">
           <Grid container spacing={3} justify='center'>
             <Grid item xs={2.5}>
               <Card className={classes.card} variant="outlined" style={{ border: '3px solid' }} >
                 <CardContent className={classes.cardContent}>
                  <Avatar alt="Kathy Yan" src={Kathy} className={classes.avatar}/>
                   <Typography variant="h3" className={classes.title} color="textPrimary">
                     Kathy Yan
                   </Typography>
                   <Typography variant="body2" component="p">
                     4th Year
                   </Typography>
                 </CardContent>
               </Card>
             </Grid>
             <Grid item xs={2.5}>
               <Card className={classes.card} variant="outlined" style={{ border: '3px solid' }} >
                 <CardContent className={classes.cardContent}>
                  <Avatar alt="Samuel Chern" src={Samuel} className={classes.avatar}/>
                   <Typography variant="h3" className={classes.title} color="textPrimary">
                     Samuel Chern
                   </Typography>
                   <Typography variant="body2" component="p">
                     4th Year
                   </Typography>
                 </CardContent>
               </Card>
             </Grid>
             <Grid item xs={2.5}>
               <Card className={classes.card} variant="outlined" style={{ border: '3px solid' }} >
                 <CardContent className={classes.cardContent}>
                  <Avatar alt="Christy Mei" src={Christy} className={classes.avatar}/>
                   <Typography variant="h3" className={classes.title} color="textPrimary">
                     Christy Mei
                   </Typography>
                   <Typography variant="body2" component="p">
                     1st Year
                   </Typography>
                 </CardContent>
               </Card>
             </Grid>
             <Grid item xs={2.5}>
               <Card className={classes.card} variant="outlined" style={{ border: '3px solid' }} >
                 <CardContent className={classes.cardContent}>
                  <Avatar alt="Robin Liu" src={Robin} className={classes.avatar}/>
                   <Typography variant="h3" className={classes.title} color="textPrimary">
                     Robin Liu
                   </Typography>
                   <Typography variant="body2" component="p">
                     1st Year
                   </Typography>
                 </CardContent>
               </Card>
             </Grid>
          </Grid>
        </div>

        <Box width="100%" paddingTop="100px" data-aos="fade-right">
          <Typography variant="h3" align="center" color="textPrimary">
            WEBSITE LEADS
          </Typography>
        </Box>
        <div className={classes.gridContainer} data-aos="fade-left">
           <Grid container spacing={3} justify='center'>
             <Grid item xs={2.4}>
               <Card className={classes.card} variant="outlined" style={{ border: '3px solid' }} >
                 <CardContent className={classes.cardContent}>
                  <Avatar alt="Tommy Chan" src={Tommy} className={classes.avatar}/>
                   <Typography variant="h3" className={classes.title} color="textPrimary">
                     Tommy Chan
                   </Typography>
                   <Typography variant="body2" component="p">
                     3rd Year
                   </Typography>
                 </CardContent>
               </Card>
             </Grid>
             <Grid item xs={2.4}>
               <Card className={classes.card} variant="outlined" style={{ border: '3px solid' }} >
                 <CardContent className={classes.cardContent}>
                  <Avatar alt="Tristyn Lai" src={Tristyn} className={classes.avatar}/>
                   <Typography variant="h3" className={classes.title} color="textPrimary">
                     Tristyn
                   </Typography>
                   <Typography variant="body2" component="p">
                     1st Year
                   </Typography>
                 </CardContent>
               </Card>
             </Grid>
             <Grid item xs={2.4}>
               <Card className={classes.card} variant="outlined" style={{ border: '3px solid' }} >
                 <CardContent className={classes.cardContent}>
                  <Avatar alt="Wendy Chan" src={Wendy} className={classes.avatar}/>
                   <Typography variant="h3" className={classes.title} color="textPrimary">
                     Wendy Chan
                   </Typography>
                   <Typography variant="body2" component="p">
                     1st Year
                   </Typography>
                 </CardContent>
               </Card>
             </Grid>
          </Grid>
        </div>

      </div>
    </ThemeProvider>
  )
}
