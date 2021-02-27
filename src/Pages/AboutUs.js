import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
//import Paper from '@material-ui/core/Paper';
//import tDance from '../Photos/tdance.png';
import GP from './Photos/AboutUs.jpg';
import WWABGP from './Photos/WWABGP.png';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar';


//Office Heads Pics
import Daniel from './Photos/DanielPFP.jpg'
import datv from '../Photos/OfficeHeads/DatVu.jpg';
import esmondt from '../Photos/OfficeHeads/EsmondTsai.jpg';
import gloriaq from '../Photos/OfficeHeads/GloriaQiu.JPG';
import kevinx from '../Photos/OfficeHeads/KevinXu.jpg';
import lianal from '../Photos/OfficeHeads/LianaLau.jpg';
import lyp from '../Photos/OfficeHeads/LyPhung.jpg';
import maryy from '../Photos/OfficeHeads/MaryYuen.jpg';
import raymondl from '../Photos/OfficeHeads/RaymondLee.jpg';
//Icon10 for Vania
import vaniag from '../Photos/OfficeHeads/VaniaGunawan.jpg';

const theme = createMuiTheme({
  typography: {
    margin: 'auto',
    h1: {
      margin: 'auto',
      fontFamily: ['Archivo Black', 'sans-serif'].join(','),
      fontSize: '32px',
      '@media (min-width: 1400px)' :{
        fontSize: '60px',
        margin: 'auto',
      },
    },
    body1:{
      margin: 'auto',
      fontFamily: ['Lexend Exa', 'sans-serif',].join(','),
      fontSize: '12px',
      '@media (min-width: 1200px)' :{
        fontSize: '24px',
        textAlign: 'center',
        margin: 'auto'
      },
    },
    fontFamily: ['Lexend Exa', 'sans-serif',].join(','),
    fontSize: '12px',
    '@media (min-width: 1200px)' :{
      fontSize: '24px',
      margin: 'auto',
    },
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
    flexGrow: 1,
    maxWidth: '100%',
    paddingBottom: '300px'
  },
  PageButtons: {
    marginTop: theme.spacing(2),
    paddingBottom: '50px',
  },
  bottomText:{
    paddingTop: '150px',
  },
  GroupPhoto:{
    image: `url(${GP})`,
    width: '100%',
    height: 'auto',
  },
  AUBKGP:{
    backgroundImage: `url(${WWABGP})`,
    height:'100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100vw',
    maxWidth: '100%',
    backgroundRepeat: 'no-repeat',
  },
  photopadding:{
    margin: 'auto',
    paddingTop: "50px",
  },
  card: {
    minWidth: 337,
    minHeight: 475,
    borderRadius: 65,
  },
  cardContent: {
    height: 400,
    display:'flex',
    flexDirection: "column",
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },

  GM: {
    paddingTop: '5vh',
  },
  avatar: {
    width: '150px',
    height: '150px',
  },
}));

export default function AboutUs() {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);


  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  React.useEffect(() => {
    console.log('Scrolling to top in aboutpage');
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.PageContent}>
        <Container maxWidth="1/4" align="center">
          <Grid container className={classes.AUBKGP} >
            <div className={classes.photopadding}>
                <Grid item xs={12}  align="center">
                  <img src={GP} className={classes.GroupPhoto} alt="Groupphoto"/>
                </Grid>
            </div>
          </Grid>
          <Box width="100%" paddingTop="50px">
            <Typography variant="body1" align="center" color="textPrimary">
              UNIVERSITY OF CALIFORNIA | SANTA CRUZ
            </Typography>
          </Box>
          <Box width="100%">
            <Typography variant="h1" align="center" color="textPrimary">
              Chinese Student Association
            </Typography>
          </Box>
          <Box width="60vw" paddingTop="8vh"  margin="auto" textAlign= 'center'>
            <Typography variant="body1" align="justify" color="textPrimary">
            Chinese Student Association also known as CSA is an ethnic UCSC organization that
            seeks to serve those that identify with Chinese-American culture and
            foster an Asian-American community on campus!
            <br/>
            <br/>
            We strive to create a safe space for these individuals through
            cultural-themed events such as this banquet, and small-scale events
            primarily run through our unique house system.
            <br/>
            <br/>
            In spite of COVID-19, we aim provide our members a welcoming home in college and
            a place to make life-long friends.
            </Typography>
          </Box>
          <Box width="100%" paddingTop="100px">
            <Typography variant="h1" align="center" color="textPrimary">
            CSA OFFICERS
            <br/>
            (2020 - 2021)
            </Typography>
          </Box>
          <div className={classes.GM}>
           <Grid container spacing={3} justify='center'>
             <Grid item xs={2.4}>
               <Card className={classes.card} variant="outlined" style={{ border: '3px solid' }} >
                 <CardContent className={classes.cardContent}>
                  <Avatar alt="Esmond Tsai" src={esmondt} className={classes.avatar}/>
                   <Typography variant="h3" className={classes.title} color="textPrimary">
                     Esmond Tsai
                   </Typography>
                   <Typography variant="h6" color="textPrimary">
                     Co-Chair
                   </Typography>
                   <Typography variant="body2" component="p">
                     4th Year
                   </Typography>
                 </CardContent>
               </Card>
             </Grid>
             <Grid item xs={2.4}>
               <Card className={classes.card} variant="outlined" style={{ border: '3px solid' }} >
                 <CardContent className={classes.cardContent}>
                  <Avatar alt="Dat Vu" src={datv} className={classes.avatar}/>
                   <Typography variant="h3" className={classes.title} color="textPrimary">
                     Dat Vu
                   </Typography>
                   <Typography variant="h6" color="textPrimary">
                     Co-Chair
                   </Typography>
                   <Typography variant="body2" component="p">
                     4th Year
                   </Typography>
                 </CardContent>
               </Card>
             </Grid>
             <Grid item xs={2.4}>
               <Card className={classes.card} variant="outlined" style={{ border: '3px solid' }} >
                 <CardContent className={classes.cardContent}>
                  <Avatar alt="Gloria Qiu" src={gloriaq} className={classes.avatar}/>
                   <Typography variant="h3" className={classes.title} color="textPrimary" height='100px'>
                     Gloria Qiu
                   </Typography>
                   <Typography variant="h6" color="textPrimary" height='100px'>
                    Banquet Coordinator
                   </Typography>
                   <Typography variant="body2" component="p" height='100px'>
                     2nd Year
                   </Typography>
                 </CardContent>
               </Card>
             </Grid>
             <Grid item xs={2.4}>
               <Card className={classes.card} variant="outlined" style={{ border: '3px solid' }} >
                 <CardContent className={classes.cardContent}>
                  <Avatar alt="Raymond Lee" src={raymondl} className={classes.avatar}/>
                   <Typography variant="h3" className={classes.title} color="textPrimary">
                     Raymond Lee
                   </Typography>
                   <Typography variant="h6" color="textPrimary">
                    Banquet Coordinator
                   </Typography>
                   <Typography variant="body2" component="p">
                     3rd Year
                   </Typography>
                 </CardContent>
               </Card>
             </Grid>
             <Grid item xs={2.4}>
               <Card className={classes.card} variant="outlined" style={{ border: '3px solid' }} >
                 <CardContent className={classes.cardContent}>
                  <Avatar alt="Kevin Xu" src={kevinx} className={classes.avatar}/>
                   <Typography variant="h3" className={classes.title} color="textPrimary">
                     Kevin Xu
                   </Typography>
                   <Typography variant="h6" color="textPrimary">
                    Pubic Relations
                   </Typography>
                   <Typography variant="body2" component="p">
                     4th Year
                   </Typography>
                 </CardContent>
               </Card>
             </Grid>
             <Grid item xs={2.4}>
               <Card className={classes.card} variant="outlined" style={{ border: '3px solid' }} >
                 <CardContent className={classes.cardContent}>
                  <Avatar alt="Vania Gunawan" src={vaniag} className={classes.avatar}/>
                   <Typography variant="h3" className={classes.title} color="textPrimary">
                     Vania Gunawan
                   </Typography>
                   <Typography variant="h6" color="textPrimary">
                    Public Relations
                   </Typography>
                   <Typography variant="body2" component="p">
                     4th Year
                   </Typography>
                 </CardContent>
               </Card>
             </Grid>
             <Grid item xs={2.4}>
               <Card className={classes.card} variant="outlined" style={{ border: '3px solid' }} >
                 <CardContent className={classes.cardContent}>
                  <Avatar alt="Daniel Vu" src={Daniel} className={classes.avatar}/>
                   <Typography variant="h3" className={classes.title} color="textPrimary">
                     Daniel Vu
                   </Typography>
                   <Typography variant="h6" color="textPrimary">
                    Financial Chair
                   </Typography>
                   <Typography variant="body2" component="p">
                     4th Year
                   </Typography>
                 </CardContent>
               </Card>
             </Grid>
             <Grid item xs={2.4}>
               <Card className={classes.card} variant="outlined" style={{ border: '3px solid' }} >
                 <CardContent className={classes.cardContent}>
                  <Avatar alt="Liana Lau" src={lianal} className={classes.avatar}/>
                   <Typography variant="h3" className={classes.title} color="textPrimary">
                     Liana Lau
                   </Typography>
                   <Typography variant="h6" color="textPrimary">
                    Financial Chair
                   </Typography>
                   <Typography variant="body2" component="p">
                     4th Year
                   </Typography>
                 </CardContent>
               </Card>
             </Grid>
             <Grid item xs={2.4}>
               <Card className={classes.card} variant="outlined" style={{ border: '3px solid' }} >
                 <CardContent className={classes.cardContent}>
                  <Avatar alt="Mary Yuen" src={maryy} className={classes.avatar}/>
                   <Typography variant="h3" className={classes.title} color="textPrimary">
                     Mary Yuen
                   </Typography>
                   <Typography variant="h6" color="textPrimary">
                    Secretary
                   </Typography>
                   <Typography variant="body2" component="p">
                     2nd Year
                   </Typography>
                 </CardContent>
               </Card>
             </Grid>
             <Grid item xs={2.4}>
               <Card className={classes.card} variant="outlined" style={{ border: '3px solid' }} >
                 <CardContent className={classes.cardContent}>
                  <Avatar alt="Ly Phung" src={lyp} className={classes.avatar}/>
                   <Typography variant="h3" className={classes.title} color="textPrimary">
                     Ly Phung
                   </Typography>
                   <Typography variant="h6" color="textPrimary">
                    House Mediator
                   </Typography>
                   <Typography variant="body2" component="p">
                     3rd Year
                   </Typography>
                 </CardContent>
               </Card>
             </Grid>
            </Grid>
        </div>
        </Container>
      </div>
    </ThemeProvider>
  )
}
