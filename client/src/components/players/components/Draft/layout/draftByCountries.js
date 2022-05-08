import { useContext } from 'react';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const styles = (theme) => ({
  headText: {
    textTransform: 'uppercase',
  },
  flag: {
    width: '22px',
    marginRight: '10px',
  },
  txt: {
    marginRight: '6px',
  },
  list: {
    [theme.breakpoints.up('md')]: {
      height: '200px',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
  },
});

export function DraftByCountries({ countries, classes }) {
  return (
    <Container>
      <Box mt={4}>
        <Typography className={classes.headText}>
          <Box fontWeight='fontWeightBold'>Draft selections by nation</Box>
        </Typography>
        <List dense={true}>
          <Grid item xs={12} sm={6} md={4} className={classes.list}>
            {countries.map((country) => (
              <ListItem>
                <img className={classes.flag} src={country.flag} alt='' />
                <Link
                  component={RouterLink}
                  to={'/drafts/country/' + country.country_id}
                >
                  <div className={classes.txt}>
                    {country.name} {country.count} plrs
                  </div>
                </Link>
              </ListItem>
            ))}
          </Grid>
        </List>
      </Box>
      <hr />
    </Container>
  );
}

export default withStyles(styles)(DraftByCountries);
