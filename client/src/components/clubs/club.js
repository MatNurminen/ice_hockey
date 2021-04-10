import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { getSeasons } from '../../store/actions/seasonActions';
import { getClub } from '../../store/actions/clubActions';
import ClubRoster from '../clubs/layout/clubRoster';
import ClubHistory from '../clubs/layout/clubHistory';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  paper: {
    padding: theme.spacing(2),
  },
  tableHead: {
    backgroundColor: '#0b3548',
  },
  tableCell: {
    color: '#fff',
  },
  rowHeader: {
    backgroundColor: '#0b3548',
  },
  headText: {
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  hr: {
    marginTop: '20px',
    marginBottom: '20px',
  },
});

export class Club extends Component {
  constructor(props) {
    super(props);
    this.state = {
      club: [],
      seasons: [],
      season: 2020,
    };
  }

  componentDidMount() {
    this.props.getSeasons();
    const club_id = this.props.match.params.club_id;
    this.props.getClub(club_id, this.state.season);
  }

  seasonChange = (e) => {
    this.setState({ season: e.target.value });
    this.props.getClub(this.props.match.params.club_id, e.target.value);
  };

  render() {
    const { seasons, season, club, classes } = this.props;

    if (!seasons) {
      return <h1>WAIT!</h1>;
    }
    if (!club) {
      return <h1>WAIT!</h1>;
    }

    return (
      <Container>
        <Paper>
          <Box pt={2}>
            <Container>
              {club.map((oneclub) => (
                <Paper className={classes.paper}>
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      <img width='80px' src={'..' + oneclub.logo} alt=''></img>
                      <Typography variant='h5'>
                        <Box mt={2} fontWeight='fontWeightBold'>
                          {oneclub.club}
                        </Box>
                      </Typography>
                      <Typography>
                        <Box mt={2} fontWeight='fontWeightBold'>
                          <Link
                            component={RouterLink}
                            to={'/leagues/' + oneclub.league_id}
                          >
                            {oneclub.s_name}
                          </Link>
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TableContainer component={Paper}>
                        <Table size='small'>
                          <TableHead className={classes.tableHead}>
                            <TableRow>
                              <TableCell className={classes.tableCell}>
                                <Typography variant='h6'>Team Facts</Typography>
                              </TableCell>
                              <TableCell></TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell>Plays in</TableCell>
                              <TableCell>
                                <Link
                                  component={RouterLink}
                                  to={'/leagues/' + oneclub.league_id}
                                >
                                  {oneclub.name}
                                </Link>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Started</TableCell>
                              <TableCell>{oneclub.start_year}</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Ended</TableCell>
                              <TableCell>{oneclub.end_year}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </Paper>
              ))}
            </Container>
            <hr className={classes.hr} />
            <Container>
              <Card>
                <CardContent className={classes.rowHeader}>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>
                      {this.state.season}-{this.state.season + 1} Roster and
                      Stats
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
            <ClubRoster />
            <hr className={classes.hr} />
            <ClubHistory />
            <hr className={classes.hr} />
          </Box>
        </Paper>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  seasons: state.seasonReducer.seasons,
  club: state.clubReducer.club,
});

export default connect(mapStateToProps, { getSeasons, getClub })(
  withStyles(styles)(Club)
);
