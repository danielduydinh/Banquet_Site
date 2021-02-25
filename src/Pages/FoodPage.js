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
import Link from '@material-ui/core/Link';


// all the pictures from content submissions
import aaronz from '../ContentSub/aaronz.PNG';
import ethanl from '../ContentSub/ethanl.PNG';
import joannay from '../ContentSub/joannay.jpg';
import lyp from '../ContentSub/lyp.jpg';
import nathanl from '../ContentSub/nathanl.jpg';
import raymondl from '../ContentSub/raymondl.png';
import samuelz from '../ContentSub/samuelz.jpg';
import tristynl from '../ContentSub/tristynl.JPG';
import christym from '../ContentSub/christym.jpg';
import tomatoegg from '../ContentSub/tomatoegg.jpg';
import kennethn from '../ContentSub/kennethn.jpg';
import kennethsong from '../ContentSub/kennethsong.wav';
import christym1 from '../ContentSub/christym1.jpg';
import christym2 from '../ContentSub/christym2.JPG';
import christym3 from '../ContentSub/christym3.JPG';
import christym4 from '../ContentSub/christym4.jpg';
import christym5 from '../ContentSub/christym5.jpg';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: ['Archivo Black', 'sans-serif'].join(','),
      fontSize: '40px',
      '@media screen and (min-width: 1400px)':{
        fontSize: '60px',
      },
    },
    body1:{
      fontFamily: ['Lexend Exa', 'sans-serif',].join(','),
      fontSize: '12px',
      '@media screen and (min-width: 1200px) and (min-height: 1000px)':{
        fontSize: '24px',
      },
    },
    fontFamily: ['Lexend Exa', 'sans-serif',].join(','),
    fontSize: '12px',
    '@media screen and (min-width: 1000px) and (min-height: 1000px)':{
      fontSize: '24px',
    },
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
      default: '#171C20',
      paper: '#171C20',
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
  // I found a good balance of keeping it between 200 and 300px for how large you'd want it to be
  // if you change width here, make sure to change the cellHeight at line 195
  Tile: {
    width: '300px',
  },
  // zIndex is set to appear in front of the appBarTabs
  dialogBox: {
    fullScreen: 'true',
    zIndex: theme.zIndex.drawer +2,
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
  // selected Element is a state that will contain the data of whichever til we're working with
  const [selectedElement, setSelectedElement] = React.useState();
  const [open, setOpen] = React.useState(false);
  // handleClickOpen will open the Dialog box and also set the information of the tile that the dialog box will display
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
          <Typography component="h1" variant="h1" align="center" color="textPrimary" gutterBottom>
            STUDENT WORKS
          </Typography>
        </Container>
          <div className={classes.gridListContainer}>
            <GridList className= {classes.gridList} spacing = {15} cellHeight={300} cols={getGridListCols}>
              {tileData.map((tile) => (
                  <GridListTile className={classes.Tile} key={tile.img} cols={1} >
                    <img src={tile.img} alt={tile.title} onClick={() => handleClickOpen(tile)}/>
                    <GridListTileBar onClick={() => handleClickOpen(tile)}
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
          {/* So this is where the Dialog Box is being rendered.
            You can find the styling for it up in the useStyles under dialogBox
            What's happening here is that the tile from tileData is being passed to selectedElement.
            selectedElement is now the tile and you can access the other info of tile, like the title or content.
            You can get creative here, since we're mapping stuff. What I recommend is adding an extra parameter to tileData, name it
            extra or something.
            The extra parameter could contain an image, an embedded Spotify link, a video, etc. depending on which tiles
            you're working on.
            */}
          { selectedElement && (
            <Dialog
            className={classes.dialogBox}
            onClose={handleClose} aria-labelledby="customized-dialog-title"
            selectedElement={selectedElement}
            open={open}
            setOpen={setOpen}>
                <Typography gutterBottom variant='h1'>
                  {selectedElement.title}
                </Typography>
                <DialogContent dividers>
                <Typography gutterBottom fontSize='9px'>
                  {selectedElement.content}
                </Typography>
                <Typography gutterBottom >
                  <GridList className= {classes.gridList} spacing = {15} cellHeight={400} cols={getGridListCols}>
                    <img src={selectedElement.img} alt={selectedElement.img} />
                  </GridList>
                  {selectedElement.extra}
                  <GridList className= {classes.gridList} spacing = {15} cellHeight={400} cols={getGridListCols}>
                    <img src={christym1} alt={selectedElement.img} />
                  </GridList>
                  <GridList className= {classes.gridList} spacing = {15} cellHeight={710} cols={getGridListCols}>
                    <img src={christym2} alt={selectedElement.img} />
                  </GridList>
                  <GridList className= {classes.gridList} spacing = {15} cellHeight={710} cols={getGridListCols}>
                    <img src={christym3} alt={selectedElement.img} />
                  </GridList>
                  <GridList className= {classes.gridList} spacing = {15} cellHeight={400} cols={getGridListCols}>
                    <img src={christym4} alt={selectedElement.img} />
                  </GridList>
                  <GridList className= {classes.gridList} spacing = {15} cellHeight={400} cols={getGridListCols}>
                    <img src={christym5} alt={selectedElement.img} />
                  </GridList>
                </Typography>
              </DialogContent>
            </Dialog>
           )}
      </div>
    </ThemeProvider>
  )
}
/*
So here is the data and stuff for each tile. It includes the image, title, author, and the content, which is what each person wrote for their submission here.
In the HTML part of the code, you can see that we mapped this info to each of the tiles and the dialog boxes that open up.
*/
const tileData = [
  {
    img: aaronz,
    title: "年夜饭 or New Year's Eve Banquet",
    author: 'Aaron Zhang',
    content: "One of the most memorable holidays in the majority of Asian culture not only because of the red envelopes but also the great food. Lunar New Year eve dinner holds a significant meaning as it is to celebrate a new beginning in the lunar calendar. Just like Thanksgiving, this event is supposed to bring all families together and spend time together.",
    
  },
  {
    img: ethanl,
    title: 'Chinese Pop Playlist',
    author: 'Ethan Li',
    content: "My submission for this theme is my Spotify playlist of popular chinese songs. Growing up, I never really felt like I was able to connect with my culture as much as I could have since I came to the states at a young age. Music is one of my major passions and it’s a big part of my life. In middle school, I began to listen to a lot more music and I started to delve into popular chinese music, starting with artists like Wanting and songs like Tong Hua. After that, my range of music grew larger and larger which has allowed me to feel more connected with modern chinese culture.",
    extra: 
      <Typography align = 'center' >
        <Link href = "https://open.spotify.com/playlist/4PX2lPb64lsqzhq2na7e1O"  color="inherit">
          Chinese Pop Playlist
        </Link>
      </Typography>
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
  {
    img: christym,
    title: 'Dumpling 饺子',
    author: 'Christy Mei',
    content: 'Dumplings have always been a staple dish eaten in my family, whether it was homemade or store-bought. Growing up, my mom would always hand make dumplings from scratch for me to eat. I vividly remember the excitement I had whenever I smelled the delicious fragrance of the stuffing from a distance. Even today, I still feel the same thrill as my younger self did whenever I see dumplings sitting on the dinner table. When I was younger, I always wondered why my mom frequently chooses to spend countless hours hand making dumplings instead of buying premade ones from the store. It turns out that hand making dumplings is actually a family tradition that has been passed down for many years and holds a meaningful place in my mom’s heart. Since this year’s Lunar New Year Banquet is virtual, I wanted to share some pictures of my mom’s dumpling-making process.',
    extraimg: christym1
  },
  {
    img: kennethn,
    title: '哪裡只得我共你 or You and Me',
    author: 'Kenneth Ng',
    content: 'I chose to cover one of my favorite Cantonese songs. The song is called 哪裡只得我共你 or You and Me in English, and is created by Dear Jane. Cantonese songs allow me to connect with the Hong Kong part of me that I neglected when I was younger. These songs always feel like a banger, I am able to learn Cantonese along the way, and are really fun to sing along too. I even sang two Cantonese songs in front of a crowd back in high school. The song by Dear Jane in particular is the one that resonates within me the most. With a really nice beat and how popular it is, You and Me will always be there wherever I go. The piano in the beginning of the cover shows how much this song really hits me.',
    extra: 
      <div align = "center">
        <Typography>You and Me</Typography>
        <audio controls>
          <embed height="60" type="kennethsong/wav" width="144" src="kennethsong.wav" volume="60" loop="false" autostart="false" />
        </audio>
      </div>
  },
    {
    img: tomatoegg,
    title: '番茄蛋 Stir Fry Tomato Egg',
    author: 'Gloria Qiu',
    content: <Typography>
    The stir-fried tomato egg is a dish that represents Chinese home-cooked comfort food. Beloved by many, this dish has been a staple in many family dinners to complement a bowl of rice or noodles. We referred to it solely as 番茄蛋 fān qié dàn and has a special significance to my family. For my mother, like many Chinese aunties and mothers, the tomato egg dish is the first dish she was taught to cook as a kid. Its sweet, tangy, and flavorful taste gets everyone in my family scooping extra rice into their bowl. My grandma made sure to always make 番茄蛋 when I came home for the weekends. This recipe is our rendition of the Stir-Fried Tomato Egg dish.
    <div>
    This recipe is an estimate because Asians measure out ingredients by harnessing the wisdom of our ancestors. I did the best I can...
    Serving Size: One Family  
    Ingredients
    5 eggs 
    1 clove of garlic or more
    2 tsp oyster sauce 
    2 tsp salt
    3 large tomatoes 
    2 tsp ketchup 
    3 tsp sugar 
    1/2 cup water 
    1 tsp corn starch 
    4 tbsp cooking oil
    Spring onion however much you’d like
    </div>
    
    Beat eggs and dice garlic
    Add cooking oil to a heated saucepan or wok. Stir fry the eggs with salt and garlic on medium heat and cook until slightly yokey. Remove from pan immediately and set aside. 
    Diced tomatoes and add cooking oil to a heated pan. Stir fry the tomatoes with salt, sugar, and ketchup. 
    After 2 minutes, add water and cover the lid until the water has almost evaporated. 
    Combine cornstarch and 2 tbsp of water and incorporate it into the tomatoes 
    Smash tomatoes to your liking and stir fry in the eggs you set aside at the beginning
    Garnish with spring onions and top on up with rice or noodles ,
    
    </Typography>
  },
];
