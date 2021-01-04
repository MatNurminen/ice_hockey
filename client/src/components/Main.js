import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import LeagueForMain from './leagues/leaguesForMain';
import MainCards from './layout/mainCards';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Main() {
  const classes = useStyles();

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
