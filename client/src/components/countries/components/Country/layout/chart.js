import React, { useEffect, useCallback } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
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
import {
  getSeasons,
  moduleName as seasonsModule,
} from '../../../../../store/duck/seasons';
import {
  getCountryByLeague,
  moduleName as countriesModule,
} from '../../../../../store/duck/countries';

export const CountryChart = (props) => {
  const {
    seasons,
    countrybyleague,
    season,
    classes,
    getCountryByLeague,
    getSeasons,
  } = props;
  const defaultSeason = 2020;
  const defaultCountry_id = window.location.href.substr(
    window.location.href.lastIndexOf('/') + 1
  );

  useEffect(() => {
    getSeasons();
    getCountryByLeague(defaultCountry_id, defaultSeason);
  }, [defaultCountry_id, getCountryByLeague, getSeasons]);

  const seasonChange = useCallback(
    (e) => {
      getCountryByLeague(defaultCountry_id, e.target.value);
    },
    [getCountryByLeague, defaultCountry_id]
  );

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

            <TableContainer className={classes.tblMargin} component={Paper}>
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
          <Grid
            className={classes.tblMargin}
            align='center'
            item
            sm={7}
            xs={12}
          >
            <Pie data={data} />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  seasons: state[seasonsModule].seasons,
  countrybyleague: state[countriesModule].countrybyleague,
});

export default connect(mapStateToProps, { getSeasons, getCountryByLeague })(
  styles(CountryChart)
);
