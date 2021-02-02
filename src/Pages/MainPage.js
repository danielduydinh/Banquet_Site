import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
// import { flexbox } from '@material-ui/system';
// import { positions } from '@material-ui/system';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import Carousel from 'react-bootstrap/Carousel'
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import { spacing } from '@material-ui/system';
import Paper from '@material-ui/core/Paper';
import tDance from '../Photos/tdance.png';
import Foodpage from '../Pages/FoodPage.js';
import LocationContext from '../Components/LocationContext.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const theme = createMuiTheme({
  typography: {
    h3: {
      fontFamily: ['Archivo Black', 'sans-serif'].join(','),
      fontSize: '60px',
    },
    fontFamily: ['Lexend Exa', 'sans-serif',].join(','),
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
  IntroPhoto:{
    backgroundImage: `url(${tDance})`,
    height:'1080px',
  },
  buttons:{
    borderRadius: 15,
  },
}));



export default function Mainpage() {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleAbout = (setValue) => {
    setValue('about');
  }
  
  const handleSkit = (setValue) => {
    setValue('skit');
  }

  // there isnt a banquet page atm so this links to skit
  const handleBanquet = (setValue) => {
    setValue('skit');
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.PageContent}>

        <Container maxWidth="1/4">
            <Box width="1501px" className={classes.IntroPhoto} paddingTop='20px'>
              <Box width="60%" paddingTop="30px" paddingBottom="10px" paddingLeft='20px'>
                <Typography component="h2" underline="always" variant="h3" align="left" color="textPrimary" gutterBottom>
                  WELCOME TO OUR ANNUAL BANQUET
                </Typography>
              </Box>
              <Box width="70%" paddingBottom="30px" paddingLeft='20px'>
                <Typography component="h5" variant="h6" align="left" color="textPrimary" gutterBottom>
                  CSA is a student organization and resource devoted to promoting unity and empowerment among students of the University of Santa Cruz
                  (UCSC) through education, consciousness and recognition of Chinese, and Chinese American cultural aspects. We strive to strengthen
                  the diverse UCSC community by organizing events that create a space for student voices and coalition building.
                </Typography>
              </Box>
            </Box>
          <Box width="100%" paddingTop='30px'>
            <Typography component="h2" underline="always" variant="h3" align="center" color="textPrimary" gutterBottom>
              SOMETHING ABOUT THE ANNUAL BANQUET
            </Typography>
          </Box>
          <Box p={2} width="80vw" mx={16}>
            <Typography component="h5" variant="h6" align="center" color="textPrimary" gutterBottom>
              CSA is a student organization and resource devoted to promoting unity and empowerment among students of the University of California, Santa Cruz
              (UCSC) through education, consciousness and recognition of Chinese, and Chinese American cultural aspects. We strive to strengthen
              the diverse UCSC community by organizing events that create a space for student voices and coalition building.
            </Typography>
          </Box>
          <div className={classes.PageButtons}>
            <LocationContext.Consumer>
              {({value, setValue}) => (
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Link to="/about">
                      <Button variant="contained" color="#171C20" className={classes.buttons}
                        onClick={() => handleAbout(setValue)}>
                        LEARN MORE ABOUT US
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/skit">
                      <Button variant="contained" color='#171C20' className={classes.buttons}
                        onClick={() => handleBanquet(setValue)}>
                        WATCH THE BANQUET!
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              )}
            </LocationContext.Consumer>
          </div>
          <Grid className={classes.carouselContainer}>
            <Grid item>
              <div className={classes.carouseldiv} >
              <LocationContext.Consumer>
              {({value, setValue}) => (
                <Carousel activeIndex={index} onSelect={handleSelect} borderRadius="16px">
                  
                    <Carousel.Item>
                    <Link to="/about">
                      <img
                        className="d-block w-100"
                        src="https://dogtime.com/assets/uploads/2018/10/puppies-cover.jpg"
                        alt="Food"
                        onClick={() => handleAbout(setValue)}
                      />
                      </Link>
                      <Carousel.Caption>
                        <Typography component="h2" align="center" color="textPrimary" gutterBottom>
                          ABOUT US
                        </Typography>
                      </Carousel.Caption>
                    </Carousel.Item>
                  
                  
                    <Carousel.Item>
                    <Link to="/skit">
                      <img
                        className="d-block w-100"
                        src="https://dogtime.com/assets/uploads/2018/10/puppies-cover.jpg"
                        alt="Skit"
                        onClick={() => handleSkit(setValue)}
                      />
                      </Link>
                      <Carousel.Caption>
                        <Typography component="h2" align="center" color="textPrimary" gutterBottom>
                          FASHION SHOW
                        </Typography>
                      </Carousel.Caption>
                    </Carousel.Item>
                  
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://dogtime.com/assets/uploads/2018/10/puppies-cover.jpg"
                      alt="Skit"
                    />
                    <Carousel.Caption>
                      <Typography component="h2" align="center" color="textPrimary" gutterBottom>
                        BEHIND THE SCENES
                      </Typography>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://dogtime.com/assets/uploads/2018/10/puppies-cover.jpg"
                      alt="Fashion"
                    />
                    <Carousel.Caption>
                      <Typography component="h2" align="center" color="textPrimary" gutterBottom>
                        STUDENT WORKS
                      </Typography>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://dogtime.com/assets/uploads/2018/10/puppies-cover.jpg"
                      alt="Language"
                    />
                    <Carousel.Caption>
                      <Typography component="h2" align="center" color="textPrimary" gutterBottom>
                        SKIT
                      </Typography>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
                )}
                </LocationContext.Consumer>
              </div>
            </Grid>
          </Grid>
          <Box p={2} width="80vw" mx={16} className={classes.bottomText}>
            <Typography component="h5" variant="h3" align="center" color="textPrimary" gutterBottom>
              INSERT SOME RANDOM SHIT HERE. HELLO HOW ARE YA I WANT TO EAT SOMETHING BUT MAYBE I'LL DRINK LATER AHAHA PROGRAMMING IS FUN AMIRITE!!
              MOM I'M HUNGRY CAN WE GET BOBA.
            </Typography>
          </Box>
        </Container>

      </div>
    </ThemeProvider>
  )
}
