import React, { useEffect } from 'react';
import styles from './styles';
import { Link as RouterLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import ChampsStats from '../../layout/champsStats';
import LastSeason from '../../layout/lastSeason';

export const PlayerDetail = (props) => {
  const { playerById, getPlayer, classes } = props;
  const player_id = props.match.params.player_id;

  useEffect(() => {
    getPlayer(player_id);
  }, [getPlayer, player_id]);

  if (!playerById) {
    return <h1>WAIT!</h1>;
  }

  const player = playerById[0];
  console.log('test', player);

  return (
    <Container>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Card className={classes.cardHeight}>
                  <CardContent className={classes.player}>
                    <Grid container direction='row' alignItems='center'>
                      <Grid item md={2}>
                        <img
                          className='mx-auto d-block'
                          width='60px'
                          src={player.flag}
                          alt=''
                        ></img>
                      </Grid>
                      <Grid item md={1}>
                        <Typography variant='h5'>
                          <Box fontWeight='fontWeightMedium'>{player.num}</Box>
                        </Typography>
                      </Grid>
                      <Grid item md={9}>
                        <Typography variant='h4' align='left'>
                          <Box fontWeight='fontWeightMedium'>
                            {player.first_name} {player.last_name}
                          </Box>
                        </Typography>
                      </Grid>
                      <Grid item md={12}>
                        <LastSeason />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardContent className={classes.flagBox}>
                    <img
                      className={classes.imgFlag}
                      src={player.jersey}
                      alt=''
                    ></img>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <TableContainer component={Paper}>
                  <Table size='small'>
                    <TableHead className={classes.tableHead}>
                      <TableRow>
                        <TableCell className={classes.tableCell}>
                          <Typography variant='h6'>Player Facts</Typography>
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Box className={classes.boxTable}>Nation</Box>
                        </TableCell>
                        <TableCell>
                          <Box className={classes.boxTblItem}>
                            {player.name}
                          </Box>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Box className={classes.boxTable}>Position</Box>
                        </TableCell>
                        <TableCell>
                          <Box className={classes.boxTblItem}>{player.pos}</Box>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Box className={classes.boxTable}>Year of Birth</Box>
                        </TableCell>
                        <TableCell>
                          <Box className={classes.boxTblItem}>
                            {player.birth}
                          </Box>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Box className={classes.boxTable}>Age</Box>
                        </TableCell>
                        <TableCell>
                          <Box className={classes.boxTblItem}>{player.age}</Box>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Box className={classes.boxTable}>Height</Box>
                        </TableCell>
                        <TableCell>
                          <Box className={classes.boxTblItem}>
                            {player.height}
                          </Box>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Box className={classes.boxTable}>Weight</Box>
                        </TableCell>
                        <TableCell>
                          <Box className={classes.boxTblItem}>
                            {player.weight}
                          </Box>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Box className={classes.boxTable}>Draft</Box>
                        </TableCell>
                        <TableCell>
                          <Box className={classes.boxTblItem}>
                            <img width='20' alt='' src={player.draftlogo} />
                            {player.draftclub}
                          </Box>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Box className={classes.boxTable}>Retires</Box>
                        </TableCell>
                        <TableCell>
                          <Box className={classes.boxTblItem}>
                            {player.end_year}
                          </Box>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Container>
          <Container>
            <Box mt={2}>
              <Grid
                container
                direction='row'
                justify='flex-end'
                alignItems='center'
              >
                <Button
                  className={classes.btn}
                  variant='contained'
                  startIcon={<EditIcon />}
                  size='small'
                  component={RouterLink}
                  to={'/players/' + props.match.params.player_id + '/edit'}
                >
                  Edit
                </Button>
              </Grid>
            </Box>
          </Container>
          <hr className={classes.hr} />
          <ChampsStats />
        </Paper>
      </div>
    </Container>
  );
};

export default styles(PlayerDetail);
