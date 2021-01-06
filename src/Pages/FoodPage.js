import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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
  PageContent: {
    backgroundColor: '#424242',
    padding: theme.spacing(8, 0, 6),
    width: '99.1vw',
    height: '100vh',
  },
  PageButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function Foodpage() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.PageContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Food Page
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
