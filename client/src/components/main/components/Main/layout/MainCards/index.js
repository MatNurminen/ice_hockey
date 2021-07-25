import * as React from 'react';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

const images = [
  {
    url: '/img/nhl19.jpg',
    title: 'Season 2019-20',
    link: '/rosters?league=14&year=2019',
  },
  {
    url: '/img/nhl18.jpg',
    title: 'Season 2018-19',
    link: '/rosters?league=14&year=2018',
  },
  {
    url: '/img/nhl17.jpg',
    title: 'Season 2017-18',
    link: '/rosters?league=14&year=2017',
  },
  {
    url: '/img/nhl16.jpg',
    title: 'Season 2016-17',
    link: '/rosters?league=14&year=2016',
  },
  {
    url: '/img/nhl15.jpg',
    title: 'Season 2015-16',
    link: '/rosters?league=14&year=2015',
  },
  {
    url: '/img/nhl14.jpg',
    title: 'Season 2014-15',
    link: '/rosters?league=14&year=2014',
  },
  {
    url: '/img/nhl13.jpg',
    title: 'Season 2013-12',
    link: '/rosters?league=14&year=2013',
  },
  {
    url: '/img/nhl12.jpg',
    title: 'Season 2012-13',
    link: '/rosters?league=14&year=2012',
  },
];

function ButtonBases({ classes }) {
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Box className={classes.boxMain}>
            <Box component={RouterLink} to='/rosters?league=14&year=2020'>
              <img className={classes.imgMain} src='/img/nhl20.jpg' alt='' />
              <div className={classes.cardLabel}>
                <Typography variant='h3' className={classes.fontMain}>
                  Season 2020-21
                </Typography>
              </div>
            </Box>
          </Box>
        </Grid>

        {images.map((image, key) => (
          <Grid key={key} item xs={12} sm={6}>
            <Box className={classes.boxMain}>
              <Box component={RouterLink} to={image.link}>
                <img className={classes.img} src={image.url} alt='' />
                <div className={classes.cardLabel}>
                  <Typography variant='h5' className={classes.fontMain}>
                    {image.title}
                  </Typography>
                </div>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default styles(ButtonBases);
