import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import myImg from './Photos/foood.jpg';
import pic from './Photos/dat.jpg';
import pic2 from './Photos/DanielPFP.jpg';
import pizza from './Photos/pizza.jpg';
import mac from './Photos/mac.jpg';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';


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
    margin: 0,
    padding: theme.spacing(1),
  },
  PageContent: {
    paddingTop: '150px',
    paddingBottom: '300px',
    backgroundColor: '#171C20',
    padding: theme.spacing(8, 0, 6),
    minwidth: '100vw',
    maxwidth: '100%',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  gridList: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridListContainer: {
    position: 'relative',
    margin: 'auto',
    width: '80vw',
    minWidth: '80%',
    maxHeight: '2600px'
  },
  Tile: {
    width: '200px',
  },

}));


const DialogTitle = withStyles(useStyles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Foodpage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    console.log('Scrolling to top in foodpage');
    window.scrollTo(0, 0);
  }, []);

  const getGridListCols = () => {
    if (isWidthUp('xl', this.props.width)) {
      return 4;
    }
    if (isWidthUp('lg', this.props.width)) {
      return 3;
    }
    if (isWidthUp('md', this.props.width)) {
      return 2;
    }
    return 1;
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.PageContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            STUDENT WORKS
          </Typography>
        </Container>
          <div className={classes.gridListContainer}>
            <GridList className= {classes.gridList} spacing = {15} cellHeight={200} cols={getGridListCols}>
              {tileData.map((tile) => (
                  <GridListTile className={classes.Tile} key={tile.img} cols={1}>
                    <img src={tile.img} alt={tile.title} />
                  </GridListTile>
              ))}
            </GridList>
          </div>

          <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
              Open dialog
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Modal title
            </DialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                  in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </Typography>
                <Typography gutterBottom>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                  lacus vel augue laoreet rutrum faucibus dolor auctor.
              </Typography>
                <Typography gutterBottom>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                  scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                  auctor fringilla.
              </Typography>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                  Save changes
              </Button>
              </DialogActions>
            </Dialog>
          </div>
      </div>
    </ThemeProvider>
  )
}
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
