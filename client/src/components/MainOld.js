import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LeagueForMain from './leagues/leaguesForMain';
import { CardActionArea } from '@material-ui/core';

const images = [
  {
    url: '/img/nhl19.jpg',
    title: 'Season 2019-20',
    width: '50%',
  },
  {
    url: '/img/nhl18.jpg',
    title: 'Season 2018-19',
    width: '50%',
  },
  {
    url: '/img/nhl17.jpg',
    title: 'Season 2017-18',
    width: '50%',
  },
  {
    url: '/img/nhl16.jpg',
    title: 'Season 2016-17',
    width: '50%',
  },
  {
    url: '/img/nhl15.jpg',
    title: 'Season 2015-16',
    width: '50%',
  },
  {
    url: '/img/nhl14.jpg',
    title: 'Season 2014-15',
    width: '50%',
  },
  {
    url: '/img/nhl13.jpg',
    title: 'Season 2013-12',
    width: '50%',
  },
  {
    url: '/img/nhl12.jpg',
    title: 'Season 2012-13',
    width: '50%',
  },
];

const useStyles = makeStyles((theme) => ({
  mytest: {
    backgroundColor: '#fff',
  },
  root: {
    borderRadius: 10,
    color: '#fff',
    margin: 15,
    //backgroundColor: '#fff',
  },
  mediaMain: {
    height: 500,
  },
  media: {
    height: 300,
  },
}));

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     minWidth: 300,
//     width: '100%',
//   },
//   image: {
//     height: 400,
//     // position: 'relative',
//     // height: 200,
//     // [theme.breakpoints.down('xs')]: {
//     //   width: '100% !important', // Overrides inline-style
//     //   height: 100,
//     // },
//     '&:hover, &$focusVisible': {
//       transform: 'scale(1.1)',
//       // zIndex: 1,
//       // '& $imageBackdrop': {
//       //   opacity: 0.15,
//       // },
//       // '& $imageMarked': {
//       //   opacity: 0,
//       // },
//       // '& $imageTitle': {
//       //   border: '4px solid currentColor',
//       // },
//     },
//   },
//   focusVisible: {},
//   imageButton: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: theme.palette.common.white,
//   },
//   imageSrc: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center 40%',
//   },
//   // imageBackdrop: {
//   //   position: 'absolute',
//   //   left: 0,
//   //   right: 0,
//   //   top: 0,
//   //   bottom: 0,
//   //   backgroundColor: theme.palette.common.black,
//   //   opacity: 0.4,
//   //   transition: theme.transitions.create('opacity'),
//   // },
//   // imageTitle: {
//   //   position: 'relative',
//   //   padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
//   //     theme.spacing(1) + 6
//   //   }px`,
//   // },
//   // imageMarked: {
//   //   height: 3,
//   //   width: 18,
//   //   backgroundColor: theme.palette.common.white,
//   //   position: 'absolute',
//   //   bottom: -2,
//   //   left: 'calc(50% - 9px)',
//   //   transition: theme.transitions.create('opacity'),
//   // },
// }));

export default function Main() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8} className={classes.mytest}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.mediaMain} image='/img/nhl20.jpg'>
                <Typography align='center' variant='h3'>
                  Season 2020-21
                </Typography>
              </CardMedia>
            </CardActionArea>
          </Card>
          <Grid container>
            {images.map((image) => (
              <Grid item xs={6}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia className={classes.media} image={image.url}>
                      <Typography align='center' variant='h4'>
                        {image.title}
                      </Typography>
                    </CardMedia>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <LeagueForMain />
        </Grid>
      </Grid>
    </Container>
  );
}
