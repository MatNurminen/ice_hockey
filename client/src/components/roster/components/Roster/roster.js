import React, { useEffect, useState, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './styles';
import Link from '@material-ui/core/Link';
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
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import TokenButton from '../../../layout/wrappers/TokenButton';
import Search from '../../../layout/Search';

const queryString = require('query-string');

const playerFormaterByRoster = (players, rosterClubId) => {
  return players
    .filter((f) => f.club_id === rosterClubId)
    .sort((a, b) => a.pos_num - b.pos_num);
};

export const Roster = (props) => {
  const { classes, rosters, clubs, getRosters, deletePlayerFromRoster } = props;
  const parsed = queryString.parse(props.location.search);
  const season = parsed.year + '-' + (parsed.year - 1999);
  const year = parsed.year;
  const [club, setClub] = useState({});

  useEffect(() => {
    getRosters(parsed.year, parsed.league);
  }, [parsed.year, parsed.league, getRosters]);

  const insertPlayerToRoster = useCallback(
    (player_id) => {
      props.insertPlayerToRoster(year, player_id, club.id, () => setClub({}));
    },
    [year, club.id, setClub, props]
  );

  if (!rosters) {
    return <h1>WAIT!</h1>;
  }
  if (!clubs) {
    return <h1>WAIT!</h1>;
  }

  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        onClose={() => setClub({})}
        aria-labelledby='simple-dialog-title'
        open={club.id}
      >
        <DialogTitle>Add player to</DialogTitle>
        <DialogContent>
          <h5>{club.name}</h5>
          <Search clickOnPlayer={insertPlayerToRoster} />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setClub({})}
            className={classes.dialogBtn}
            variant='contained'
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant='h4'>Season {season}</Typography>
            <Typography variant='h4'>Clubs {clubs.length}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Button variant='contained'>Print</Button>
          </Grid>
        </Grid>
        {clubs.map((club, key) => (
          <div key={key} style={{ paddingTop: 40 }}>
            <Grid container>
              <Grid
                container
                display='flex'
                alignItems='center'
                className={classes.clubHead}
              >
                <Grid item xs={3}>
                  <div className={classes.centerDiv}>
                    <img className={classes.teamlogo} src={club.logo} alt='' />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <Typography width='36%' variant='h5'>
                    <Box fontWeight={500}>{club.club}</Box>
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <div className={classes.endDiv}>
                    <TokenButton>
                      <Button
                        variant='contained'
                        onClick={() => {
                          setClub({ name: club.club, id: club.club_id });
                        }}
                      >
                        Add
                      </Button>
                    </TokenButton>
                  </div>
                </Grid>
              </Grid>
              <Table>
                <TableHead>
                  <TableRow className={classes.mainHead}>
                    <TableCell align='center'>
                      <Typography className={classes.headText}>Pos</Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <Typography className={classes.headText}>#</Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <Typography className={classes.headText}>N</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.headText}>Name</Typography>
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell align='center'>
                      <Typography className={classes.headText}>Age</Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <Typography className={classes.headText}>Born</Typography>
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
                  {playerFormaterByRoster(rosters, club.club_id).map(
                    (roster) => {
                      return (
                        <TableRow className={classes.tblRow}>
                          <TableCell align='center'>{roster.pos}</TableCell>
                          <TableCell align='center'>{roster.num}</TableCell>
                          <TableCell align='center'>
                            <img alt='' src={roster.flag} width='30'></img>
                          </TableCell>
                          <TableCell width='60%'>
                            <Link
                              component={RouterLink}
                              to={'/players/' + roster.pl_id}
                            >
                              {roster.first_name} {roster.last_name}
                            </Link>
                          </TableCell>
                          <TableCell align='center'>
                            <img alt='' src={roster.draftlogo} width='30'></img>
                          </TableCell>
                          <TableCell align='center'>{roster.age}</TableCell>
                          <TableCell align='center'>{roster.birth}</TableCell>
                          <TableCell align='center'>{roster.height}</TableCell>
                          <TableCell align='center'>{roster.weight}</TableCell>
                          <TableCell align='center'>
                            <TokenButton>
                              <Button
                                variant='contained'
                                color='secondary'
                                onClick={() =>
                                  deletePlayerFromRoster(roster.championship_id)
                                }
                              >
                                Delete
                              </Button>
                            </TokenButton>
                          </TableCell>
                        </TableRow>
                      );
                    }
                  )}
                </TableBody>
              </Table>
            </Grid>
          </div>
        ))}
      </Container>
    </React.Fragment>
  );
};

export default styles(Roster);
