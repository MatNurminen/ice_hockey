import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

import styles from '../styles';

const Header = ({ country, clubs, classes }) => {
  return (
    <Container>
      <Grid
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Grid item xs>
          <Typography variant='h5'>
            <Box my={4} fontWeight='fontWeightBold'>
              By nation: {country}
            </Box>
          </Typography>
        </Grid>
        {/* <Grid item xs>
          <FormControl className={classes.formControl}>
            <InputLabel id='season-label'>Country</InputLabel>
            <Select
              labelId='season-label'
              //defaultValue={1}
              //value={country}
              //onChange={countryChange}
            >
              {countries.map((country) => (
                <MenuItem key={country.country_id} value={country.country_id}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid> */}
      </Grid>
      <hr />
      <Grid
        container
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
      >
        {/* <Grid item xs>
          <FormControl className={classes.formControl}>
            <InputLabel id='season-label'>Club</InputLabel>
            <Select
              labelId='season-label'
              //defaultValue={1}
              //value={country}
              //onChange={countryChange}
            >
              {clubs.map((club) => (
                <MenuItem key={club.club_id} value={club.club_id}>
                  {club.club}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid> */}
        {/* <Grid item xs>
          <FormControl className={classes.formControl}>
            <InputLabel id='season-label'>Country</InputLabel>
            <Select
              labelId='season-label'
              //defaultValue={1}
              //value={country}
              //onChange={countryChange}
            >
              {countries.map((country) => (
                <MenuItem key={country.country_id} value={country.country_id}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default styles(Header);
