import React from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getLeagues } from '../../store/actions/leagueActions';

const styles = (theme) => ({
  root: { margin: theme.spacing(2), textAlign: 'center' },
  progress: { margin: theme.spacing(2) },
  search: { marginLeft: theme.spacing(2) },
});
const useStyles = makeStyles(styles);

function Leagues({ leagues }) {
  const classes = useStyles();

  return (
    <Container>
      <Paper className={classes.root}>
        <TableContainer component={Paper}>
          {!leagues ? (
            <TableContainer component={Paper}>
              <Table aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Short Name</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
              <CircularProgress className={classes.progress} />
            </TableContainer>
          ) : (
            <Table aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Short Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {leagues.map((league) => (
                  <TableRow key={league.league_id}>
                    <TableCell component={Link} to='/'>
                      {league.name}
                    </TableCell>
                    <TableCell>{league.s_name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </Paper>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  leagues: state.leagueReducer.leagues,
});

const mapDispatchToProps = (dispatch) => ({
  getleagues: dispatch(getLeagues()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Leagues);
