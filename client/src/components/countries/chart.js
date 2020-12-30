import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Pie } from 'react-chartjs-2';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { getSeasons } from '../../store/actions/seasonActions';
import { getCountryByLeague } from '../../store/actions/countryActions';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  tableHead: {
    backgroundColor: '#0b3548',
  },
  headText: {
    color: '#ffffff',
  },
  totalRow: {
    backgroundColor: '#ca3136',
    color: '#ffffff',
  },
});

// const data = {
//   labels: ['Red', 'Blue', 'Yellow'],
//   datasets: [
//     {
//       data: [300, 50, 100],
//       backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//       hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//     },
//   ],
// };

export class CountryChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: [],
      countrybyleague: [],
      season: 2020,
      country_id: window.location.href.substr(
        window.location.href.lastIndexOf('/') + 1
      ),
    };
  }

  componentDidMount() {
    this.props.getSeasons();
    this.props.getCountryByLeague(this.state.season, this.state.country_id);
  }

  seasonChange = (e) => {
    this.props.getCountryByLeague(e.target.value, this.state.country_id);
  };

  render() {
    const { seasons, countrybyleague, season, classes } = this.props;
    let playersTotal = 0;

    if (!seasons) {
      return <h1>WAIT!</h1>;
    }

    if (!countrybyleague) {
      return <h1>WAIT!</h1>;
    }

    let forlabels = countrybyleague.map((plcount) => {
      return plcount.s_name;
    });

    let fordata = countrybyleague.map((plcount) => {
      return plcount.players;
    });

    const data = {
      labels: forlabels,
      datasets: [
        {
          data: fordata,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };

    return (
      <Container>
        <div className={classes.root}>
          <Grid container direction='row' justify='space-evenly'>
            <Grid align='center' item sm={4} xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id='season-label'>Season</InputLabel>
                <Select
                  labelId='season-label'
                  //id="demo-simple-select"
                  defaultValue={2020}
                  value={season}
                  //onChange={handleChange}
                  onChange={this.seasonChange}
                >
                  {seasons.map((season) => (
                    <MenuItem key={this.id} value={season.year}>
                      {season.season}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TableContainer component={Paper}>
                <Table aria-label='simple table' size='small'>
                  <TableHead className={classes.tableHead}>
                    <TableRow>
                      <TableCell>
                        <Typography className={classes.headText}>
                          League
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography align='center' className={classes.headText}>
                          Players
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  {countrybyleague.map((plcount) => {
                    playersTotal = playersTotal + plcount.players / 1;
                    return (
                      <TableBody>
                        <TableCell>{plcount.s_name}</TableCell>
                        <TableCell align='center'>{plcount.players}</TableCell>
                      </TableBody>
                    );
                  })}
                  <TableRow className={classes.totalRow}>
                    <TableCell>Total</TableCell>
                    <TableCell align='right'>{playersTotal}</TableCell>
                  </TableRow>
                  <TableRow className={classes.totalRow}>
                    <TableCell>Free agents</TableCell>
                    <TableCell align='right'></TableCell>
                  </TableRow>
                </Table>
              </TableContainer>
            </Grid>
            <Grid align='center' item sm={7} xs={12}>
              <Pie data={data} />
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  seasons: state.seasonReducer.seasons,
  countrybyleague: state.countryReducer.countrybyleague,
});

export default connect(mapStateToProps, { getSeasons, getCountryByLeague })(
  withStyles(styles)(CountryChart)
);
