import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
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
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  logo: {
    width: '20%',
  },
});

function Leagues({ classes, leagues, getLeagues }) {
  useEffect(() => {
    getLeagues();
  }, [getLeagues]);

  if (!leagues) {
    return <h1>WAIT!</h1>;
  }

  return (
    <Container>
      <Typography variant='h4'>Leagues</Typography>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center' width='30%'>
                Logo
              </TableCell>
              <TableCell width='30%'>Name</TableCell>
              <TableCell width='30%'>Short Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leagues.map((league) => (
              <TableRow key={league.league_id}>
                <TableCell align='center'>
                  <img className={classes.logo} alt='' src={league.logo} />
                </TableCell>
                <TableCell>
                  <Link
                    component={RouterLink}
                    to={'leagues/' + league.league_id}
                  >
                    {league.name}
                  </Link>
                </TableCell>
                <TableCell>{league.s_name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default withStyles(styles)(Leagues);
