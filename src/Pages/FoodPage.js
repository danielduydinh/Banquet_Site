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
import myImg from './Photos/foood.jpg';
import pic from './Photos/dat.jpg';
import pic2 from './Photos/DanielPFP.jpg';
import pizza from './Photos/pizza.jpg';
import mac from './Photos/mac.jpg';


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
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  PageContent: {
    backgroundColor: '#424242',
    padding: theme.spacing(8, 0, 6),
    height: '100vh',
  },
  PageButtons: {
    marginTop: theme.spacing(4),
  },
  gridList: {
    width: 400,
    height: 600,
    justifyContent: 'center',
  },
  GridContainer:{
    justifyContent: 'center',
    width: '50vw',
    heigh: '50vh',
  }
}));
const tileData = [
  {
    img: pizza,
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    width: '50vw',
    featured: true,
  },
  {
    img: pic,
    title: 'Tasty burger',
    author: 'director90',
  },
  {
    img: pic2,
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: mac,
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: myImg,
    title: 'Morning',
    author: 'fancycrave1',
    width: 800,
    cols: 3,
    featured: true,
  },
  {
    img: pic2,
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: mac,
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: pic,
    title: 'Vegetables',
    author: 'jill111',
    cols: 1,
  },
  {
    img: pizza,
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: pic,
    title: 'Mushrooms',
    author: 'PublicDomainPictures',
  },
  {
    img: pic2,
    title: 'Olive oil',
    author: 'congerdesign',
  },
  {
    img: pizza,
    title: 'Sea star',
    cols: 1,
    author: '821292',
  },
  {
    img: pic,
    title: 'Bike',
    author: 'danfador',
  },
  {
    img: mac,
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
        </Container>
        <Container className={classes.GridContainer}>
          <div className={classes.root}>
            <GridList cellHeight='auto' cols={4}>
              {tileData.map((tile) => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title} />
                </GridListTile>
                ))}
            </GridList>
          </div>
        </Container>
      </div>
    </ThemeProvider>
  )
}
