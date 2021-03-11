import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import { getLeague } from '../../store/actions/leagueActions';

import ClubsByLeague from '../leagues/layout/clubsByLeague';

const _ = require('underscore');

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  logo: {
    width: 80,
  },
});

export class League extends Component {
  constructor(props) {
    super(props);
    this.state = {
      league: [],
    };
  }
  componentDidMount() {
    const league_id = this.props.match.params.league_id;
    this.props.getLeague(league_id);
  }
  render() {
    const { league, classes } = this.props;
    const oneLeague = _.groupBy(league, (value) => {
      return value.name + '#' + value.s_name;
    });

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
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  league: state.leagueReducer.league,
});

export default connect(mapStateToProps, { getLeague })(
  withStyles(styles)(League)
);
