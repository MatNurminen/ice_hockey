import React, { Component } from 'react';
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
import Avatar from '@material-ui/core/Avatar';

const axios = require('axios');

const styles = (theme) => ({
  root: {
    flexGrow: 1,
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
  large: {
    backgroundColor: '#fff',
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  imgAvatar: {
    height: '80%',
  },
  gridMargin: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export class playerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: [],
    };
  }

  getPlayer = () => {
    const player_id = this.props.match.params.player_id;
    axios.get(`/api/players/${player_id}`).then((res) => {
      const player = res.data;
      const last = player.length - 1;
      this.setState({
        pl_first_name: player[last].first_name,
        pl_last_name: player[last].last_name,
        pl_num: player[last].num,
        pl_flag: player[last].flag,
        pl_jersey: player[last].jersey,
        pl_club: player[last].club,
        pl_sname: player[last].s_name,
        pl_season: player[last].season,
        pl_country: player[last].country_name,
        pl_pos: player[last].pos,
        pl_birth: player[last].birth,
        pl_age: player[last].age,
        pl_height: player[last].height,
        pl_weight: player[last].weight,
        pl_retires: player[last].end_year,
        player,
      });
    });
  };

  componentDidMount() {
    this.getPlayer();
  }

  render() {
    const player = this.state.player;
    const { classes } = this.props;
    return (
      <div>
        <Container>
          <Paper>
            <Grid container direction='row'>
              <Grid item className={classes.player} xs={6}>
                <Grid container spacing={3}>
                  <Grid item md={2}>
                    <img
                      className='mx-auto d-block'
                      width='60px'
                      src={'../' + this.state.pl_flag}
                      alt=''
                    ></img>
                  </Grid>
                  <Grid item md={1}>
                    <h2>{this.state.pl_num}</h2>
                  </Grid>
                  <Grid item>
                    <h2>
                      {this.state.pl_first_name} {this.state.pl_last_name}
                    </h2>
                  </Grid>
                  <Grid item xs={12}>
                    <h5>
                      {this.state.pl_club} / {this.state.pl_sname} -{' '}
                      {this.state.pl_season}-{this.state.pl_season - 1999}
                    </h5>
                  </Grid>
                  <Grid item container justify='center' my={5}>
                    <Avatar className={classes.large}>
                      <img
                        className={classes.imgAvatar}
                        src={'../' + this.state.pl_jersey}
                        alt=''
                      ></img>
                    </Avatar>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6}>
                <TableContainer component={Paper}>
                  <Table>
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
                          <Box fontStyle='italic'>Nation</Box>
                        </TableCell>
                        <TableCell>{this.state.pl_country}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Box fontStyle='italic'>Position</Box>
                        </TableCell>
                        <TableCell>{this.state.pl_pos}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Box fontStyle='italic'>Year of Birth</Box>
                        </TableCell>
                        <TableCell>{this.state.pl_birth}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Box fontStyle='italic'>Age</Box>
                        </TableCell>
                        <TableCell>{this.state.pl_age}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Box fontStyle='italic'>Height</Box>
                        </TableCell>
                        <TableCell>{this.state.pl_height}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Box fontStyle='italic'>Weight</Box>
                        </TableCell>
                        <TableCell>{this.state.pl_weight}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Box fontStyle='italic'>Retires</Box>
                        </TableCell>
                        <TableCell>{this.state.pl_retires}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Paper>
        </Container>

        <div className='container bg-white mt-4'>
          <div className='row'>
            <div className='col-6 text-white mainNav m-3 py-3'>
              <div className='row'>
                <div className='col-2'>
                  <img
                    className='mx-auto d-block'
                    width='60px'
                    src={'../' + this.state.pl_flag}
                    alt=''
                  ></img>
                </div>
                <div className='col-1'>
                  <h2>{this.state.pl_num}</h2>
                </div>
                <div className='col-9'>
                  <h2>
                    {this.state.pl_first_name} {this.state.pl_last_name}
                  </h2>
                </div>
              </div>

              <h5 className='mt-2'>
                {this.state.pl_club} / {this.state.pl_sname} -{' '}
                {this.state.pl_season}-{this.state.pl_season - 1999}
              </h5>
              <img
                className='mx-auto d-block'
                width='120px'
                src={'../' + this.state.pl_jersey}
                alt=''
              ></img>
            </div>

            <div className='col-5 mt-3'>
              <div className='text-white mainNav'>
                <h6 className='font-weight-bold my-0 py-3 pl-2'>
                  Player Facts
                </h6>
              </div>
              <table className='table table-bordered mb-4'>
                <tbody className='h6'>
                  <tr>
                    <th className='font-weight-normal font-italic col-5'>
                      Nation
                    </th>
                    <td>{this.state.pl_country}</td>
                  </tr>
                  <tr>
                    <th className='font-weight-normal font-italic'>Position</th>
                    <td>{this.state.pl_pos}</td>
                  </tr>
                  <tr>
                    <th className='font-weight-normal font-italic'>
                      Year of Birth
                    </th>
                    <td>{this.state.pl_birth}</td>
                  </tr>
                  <tr>
                    <th className='font-weight-normal font-italic'>Age</th>
                    <td>{this.state.pl_age}</td>
                  </tr>
                  <tr>
                    <th className='font-weight-normal font-italic'>Height</th>
                    <td>{this.state.pl_height}</td>
                  </tr>
                  <tr>
                    <th className='font-weight-normal font-italic'>Weight</th>
                    <td>{this.state.pl_weight}</td>
                  </tr>
                  <tr>
                    <th className='font-weight-normal font-italic'>Retires</th>
                    <td>{this.state.pl_retires}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className='text-white mainNav'>
            <h6 className='font-weight-bold my-0 py-3 pl-2'>
              Player Statistics
            </h6>
          </div>
          <table className='table table-striped table-bordered mb-4'>
            <thead className='adminNav h6 text-white'>
              <tr>
                <th className='col-2'>Season</th>
                <th className='col-1 text-center'>Age</th>
                <th className='col-4'>Team</th>
                <th className='col-2'>League</th>
                <th className='col-2 text-center'>Goals</th>
              </tr>
            </thead>
            <tbody>
              {player.map((details, idx) => {
                return (
                  <tr key={idx}>
                    <td>
                      {details.season} - {details.season - 1999}
                    </td>
                    <td className='text-center'>{details.age}</td>
                    <td>{details.club}</td>
                    <td>{details.s_name}</td>
                    <td className='text-center'>{details.goals}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(playerDetail);
