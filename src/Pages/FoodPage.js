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
import GridListTileBar from '@material-ui/core/GridListTileBar';
import InfoIcon from '@material-ui/icons/Info';

// all the pictures from content submissions
import aaronz from '../ContentSub/aaronz.PNG';
import ethanl from '../ContentSub/ethanl.PNG';
import joannay from '../ContentSub/joannay.jpg';
import lyp from '../ContentSub/lyp.jpg';
import nathanl from '../ContentSub/nathanl.jpg';
import raymondl from '../ContentSub/raymondl.png';
import samuelz from '../ContentSub/samuelz.jpg';
import tristynl from '../ContentSub/tristynl.JPG';


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
    width: '300px',
  },

}));

const hellostr = "bruh moment";
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
  const [selectedElement, setSelectedElement] = React.useState();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = (tile) => {
    setOpen(true);
    setSelectedElement(tile);
    console.log(tile);
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
            <GridList className= {classes.gridList} spacing = {15} cellHeight={300} cols={getGridListCols}>
              {tileData.map((tile) => (
                  <GridListTile className={classes.Tile} key={tile.img} cols={1} >
                    <img src={tile.img} alt={tile.title} onClick={handleClickOpen}/>
                    <GridListTileBar
                      title={tile.title}
                      subtitle={<span>by: {tile.author}</span>}
                      actionIcon={
                        <IconButton aria-label={`info about ${tile.title}`} className={classes.icon} onClick={() => handleClickOpen(tile)}>
                          <InfoIcon />
                        </IconButton>
                      }
                    />
                  </GridListTile>
              ))}
            </GridList>
          </div>
          { selectedElement && (
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title"
             selectedElement={selectedElement}
             open={open}
             setOpen={setOpen}>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Title of this
              </DialogTitle>
                <DialogContent dividers>
                 <Typography gutterBottom>
                  {selectedElement.content}
                 </Typography>
               </DialogContent>
             </Dialog>
           )}
          {/*
          <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Modal title
          </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                Bruh moment
              </Typography>
            </DialogContent>
          </Dialog>
        */}
      </div>
    </ThemeProvider>
  )
}
const tileData = [
  {
    img: aaronz,
    title: "年夜饭 or New Year's Eve Banquet",
    author: 'Aaron Zhang',
    content: "One of the most memorable holidays in the majority of Asian culture not only because of the red envelopes but also the great food. Lunar New Year eve dinner holds a significant meaning as it is to celebrate a new beginning in the lunar calendar. Just like Thanksgiving, this event is supposed to bring all families together and spend time together."
  },
  {
    img: ethanl,
    title: 'Chinese Pop Playlist',
    author: 'Ethan Li',
    content: "My submission for this theme is my Spotify playlist of popular chinese songs. Growing up, I never really felt like I was able to connect with my culture as much as I could have since I came to the states at a young age. Music is one of my major passions and it’s a big part of my life. In middle school, I began to listen to a lot more music and I started to delve into popular chinese music, starting with artists like Wanting and songs like Tong Hua. After that, my range of music grew larger and larger which has allowed me to feel more connected with modern chinese culture. Link: https://open.spotify.com/playlist/4PX2lPb64lsqzhq2na7e1O"
  },
  {
    img: joannay,
    title: '鱼 or Fish',
    author: 'Joanna Yu',
    content: "鱼, or Fish, is a common entree in a Chinese or Asian household.  It can be prepared in a variety of ways, from being steamed to being pan-fried. However, it also holds a special meaning when served for the Lunar New Year. For context, 鱼 (yú) is pronounced in the second intonation of the Chinese language. It is the same pronunciation 余 of 多余, (dūo yú), meaning prosperity, wealth, and abundance. Fish is commonly seen on a Lunar New Year banquet table to bring hope to people, in wishing them prosperity in the New Year. Fish holds a special memory for me, as the many methods I have eaten them at home have given me many family memories that I cherish. From seeing my parents prepare the fish, to how they cook it, adding the necessary spices, to me testing a variety of methods of preparing fish with my brother as we celebrate the new year together."
  },
  {
    img: lyp,
    title: 'Movie Playlist',
    author: 'Ly Phung',
    content: 'Hello my friends, one form of media that is known for racial discriminiation is Hollywood, or the film industry. Dominated by homogenous actors, the movie world often replaces characters of other races, specifically asians, with white actors who lack an understanding of the culture. However in recent times, Hollywood has begun to foster more tolerance and acceptance towards Asian and Asian American actors. As more and more movies come out with asian actors and asian casts, I wanted to make a list of movies/shows that I feel are good examples of Asian representation in media. This list is not a ranking, just simply a tribute to good movies with asian actors, or a focus on asian culture.\nShaolin Soccer\nCrazy Rich Asians\nIp Man\nOver the Moon\nParasite\nTrain to Busan\nSpirited Away\nTo All The Boys I’ve Loved\nThe Farewell\n'
  },
  {
    img: nathanl,
    title: 'Chicken Noodles or 鸡粉',
    author: 'Nathan Luong',
    content: 'Whenever I think of comfort food, this is the one dish that always comes to mind. This dish has all the attributes of a comfort dish to me. It reminds me of home and the simplicity is its greatest strength. On top of that, anyone can customize this dish to their heart’s content. In my family, we often add char siu and duck with a dipping sauce on the side. A personal story of mine is that when I went on an exchange trip to Ecuador, I was homesick a few days later. I wished I had food that reminded me of home and that led to me seeking out a chicken noodles place that was owned by Chinese people. After eating this dish, it made the trip all the more better.',
  },
  {
    img: raymondl,
    title: 'Ramen Renaissance',
    author: 'Raymond Lee',
    content: "Ramen (or 拉面) is a type of noodle commonly made through hand-pulling and is a staple in Japanese culture. Now, it has integrated itself into other Asian cultures as well, including China, and has made its way to the United States as well. From the first time I ate ramen as a kid, I got hooked so much that I craved ramen all the time. Thus, my parents and I would go to Maru Ichi in downtown Mountain View at least twice a month, where I would have my favorite dish - tonkatsu ramen with no bean sprouts. Why don't I get bean sprouts? Long story short, my parents tricked me into thinking they were 'crunchy noodles' so my high expectations were immediately shattered the moment I decided to take a bite. From then on, I have always avoided bean sprouts whenever I could. Growing up also had its fair share of stigmas. As I attended middle school, all of my classmates, including my fellow Asian classmates, would joke about what it's like to be a 'Good Asian' so, for a Renaissance art project, I hung up this image as a reminder of my middle school youth and the stereotypes I grew up with.",
  },
  {
    img: samuelz,
    title: 'Red Bean Soup or 红豆汤',
    author: 'Samuel Zhang',
    content: 'Red bean soup or 红豆汤, a sweet and tangy dessert often served in Cantonese restaurants, has been a timely tradition in my family’s cuisine. I remember when I was younger I used to get sick often, so my parents would prepare a bowl of the dessert to keep my fever at bay, and in Cantonese the balance between heat and cool is called yeet-hay(热气). Especially in the winter times, this dessert helped to cure our coldness. Whenever I went to family gatherings, we would bring a nice, warm pot of red bean soup for everyone to enjoy at the end of the meal. Everytime I visited relatives in the motherland, they would serve this dessert as a symbol of reunion. I like that this dessert can have many different toppings, and the one we make has sweet rice balls filled with black sesame called 汤圆 which symbolizes harmony.',
  },
  {
    img: tristynl,
    title: 'Almond Jello',
    author: 'Tristyn Lai',
    content: 'Almond jello, a traditional Cantonese dessert, has always been a popular dish to have at my family gatherings. It was a sweet treat to end the night and I remember all the times me and my cousins would sit around the kitchen table slurping the dessert down as a quick break from playing. My mom used to be the one in charge of making/bringing the jello and I loved helping her prepare it. Eventually, I ended up taking over this family tradition of making it. Usually the dessert is supposed to be mixed with lychee or mandarin oranges, but my family’s recipe was adjusted because the fruit would make the dessert too sweet for my elder relatives.',
  },
];
