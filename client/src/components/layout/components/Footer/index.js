import React from 'react';
import styles from './styles';
//import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const gridItems = [
  { label: 'Stats', path: '/stats' },
  { label: 'Teams', path: '/teams' },
  { label: 'Leagues', path: '/leagues' },
  { label: 'Nations', path: '/countries' },
  { label: 'Free Agents', path: '/freeagents' },
  { label: 'Drafts', path: '/drafts' },
];

function Footer({ classes }) {
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
              {/* <Button component={RouterLink} to='/'> */}
              <Button to='/'>
                <img
                  className={classes.logo}
                  alt='logo'
                  src='/img/b_logo.png'
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {gridItems.map((item, key) => (
          <Grid key={key} item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              {/* <Grid
                component={RouterLink}
                to={item.path}
                item
                className={classes.link}
              > */}
              <Grid to={item.path} item className={classes.link}>
                {item.label}
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </footer>
  );
}

export default styles(Footer);
