import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles((theme) => ({
  footer: {
    marginTop: '2rem',
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    width: '100%',
    height: '200px',
  },
  logo: {
    width: '80px',
  },
  mainContainer: {
    position: 'absolute',
    height: '200px',
  },
  link: {
    textDecoration: 'none',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    color: 'white',
    '&:hover': {
      color: '#fff',
    },
  },
  gridItem: {
    marginLeft: '3em',
  },
}));

export default function Footer() {
  const classes = useStyle();
  return (
    <footer className={classes.footer}>
      <Grid
        container
        justify='flex-start'
        alignItems='center'
        className={classes.mainContainer}
      >
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid item className={classes.link}>
              <Button component={Link} to='/'>
                <img className={classes.logo} alt='' src='/img/b_logo.png' />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid component={Link} to='/stats' item className={classes.link}>
              Stats
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid component={Link} to='/teams' item className={classes.link}>
              Teams
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid component={Link} to='/leagues' item className={classes.link}>
              Leagues
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid
              component={Link}
              to='/countries'
              item
              className={classes.link}
            >
              Nations
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid component={Link} to='/agents' item className={classes.link}>
              Free Agents
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid component={Link} to='/drafts' item className={classes.link}>
              Drafts
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}
