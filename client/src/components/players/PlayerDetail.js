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
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  player: {
    padding: theme.spacing(2),
    textAlign: 'left',
    backgroundColor: '#0b3548',
    color: '#fff',
    height: '100%',
  },
  large: {
    backgroundColor: '#fff',
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  imgAvatar: {
    height: '80%',
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
      <Container>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper className={classes.player}>
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
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
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
                          <Box className={classes.boxTable}>Nation</Box>
                        </TableCell>
                        <TableCell>
                          <Box className={classes.boxTblItem}>
                            {this.state.pl_country}
                          </Box>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Box className={classes.boxTable}>Position</Box>
                        </TableCell>
                        <TableCell>
                          <Box className={classes.boxTblItem}>
                            {this.state.pl_pos}
                          </Box>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Box className={classes.boxTable}>Year of Birth</Box>
                        </TableCell>
                        <TableCell>
                          <Box className={classes.boxTblItem}>
                            {this.state.pl_birth}
                          </Box>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Box className={classes.boxTable}>Age</Box>
                        </TableCell>
                        <TableCell>
                          <Box className={classes.boxTblItem}>
                            {this.state.pl_age}
                          </Box>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Box className={classes.boxTable}>Height</Box>
                        </TableCell>
                        <TableCell>
                          <Box className={classes.boxTblItem}>
                            {this.state.pl_height}
                          </Box>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Box className={classes.boxTable}>Weight</Box>
                        </TableCell>
                        <TableCell>
                          <Box className={classes.boxTblItem}>
                            {this.state.pl_weight}
                          </Box>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Box className={classes.boxTable}>Retires</Box>
                        </TableCell>
                        <TableCell>
                          <Box className={classes.boxTblItem}>
                            {this.state.pl_retires}
                          </Box>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell className={classes.tableCell}>
                      <Typography noWrap variant='h6'>
                        Player Statistics
                      </Typography>
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableHead className={classes.redHeader}>
                  <TableRow>
                    <TableCell className={classes.tableCell}>
                      <Typography
                        variant='overline'
                        className={classes.redTxtHeader}
                      >
                        <Box className={classes.boxRedItem}>Age</Box>
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <Typography
                        variant='overline'
                        className={classes.redTxtHeader}
                      >
                        <Box className={classes.boxRedItem}>Season</Box>
                      </Typography>
                    </TableCell>

                    <TableCell className={classes.tableCell}>
                      <Typography
                        variant='overline'
                        className={classes.redTxtHeader}
                      >
                        <Box className={classes.boxRedItem}>Team</Box>
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <Typography
                        variant='overline'
                        className={classes.redTxtHeader}
                      >
                        <Box className={classes.boxRedItem}>League</Box>
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <Typography
                        variant='overline'
                        className={classes.redTxtHeader}
                      >
                        <Box className={classes.boxRedItem}>Goals</Box>
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {player.map((details, idx) => {
                    return (
                      <TableRow key={idx}>
                        <TableCell width='10%'>{details.age}</TableCell>
                        <TableCell width='20%'>
                          {details.season} - {details.season - 1999}
                        </TableCell>
                        <TableCell width='30%'>{details.club}</TableCell>
                        <TableCell width='20%'>{details.s_name}</TableCell>
                        <TableCell width='20%'>{details.goals}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(playerDetail);
