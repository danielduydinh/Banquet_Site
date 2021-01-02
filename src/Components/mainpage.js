import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

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
  appBar: {
    flexGrow: 1,
  },
  heroContent: {
    backgroundColor: '#424242',
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function MainPage() {
  const classes = useStyles();
  console.log(theme);
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <AppBar position="relative" className={classes.appBar}>
        <Tabs aria-label="simple tabs example">
          <Tab label="Item One"/>
          <Tab label="Item Two"/>
          <Tab label="Item Three"/>
        </Tabs>
      </AppBar>
      <main color="#424242">
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Main Page
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Button 1
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Button 2
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
      </ThemeProvider>
    </React.Fragment>
  );
}
