import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import TokenButton from './layout/TokenButton';
import Search from './layout/Search';

import { connect } from 'react-redux';
import {
  getRosters,
  insertPlayerToRoster,
  deletePlayerFromRoster,
  moduleName as rostersModule,
} from '../store/duck/rosters';
import {
  getPlayers,
  moduleName as playerssModule,
} from '../store/duck/players';
import { confirmError, moduleName as authModule } from '../store/duck/auth';

const queryString = require('query-string');

const styles = (theme) => ({
  clubHead: {
    backgroundColor: '#fff',
    height: '80px',
  },
  mainHead: {
    backgroundColor: '#000',
  },
  headText: {
    color: '#fff',
  },
  teamlogo: {
    height: 60,
  },
  tblRow: {
    backgroundColor: '#fff',
    '&:nth-of-type(odd)': {
      backgroundColor: '#e5e5e5',
    },
  },
  dialogBtn: {
    margin: 10,
  },
  centerDiv: {
    textAlign: 'center',
  },
  endDiv: {
    marginRight: 50,
    textAlign: 'end',
  },
});

export class Roster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setOpen: false,
      nameClub: '',
      year: 0,
      clubId: 0,
      playerId: 0,
      clubs: [],
      clubCount: 0,
    };
  }

  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    this.setState({ year: parsed.year });
    this.season = parsed.year + '-' + (parsed.year - 1999);
    this.props.getRosters(parsed.year, parsed.league);
  }

  insertPlayerToRoster = (player_id) => {
    this.props.insertPlayerToRoster(
      this.state.year,
      player_id,
      this.state.clubId,
      () => this.setState({ setOpen: false })
    );
  };

  deletePlayerFromRoster = (championship_id) => {
    this.props.deletePlayerFromRoster(championship_id, this.props.history);
  };

  hideSearchComponent = () => {
    this.setState({ setOpen: false });
  };

  incrementCounter = () =>
    this.setState({ clubsCount: this.state.clubsCount + 1 });

  render() {
    const { classes, rosters, clubs, confirmError } = this.props;

    const token = window.localStorage.getItem('token');

    if (!rosters) {
      return <h1>WAIT!</h1>;
    }
    if (!clubs) {
      return <h1>WAIT!</h1>;
    }

    return (
      <React.Fragment>
        <Dialog
          fullWidth={true}
          onClose={() => this.setState({ setOpen: false })}
          aria-labelledby='simple-dialog-title'
          open={this.state.setOpen}
        >
          <DialogTitle>Add player to</DialogTitle>
          <DialogContent>
            <h5>{this.state.nameClub}</h5>
            <Search clickOnPlayer={this.insertPlayerToRoster} />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => this.setState({ setOpen: false })}
              className={classes.dialogBtn}
              variant='contained'
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <Container>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant='h4'>Season {this.season}</Typography>
              <Typography variant='h4'>Clubs {this.clubsCount}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Button variant='contained'>Print</Button>
            </Grid>
          </Grid>
          {clubs.map((club, key) => (
            <div key={key} style={{ paddingTop: 40 }}>
              <Grid container>
                <Grid
                  container
                  display='flex'
                  alignItems='center'
                  className={classes.clubHead}
                >
                  <Grid item xs={3}>
                    <div className={classes.centerDiv}>
                      <img
                        className={classes.teamlogo}
                        src={club.logo}
                        alt=''
                      />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography width='36%' variant='h5'>
                      <Box fontWeight={500}>{club.club}</Box>
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <div className={classes.endDiv}>
                      <TokenButton>
                        <Button
                          variant='contained'
                          onClick={() => {
                            this.setState({
                              setOpen: true,
                              nameClub: club.club,
                              clubId: club.club_id,
                            });
                          }}
                        >
                          Add
                        </Button>
                      </TokenButton>
                    </div>
                  </Grid>
                </Grid>
                <Table>
                  <TableHead>
                    <TableRow className={classes.mainHead}>
                      <TableCell align='center'>
                        <Typography className={classes.headText}>
                          Pos
                        </Typography>
                      </TableCell>
                      <TableCell align='center'>
                        <Typography className={classes.headText}>
                          Number
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography className={classes.headText}>
                          Name
                        </Typography>
                      </TableCell>
                      <TableCell align='center'>
                        <Typography className={classes.headText}>
                          Country
                        </Typography>
                      </TableCell>
                      <TableCell align='center'>
                        <Typography className={classes.headText}>
                          Born
                        </Typography>
                      </TableCell>
                      <TableCell align='center'>
                        <Typography className={classes.headText}>
                          Age
                        </Typography>
                      </TableCell>
                      <TableCell align='center'>
                        <Typography className={classes.headText}>
                          Height
                        </Typography>
                      </TableCell>
                      <TableCell align='center'>
                        <Typography className={classes.headText}>
                          Weight
                        </Typography>
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rosters.map((roster) =>
                      roster.club_id === club.club_id ? (
                        <TableRow className={classes.tblRow}>
                          <TableCell align='center'>{roster.pos}</TableCell>
                          <TableCell align='center'>{roster.num}</TableCell>
                          <TableCell width='60%'>
                            <Link
                              component={RouterLink}
                              to={'/players/' + roster.pl_id}
                            >
                              {roster.first_name} {roster.last_name}
                            </Link>
                          </TableCell>
                          <TableCell align='center'>
                            <img alt='' src={roster.flag} width='30'></img>
                          </TableCell>
                          <TableCell align='center'>{roster.birth}</TableCell>
                          <TableCell align='center'>{roster.age}</TableCell>
                          <TableCell align='center'>{roster.height}</TableCell>
                          <TableCell align='center'>{roster.weight}</TableCell>
                          <TableCell align='center'>
                            <TokenButton>
                              <Button
                                variant='contained'
                                color='secondary'
                                onClick={() =>
                                  this.deletePlayerFromRoster(
                                    roster.championship_id
                                  )
                                }
                              >
                                Delete
                              </Button>
                            </TokenButton>
                          </TableCell>
                        </TableRow>
                      ) : null
                    )}
                  </TableBody>
                </Table>
              </Grid>
            </div>
          ))}
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  clubs: state[rostersModule].clubsByRoster,
  rosters: state[rostersModule].rosters,
  players: state[playerssModule].players,
});

export default connect(mapStateToProps, {
  getPlayers,
  getRosters,
  insertPlayerToRoster,
  deletePlayerFromRoster,
  confirmError,
})(withStyles(styles)(Roster));
