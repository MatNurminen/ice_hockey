import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { getSeasons } from '../../store/actions/seasonActions';
import { getCountries } from '../../store/actions/countryActions';
import { getFreeAgents } from '../../store/actions/playersActions';

const styles = (theme) => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 120,
  },
  tableHead: {
    backgroundColor: '#0b3548',
  },
  headText: {
    color: '#ffffff',
  },
});

export class FreeAgents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      freeagents: [],
      seasons: [],
      countries: [],
      season: 2020,
      country: 1,
    };
    //this.countryChange = this.countryChange.bind(this);
  }

  componentDidMount() {
    this.props.getSeasons();
    this.props.getCountries();
    this.props.getFreeAgents(this.state.season, this.state.country);
  }

  seasonChange = (e) => {
    this.setState({ season: e.target.value });
    this.props.getFreeAgents(e.target.value, this.state.country);
  };

  countryChange = (e) => {
    this.setState({ country: e.target.value });
    this.props.getFreeAgents(this.state.season, e.target.value);
  };

  render() {
    const {
      freeagents,
      season,
      country,
      seasons,
      countries,
      classes,
    } = this.props;

    if (!seasons) {
      return <h1>WAIT!</h1>;
    }
    if (!countries) {
      return <h1>WAIT!</h1>;
    }
    if (!freeagents) {
      return <h1>WAIT!</h1>;
    }

    return (
      <Container>
        <Typography variant='h3'>Free Agents</Typography>
        <TableContainer component={Paper}>
          <FormControl className={classes.formControl}>
            <InputLabel id='season-label'>Season</InputLabel>
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
          <FormControl className={classes.formControl}>
            <InputLabel id='season-label'>Country</InputLabel>
            <Select
              labelId='season-label'
              //id="demo-simple-select"
              defaultValue={1}
              value={country}
              onChange={this.countryChange}
            >
              {countries.map((country) => (
                <MenuItem key={country.country_id} value={country.country_id}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Table aria-label='simple table'>
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell align='center'>
                  <Typography className={classes.headText}>Position</Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>#</Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>Flag</Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>Born</Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>Height</Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>Weight</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {freeagents.map((agent) => (
                <TableRow key={agent.id}>
                  <TableCell align='center'>{agent.pos}</TableCell>
                  <TableCell>{agent.num}</TableCell>
                  <TableCell
                    component={Link}
                    to={'/players/' + agent.player_id}
                  >
                    {agent.first_name} {agent.last_name}
                  </TableCell>
                  <TableCell>
                    <img alt='' src={agent.flag} width='30'></img>
                  </TableCell>
                  <TableCell>{agent.birth}</TableCell>
                  <TableCell>{agent.height}</TableCell>
                  <TableCell>{agent.weight}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  seasons: state.seasonReducer.seasons,
  countries: state.countryReducer.countries,
  freeagents: state.playersReducer.freeagents,
});

export default connect(mapStateToProps, {
  getSeasons,
  getCountries,
  getFreeAgents,
})(withStyles(styles)(FreeAgents));
