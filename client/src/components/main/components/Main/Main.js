import React from 'react';
import styles from './styles';

import LeagueForMain from '../../../leagues/leaguesForMain';
import MainCards from './layout/MainCards';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function Main({ classes }) {
  return (
    <Container>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <MainCards />
          </Grid>
          <Grid item xs={12} sm={4}>
            <LeagueForMain />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default styles(Main);
