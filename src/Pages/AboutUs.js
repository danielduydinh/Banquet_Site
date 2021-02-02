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
import { spacing } from '@material-ui/system';
import Paper from '@material-ui/core/Paper';
import tDance from '../Photos/tdance.png';

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

export default function AboutUs() {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.PageContent}>
        <Container maxWidth="1/4">
          <Box width="100%" paddingTop='30px'>
            <Typography component="h2" underline="always" variant="h3" align="center" color="textPrimary" gutterBottom>
              CHINESE STUDENT ASSOCIATION
            </Typography>
          </Box>
          <Box p={2} width="80vw" mx={16}>
            <Typography component="h5" variant="h6" align="center" color="textPrimary" gutterBottom>
              CSA is a student organization and resource devoted to promoting unity and empowerment among students of the University of California, Santa Cruz
              (UCSC) through education, consciousness and recognition of Chinese, and Chinese American cultural aspects. We strive to strengthen
              the diverse UCSC community by organizing events that create a space for student voices and coalition building.
            </Typography>
          </Box>
        </Container>

      </div>
    </ThemeProvider>
  )
}
