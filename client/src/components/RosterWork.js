import React from 'react';
// import SearchPlayer from './players/searchPlayer';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
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
//import TextField from '@material-ui/core/TextField';
//import Autocomplete from '@material-ui/lab/Autocomplete';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import Search from './layout/Search';

//import PersonAddIcon from '@material-ui/icons/PersonAdd';

import { connect } from 'react-redux';
import {
  getRosters,
  insertPlayerToRoster,
  deletePlayerFromRoster,
} from '../store/actions/rosterActions';
import { getPlayers } from '../store/actions/playersActions';

const _ = require('underscore');
const queryString = require('query-string');

const styles = (theme) => ({
  mainTable: {
    marginBottom: 40,
  },
  clubHead: {
    backgroundColor: '#fff',
  },
  mainHead: {
    backgroundColor: '#000',
  },
  headText: {
    color: '#fff',
  },
  teamlogo: {
    height: 60,
    //marginLeft: 50,
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
    };
  }

  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    this.setState({ year: parsed.year });
    this.season = parsed.year + '-' + (parsed.year - 1999);
    this.props.getRosters(parsed.year, parsed.league);
    //this.props.getPlayers();
    //console.log('TEST!!!');
  }

  insertPlayerToRoster = (player_id) => {
    //console.log(this.state.year, this.state.playerId, this.state.clubId);
    //this.props.insertPlayerToRoster(2020, 4493, 3);
    this.props.insertPlayerToRoster(
      this.state.year,
      player_id,
      this.state.clubId,
      () => this.setState({ setOpen: false })
      //this.props.history
    );
    //this.componentDidMount();

    //this.props.history.push('/rosters?league=1&year=2020');
    //this.componentDidMount();
  };

  deletePlayerFromRoster = (championship_id) => {
    this.props.deletePlayerFromRoster(championship_id, this.props.history);
  };

  hideSearchComponent = () => {
    this.setState({ setOpen: false });
  };

  render() {
    const { classes, rosters } = this.props;
    const clubs = _.groupBy(rosters, (value) => {
      return value.club + '#' + value.logo + '#' + value.club_id;
    });
    if (!rosters) {
      return <h1>WAIT!</h1>;
    }
    // if (!players) {
    //   return <h1>WAIT!</h1>;
    // }

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
            {/* <Button
              onClick={() => this.insertPlayerToRoster()}
              className={classes.dialogBtn}
              variant='contained'
            >
              Add player to roster
            </Button> */}
          </DialogActions>
        </Dialog>
        <Container>
          <Grid container>
            <Grid item xs={6}>
              <img src={rosters.league_logo} alt='' width='80'></img>
              <Typography variant='h4'>Season {this.season}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Button variant='contained'>Print</Button>
            </Grid>
          </Grid>
          {Object.entries(clubs).map(([club, player]) => {
            return (
              <Table className={classes.mainTable}>
                <TableHead>
                  <TableRow className={classes.clubHead}>
                    <TableCell width='8%'></TableCell>
                    <TableCell width='8%' align='center'>
                      <img
                        className={classes.teamlogo}
                        src={club.split('#')[1]}
                        alt=''
                      />
                    </TableCell>
                    <TableCell>
                      <Typography width='36%' variant='h5'>
                        <Box fontWeight={500}>{club.split('#')[0]}</Box>
                      </Typography>
                    </TableCell>
                    <TableCell width='8%'></TableCell>
                    <TableCell width='8%'></TableCell>
                    <TableCell width='8%'></TableCell>
                    <TableCell width='8%'></TableCell>
                    <TableCell width='8%'></TableCell>
                    <TableCell width='8%' align='right'>
                      <Button
                        variant='contained'
                        onClick={() =>
                          this.setState({
                            setOpen: true,
                            nameClub: club.split('#')[0],
                            clubId: club.split('#')[2],
                          })
                        }
                      >
                        Add
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.mainHead}>
                    <TableCell align='center'>
                      <Typography className={classes.headText}>Pos</Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <Typography className={classes.headText}>
                        Number
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.headText}>Name</Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <Typography className={classes.headText}>
                        Country
                      </Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <Typography className={classes.headText}>Born</Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <Typography className={classes.headText}>Age</Typography>
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
                  {player.map((playerName) => (
                    <TableRow className={classes.tblRow} key={playerName.pl_id}>
                      <TableCell align='center'>{playerName.pos}</TableCell>
                      <TableCell align='center'>{playerName.num}</TableCell>
                      <TableCell
                        width='60%'
                        component={Link}
                        to={'/players/' + playerName.pl_id}
                      >
                        {playerName.first_name} {playerName.last_name}
                      </TableCell>
                      <TableCell align='center'>
                        <img alt='' src={playerName.flag} width='30'></img>
                      </TableCell>
                      <TableCell align='center'>{playerName.birth}</TableCell>
                      <TableCell align='center'>{playerName.age}</TableCell>
                      <TableCell align='center'>{playerName.height}</TableCell>
                      <TableCell align='center'>{playerName.weight}</TableCell>
                      <TableCell align='center'>
                        <Button
                          variant='contained'
                          color='secondary'
                          onClick={() =>
                            this.deletePlayerFromRoster(
                              playerName.championship_id
                            )
                          }
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            );
          })}
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  rosters: state.rosterReducer.rosters,
  players: state.playersReducer.players,
});

export default connect(mapStateToProps, {
  getPlayers,
  getRosters,
  insertPlayerToRoster,
  deletePlayerFromRoster,
})(withStyles(styles)(Roster));
