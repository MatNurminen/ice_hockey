import React, { useEffect, useCallback, useState } from 'react';
import styles from './styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ClubsByLeague from './layout/clubsByLeague';
import TableByLeague from './layout/tableByLeague';
import StatsByLeague from './layout/statsByLeague';
import CountriesByLeague from './layout/countriesByLeague';
import FactsByLeague from './layout/factsByLeague';
import ComparisonByLeague from './layout/comparisonByLeague';
import AllTimeByLeague from './layout/statsAllTimeByLeague';
import PerSeasonByLeague from './layout/statsPerSeasonByLeague';
import ChampsByLeague from './layout/champsByLeague';

export const League = (props) => {
  const _ = require('underscore');
  const { classes, table, seasons, league, getSeasons, getLeague } = props;
  const defaultSeason = 2020;
  const [season, setSeason] = useState(defaultSeason);
  const defaultLeague_id = props.match.params.league_id;

  useEffect(() => {
    getSeasons();
    getLeague(defaultLeague_id, defaultSeason);
  }, [defaultLeague_id, getSeasons, getLeague]);

  const seasonChange = useCallback(
    (e) => {
      setSeason(e.target.value);
      getLeague(defaultLeague_id, e.target.value);
    },
    [getLeague, defaultLeague_id]
  );

  const oneLeague = _.groupBy(league, (value) => {
    return value.name + '#' + value.s_name;
  });

  if (!seasons) {
    return <h1>WAIT!</h1>;
  }
  if (!league) {
    return <h1>WAIT!</h1>;
  }

  return (
    <Container>
      <Paper>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {Object.entries(oneLeague).map(([league, logo]) => {
                return (
                  <div>
                    <Grid item xs={12}>
                      <Typography variant='h5'>
                        <Box fontWeight={700}>{league.split('#')[0]}</Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant='h6'>
                        {league.split('#')[1]}
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      direction='row'
                      justify='flex-start'
                      alignItems='center'
                    >
                      <Grid item xs={2}>
                        <Typography>Logo History:</Typography>
                      </Grid>
                      <Grid item xs={10}>
                        <Grid
                          container
                          direction='row'
                          justify='flex-start'
                          alignItems='center'
                        >
                          {logo.map((logoImg) => (
                            <Grid item xs={3}>
                              <Typography>
                                {logoImg.logo_start} - {logoImg.logo_end}
                                <img
                                  className={classes.logo}
                                  key={logoImg.id}
                                  src={logoImg.logo}
                                  alt=''
                                />
                              </Typography>
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                );
              })}
            </Grid>
            <Grid item xs={12}>
              <hr />
            </Grid>

            <Grid item xs={12}>
              <Typography>
                <Box fontWeight={700}>TEAMS</Box>
              </Typography>
              <ClubsByLeague />
              <hr className={classes.hr} />
              <Container>
                <Card>
                  <CardContent className={classes.rowHeader}>
                    <Typography className={classes.headText}>
                      <Box fontWeight='fontWeightBold'>
                        {season}-{season + 1} Standings
                      </Box>
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <FormControl className={classes.formControl}>
                      <Select
                        labelId='season-label'
                        defaultValue={2020}
                        value={season}
                        onChange={seasonChange}
                      >
                        {seasons.map((season, id) => (
                          <MenuItem key={id} value={season.year}>
                            {season.season}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </CardContent>
                </Card>
              </Container>
              <TableByLeague table={table} />
              <hr className={classes.hr} />
              <StatsByLeague season={season} league_id={defaultLeague_id} />
              <hr className={classes.hr} />
              <CountriesByLeague />
              <hr className={classes.hr} />
              <ComparisonByLeague />
              <hr className={classes.hr} />
              <FactsByLeague />
              <hr className={classes.hr} />
              <AllTimeByLeague />
              <hr className={classes.hr} />
              <PerSeasonByLeague />
              <hr className={classes.hr} />
              <ChampsByLeague />
            </Grid>
          </Grid>
        </div>
      </Paper>
    </Container>
  );
};

export default styles(League);
