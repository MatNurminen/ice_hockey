import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import { withStyles } from '@material-ui/core/styles';
import { getLeague } from '../../store/actions/leagueActions';
import { getSeasons } from '../../store/actions/seasonActions';
import ClubsByLeague from '../leagues/layout/clubsByLeague';
import TableByLeague from '../leagues/layout/tableByLeague';
import StatsByLeague from '../leagues/layout/statsByLeague';
import CountriesByLeague from '../leagues/layout/countriesByLeague';
import FactsByLeague from '../leagues/layout/factsByLeague';
import ComparisonByLeague from '../leagues/layout/comparisonByLeague';
import AllTimeByLeague from '../leagues/layout/statsAllTimeByLeague';
import PerSeasonByLeague from '../leagues/layout/statsPerSeasonByLeague';

const _ = require('underscore');

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  logo: {
    width: 80,
  },
  rowHeader: {
    backgroundColor: '#0b3548',
  },
  headText: {
    color: '#ffffff',
    textTransform: 'uppercase',
  },
});

export class League extends Component {
  constructor(props) {
    super(props);
    this.state = {
      league: [],
      seasons: [],
      season: 2020,
    };
  }
  componentDidMount() {
    this.props.getSeasons();
    this.props.getLeague(this.props.match.params.league_id, this.state.season);
  }

  seasonChange = (e) => {
    this.setState({ season: e.target.value });
    this.props.getLeague(this.props.match.params.league_id, e.target.value);
  };

  render() {
    const { seasons, season, league, classes } = this.props;
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
          <hr />
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
                <hr />
                <Container>
                  <Card>
                    <CardContent className={classes.rowHeader}>
                      <Typography className={classes.headText}>
                        <Box fontWeight='fontWeightBold'>
                          {this.state.season}-{this.state.season + 1} Standings
                        </Box>
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <FormControl className={classes.formControl}>
                        <Select
                          labelId='season-label'
                          defaultValue={2020}
                          value={season}
                          onChange={this.seasonChange}
                        >
                          {seasons.map((season) => (
                            <MenuItem key={this.id} value={season.year}>
                              {season.season}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </CardContent>
                  </Card>
                </Container>
                <TableByLeague />
                <hr />
                <StatsByLeague
                  season={this.state.season}
                  league_id={this.props.match.params.league_id}
                />
                <hr />
                <CountriesByLeague />
                <hr />
                <ComparisonByLeague />
                <hr />
                <FactsByLeague />
                <hr />
                <AllTimeByLeague />
                <hr />
                <PerSeasonByLeague />
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  seasons: state.seasonReducer.seasons,
  league: state.leagueReducer.league,
});

export default connect(mapStateToProps, { getLeague, getSeasons })(
  withStyles(styles)(League)
);
