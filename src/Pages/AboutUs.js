import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
//import Paper from '@material-ui/core/Paper';
//import tDance from '../Photos/tdance.png';
import GP from './Photos/AboutUs.jpg';

//Office Heads Pics
import icon1 from '../Photos/OfficeHeads/DanielVu.jpg';
import icon2 from '../Photos/OfficeHeads/DatVu.jpg';
import icon3 from '../Photos/OfficeHeads/EsmondTsai.jpg';
import icon4 from '../Photos/OfficeHeads/GloriaQiu.JPG';
import icon5 from '../Photos/OfficeHeads/KevinXu.jpg';
import icon6 from '../Photos/OfficeHeads/LianaLau.jpg';
import icon7 from '../Photos/OfficeHeads/LyPhung.jpg';
import icon8 from '../Photos/OfficeHeads/MaryYuen.jpg';
import icon9 from '../Photos/OfficeHeads/RaymondLee.jpg';
//Icon10 for Vania
import icon10 from '../Photos/OfficeHeads/DanielVu.jpg';

const theme = createMuiTheme({
  typography: {
    margin: 'auto',
    h1: {
      margin: 'auto',
      fontFamily: ['Archivo Black', 'sans-serif'].join(','),
      fontSize: '32px',
      '@media (min-width: 1400px)' :{
        fontSize: '60px',
        margin: 'auto',
      },
    },
    body1:{
      margin: 'auto',
      fontFamily: ['Lexend Exa', 'sans-serif',].join(','),
      fontSize: '12px',
      '@media (min-width: 1200px)' :{
        fontSize: '24px', 
        textAlign: 'center',  
        margin: 'auto'
      },
    },
    fontFamily: ['Lexend Exa', 'sans-serif',].join(','),
    fontSize: '12px',
    '@media (min-width: 1200px)' :{
      fontSize: '24px',   
      margin: 'auto',
    },
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
    backgroundColor: '#171C20',
    padding: theme.spacing(8, 0, 6),
    width: '100vw',
    minHeight: '85vh',
  },
  PageButtons: {
    marginTop: theme.spacing(4),
  },
  carouseldiv: {
    width: '600px',
    height: '200px',
    margin: 'auto',
  },
  carouselContainer:{
    padding:'30px',
  },
  bottomText:{
    paddingTop: '150px',
  },
  GroupPhoto:{
    image: `url(${GP})`,
    height:'561px',
  },
  buttons:{
    borderRadius: 15,
  },
  photopadding:{
    paddingTop: "12vh",
  }
}));

export default function AboutUs() {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  React.useEffect(() => {
    console.log('Scrolling to top in aboutpage');
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.PageContent}>
        <Container maxWidth="1/4">
          <div className={classes.photopadding}>
            <Grid className={classes.GroupPhoto} align="center">
              <img src={GP} alt="Group photo"/>
            </Grid>
          </div>
          <Box width="100%" paddingTop="38vh">
            <Typography variant="body1" align="center" color="textPrimary">
              UNIVERSITY OF CALIFORNIA | SANTA CRUZ
            </Typography>
          </Box>
          <Box width="100%">
            <Typography variant="h1" align="center" color="textPrimary">
              CHINESE STUDENT ASSOCIATION
            </Typography>
          </Box>
          <Box width="100%" paddingTop="8vh">
            <Typography variant="body1" align="center" color="textPrimary">
              CSA is the association of Chinese people. Join pls. Here's a link to our YouTube channel if you are interested about what our previous banquets looked like in person:
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> https://www.youtube.com/watch?v=dQw4w9WgXcQ</a>
            </Typography>
          </Box>
          <Box width="100%" paddingTop="16vh">
            <Typography variant="h1" align="center" color="textPrimary">
            GRAPHIC LEADS
            </Typography>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  )
}
