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
}));

export default function Mainpage() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.PageContent}>
        <Container maxWidth="1/4">
          <Box width="45%">
            <Typography component="h2" underline="always" variant="h3" align="left" color="textPrimary" gutterBottom>
              WELCOME TO OUR ANNUAL BANQUET 
            </Typography>
          </Box>
          <Box width="30%">
            <Typography component="h5" variant="h6" align="left" color="textPrimary" gutterBottom>
              CSA is a student organization and resource devoted to promoting unity and empowerment among students of the University of Santa Cruz
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
              CSA is a student organization and resource devoted to promoting unity and empowerment among students of the University of Santa Cruz
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
