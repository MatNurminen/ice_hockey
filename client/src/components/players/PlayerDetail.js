import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
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
import { getPlayer } from '../../store/actions/playersActions';
import ChampsStats from '../players/layout/champsStats';
import LastSeason from '../players/layout/lastSeason';
import Buttons from '../players/layout/buttons';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  player: {
    backgroundColor: '#0b3548',
    color: '#fff',
  },
  tableHead: {
    backgroundColor: '#0b3548',
  },
  tableCell: {
    color: '#fff',
  },
  boxTable: {
    fontStyle: 'italic',
    fontSize: 16,
  },
  boxTblItem: {
    fontSize: 16,
    fontWeight: 600,
  },
  redHeader: {
    backgroundColor: '#ca3136',
  },
  boxRedItem: {
    fontSize: 14,
    fontWeight: 600,
  },
  cardHeight: {
    height: '100%',
  },
  imgFlag: {
    height: theme.spacing(15),
    width: 'auto',
  },
  hr: {
    marginTop: '20px',
    marginBottom: '20px',
    borderTop: '0.5px',
  },
});

export class playerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerById: [],
    };
  }

  componentDidMount() {
    const player_id = this.props.match.params.player_id;
    this.props.getPlayer(player_id);
  }

  render() {
    const { playerById, classes } = this.props;

    if (!playerById) {
      return <h1>WAIT!</h1>;
    }

    const player = playerById[0];

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
                            src={'../' + player.flag}
                            alt=''
                          ></img>
                        </Grid>
                        <Grid item md={1}>
                          <Typography variant='h5'>
                            <Box fontWeight='fontWeightMedium'>
                              {player.num}
                            </Box>
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
                        src={'../' + player.jersey}
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
                            <Box className={classes.boxTblItem}>
                              {player.pos}
                            </Box>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Box className={classes.boxTable}>
                              Year of Birth
                            </Box>
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
                            <Box className={classes.boxTblItem}>
                              {player.age}
                            </Box>
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
            <Buttons />
            <hr className={classes.hr} />
            <ChampsStats />
          </Paper>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  playerById: state.playersReducer.playerById,
});

export default connect(mapStateToProps, { getPlayer })(
  withStyles(styles)(playerDetail)
);
