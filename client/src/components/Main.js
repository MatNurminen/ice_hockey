import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LeagueForMain from './leagues/leaguesForMain';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    height: 400,
    // position: 'relative',
    // height: 200,
    // [theme.breakpoints.down('xs')]: {
    //   width: '100% !important', // Overrides inline-style
    //   height: 100,
    // },
    '&:hover, &$focusVisible': {
      transform: 'scale(1.1)',
      // zIndex: 1,
      // '& $imageBackdrop': {
      //   opacity: 0.15,
      // },
      // '& $imageMarked': {
      //   opacity: 0,
      // },
      // '& $imageTitle': {
      //   border: '4px solid currentColor',
      // },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  // imageBackdrop: {
  //   position: 'absolute',
  //   left: 0,
  //   right: 0,
  //   top: 0,
  //   bottom: 0,
  //   backgroundColor: theme.palette.common.black,
  //   opacity: 0.4,
  //   transition: theme.transitions.create('opacity'),
  // },
  // imageTitle: {
  //   position: 'relative',
  //   padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
  //     theme.spacing(1) + 6
  //   }px`,
  // },
  // imageMarked: {
  //   height: 3,
  //   width: 18,
  //   backgroundColor: theme.palette.common.white,
  //   position: 'absolute',
  //   bottom: -2,
  //   left: 'calc(50% - 9px)',
  //   transition: theme.transitions.create('opacity'),
  // },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <div className={classes.root}>
            <ButtonBase
              focusRipple
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: '100%',
              }}
            >
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(/img/nhl19.jpg)`,
                }}
              />
              {/* <span className={classes.imageBackdrop} /> */}
              <span className={classes.imageButton}>
                <Typography
                  //component='span'
                  variant='h3'
                  //color='inherit'
                  //className={classes.imageTitle}
                >
                  Season 2019-20
                  {/* <span className={classes.imageMarked} /> */}
                </Typography>
              </span>
            </ButtonBase>
          </div>
        </Grid>
        <Grid item xs={4}>
          <LeagueForMain />
        </Grid>
      </Grid>
    </Container>
  );
}
