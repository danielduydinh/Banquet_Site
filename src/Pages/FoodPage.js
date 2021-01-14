import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

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
  gridList: {
    width: 500,
    height: 450,
  },
}));

const tileData = [
  {
    img: '../Photos/dat.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 2,
    featured: true,
  },
  {
    img: '../Photos/DanielPFP.jpg',
    title: 'Tasty burger',
    author: 'director90',
  },
  {
    img: '../Photos/foood.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: '../Photos/dat.jpg',
    title: 'Morning',
    author: 'fancycrave1',
    featured: true,
  },
  {
    img: '../Photos/DanielPFP.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: '../Photos/foood.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: '../Photos/dat.jpg',
    title: 'Vegetables',
    author: 'jill111',
    cols: 2,
  },
  {
    img: '../Photos/DanielPFP.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: '../Photos/foood.jpg',
    title: 'Mushrooms',
    author: 'PublicDomainPictures',
  },
  {
    img: '../Photos/dat.jpg',
    title: 'Olive oil',
    author: 'congerdesign',
  },
  {
    img: '../Photos/DanielPFP.jpg',
    title: 'Sea star',
    cols: 2,
    author: '821292',
  },
  {
    img: '../Photos/foood.jpg',
    title: 'Bike',
    author: 'danfador',
  },
];


export default function Foodpage() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.PageContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Food Page
          </Typography>
          <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
              {tileData.map((tile) => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title} />
                </GridListTile>
                ))}
            </GridList>
          </div>
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
