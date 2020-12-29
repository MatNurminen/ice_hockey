import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

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
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  boxMain: {
    margin: 10,
    position: 'relative',
  },
  imgMain: {
    borderRadius: 10,
    width: '100%',
  },
  fontMain: {
    fontWeight: 600,
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Box className={classes.boxMain}>
            <img className={classes.imgMain} src='/img/nhl20.jpg' alt='' />
            <div
              style={{
                position: 'absolute',
                color: 'white',
                bottom: 2,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <Typography variant='h3' className={classes.fontMain}>
                Season 2020-21
              </Typography>
            </div>
          </Box>
        </Grid>

        {images.map((image) => (
          <Grid item xs={12} sm={6}>
            <Box className={classes.boxMain}>
              <img className={classes.imgMain} src={image.url} alt='' />
              <div
                style={{
                  position: 'absolute',
                  color: 'white',
                  bottom: 2,
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              >
                <Typography variant='h5' className={classes.fontMain}>
                  {image.title}
                </Typography>
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
