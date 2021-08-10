import React, { useEffect, useCallback, useState } from 'react';
import styles from './styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export const FreeAgents = (props) => {
  const defaultSeason = 2020;
  const [season, setSeason] = useState(defaultSeason);
  const defaultCountry = 1;
  const [country, setCountry] = useState(defaultCountry);
  const {
    classes,
    seasons,
    countries,
    freeagents,
    getSeasons,
    getCountries,
    getFreeAgents,
  } = props;

  useEffect(() => {
    getSeasons();
    getCountries();
    getFreeAgents(season, country);
  }, [getSeasons, getCountries, getFreeAgents, season, country]);

  const seasonChange = useCallback(
    (e) => {
      setSeason(e.target.value);
      getFreeAgents(e.target.value, country);
    },
    [getFreeAgents, country]
  );

  const countryChange = useCallback(
    (e) => {
      setCountry(e.target.value);
      getFreeAgents(season, e.target.value);
    },
    [getFreeAgents, season]
  );

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
            onChange={seasonChange}
          >
            {seasons.map((season, id) => (
              <MenuItem key={id} value={season.year}>
                {season.season}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id='season-label'>Country</InputLabel>
          <Select
            labelId='season-label'
            defaultValue={1}
            value={country}
            onChange={countryChange}
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
                <TableCell>
                  <Link
                    component={RouterLink}
                    to={'/players/' + agent.player_id}
                  >
                    {agent.first_name} {agent.last_name}
                  </Link>
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
};

export default styles(FreeAgents);
