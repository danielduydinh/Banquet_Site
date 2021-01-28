import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { flexbox } from '@material-ui/system';
import { positions } from '@material-ui/system';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import Carousel from 'react-bootstrap/Carousel'
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
//import Carousel from 'react-elastic-carousel';
import { spacing } from '@material-ui/system';

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
    backgroundColor: '#424242',
    padding: theme.spacing(8, 0, 6),
    // width: '99.1vw',
    minHeight: '85vh',
  },
  PageButtons: {
    marginTop: theme.spacing(4),
  },
  carouseldiv: {
    width: '60vw',
    height: '20vh',
  },
}));

export default function Mainpage() {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.PageContent}>
        <div className={classes.carouseldiv}>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://dogtime.com/assets/uploads/2018/10/puppies-cover.jpg"
                alt="Food"
              />
              <Carousel.Caption>
                <h3>Food</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://dogtime.com/assets/uploads/2018/10/puppies-cover.jpg"
                alt="Skit"
              />

              <Carousel.Caption>
                <h3>Skit</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://dogtime.com/assets/uploads/2018/10/puppies-cover.jpg"
                alt="Fashion"
              />

              <Carousel.Caption>
                <h3>Fashion</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://dogtime.com/assets/uploads/2018/10/puppies-cover.jpg"
                alt="Language"
              />

              <Carousel.Caption>
                <h3>Language</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <Container maxWidth="1/4">
          <Box width="45%">
            <Typography component="h2" underline="always" variant="h3" align="left" color="textPrimary" gutterBottom>
              WELCOME TO OUR ANNUAL BANQUET
            </Typography>
          </Box>
          <Box width="30%">
            <Typography component="h5" variant="h6" align="left" color="textPrimary" gutterBottom>
              CSA is a student organization and resource devoted to promoting unity and empowerment among students of the University of California, Santa Cruz
              (UCSC) through education, consciousness and recognition of Chinese, and Chinese American cultural aspects. We strive to strengthen
              the diverse UCSC community by organizing events that create a space for student voices and coalition building.
            </Typography>
          </Box>
          <Box width="100%">
            <Typography component="h2" underline="always" variant="h3" align="center" color="textPrimary" gutterBottom>
              Something about Annual Meeting
            </Typography>
          </Box>
          <Box  p={2} width="100%" mx={16}>
            <Typography component="h5" variant="h6" align="center" color="textPrimary" gutterBottom>
              CSA is a student organization and resource devoted to promoting unity and empowerment among students of the University of California, Santa Cruz
              (UCSC) through education, consciousness and recognition of Chinese, and Chinese American cultural aspects. We strive to strengthen
              the diverse UCSC community by organizing events that create a space for student voices and coalition building.
            </Typography>
          </Box>
          <div className={classes.PageButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  LEARN MORE ABOUT US
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary">
                  WATCH THE BANQUET!
                </Button>
               </Grid>
              </Grid>
          </div>
        </Container>
      </div>
    </ThemeProvider>
  )
}
