import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import {
  getGoaltending,
  getDefensemen,
  getForwards,
} from '../../../store/selectors/clubStatsSelector';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  rowHeader: {
    backgroundColor: '#0b3548',
    padding: '10px',
  },
  tableHead: {
    backgroundColor: '#ca3136',
  },
  headText: {
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  rowPosition: {
    backgroundColor: '#8abed2',
    padding: '5px',
  },
});

export class ClubRoster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goaltending: [],
      defensemen: [],
      forwards: [],
    };
  }

  render() {
    const { goaltending, defensemen, forwards, classes } = this.props;

    if (!goaltending) {
      return <h1>WAIT!</h1>;
    }

    return (
      <Container>
        <Card>
          <Table size='small'>
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>#</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>N</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>Player</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>A</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>Born</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>HT</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>WT</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>GP</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>G</Box>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className={classes.rowPosition} colSpan={9}>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>GOALTENDERS</Box>
                  </Typography>
                </TableCell>
              </TableRow>
              {goaltending.map((pl, index) => (
                <TableRow key={index}>
                  <TableCell>{pl.num}</TableCell>
                  <TableCell align='center'>
                    <img alt='' src={'/' + pl.flag} width='25'></img>
                  </TableCell>
                  <TableCell component={Link} to={'/players/' + pl.player_id}>
                    {pl.first_name} {pl.last_name}
                  </TableCell>
                  <TableCell>{pl.age}</TableCell>
                  <TableCell>{pl.birth}</TableCell>
                  <TableCell>{pl.height}</TableCell>
                  <TableCell>{pl.weight}</TableCell>
                  <TableCell>{pl.games}</TableCell>
                  <TableCell>{pl.goals}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell className={classes.rowPosition} colSpan={9}>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>DEFENSEMEN</Box>
                  </Typography>
                </TableCell>
              </TableRow>
              {defensemen.map((pl, index) => (
                <TableRow key={index}>
                  <TableCell>{pl.num}</TableCell>
                  <TableCell align='center'>
                    <img alt='' src={'/' + pl.flag} width='25'></img>
                  </TableCell>
                  <TableCell component={Link} to={'/players/' + pl.player_id}>
                    {pl.first_name} {pl.last_name}
                  </TableCell>
                  <TableCell>{pl.age}</TableCell>
                  <TableCell>{pl.birth}</TableCell>
                  <TableCell>{pl.height}</TableCell>
                  <TableCell>{pl.weight}</TableCell>
                  <TableCell>{pl.games}</TableCell>
                  <TableCell>{pl.goals}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell className={classes.rowPosition} colSpan={9}>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>FORWARDS</Box>
                  </Typography>
                </TableCell>
              </TableRow>
              {forwards.map((pl, index) => (
                <TableRow key={index}>
                  <TableCell>{pl.num}</TableCell>
                  <TableCell align='center'>
                    <img alt='' src={'/' + pl.flag} width='25'></img>
                  </TableCell>
                  <TableCell component={Link} to={'/players/' + pl.player_id}>
                    {pl.first_name} {pl.last_name}
                  </TableCell>
                  <TableCell>{pl.age}</TableCell>
                  <TableCell>{pl.birth}</TableCell>
                  <TableCell>{pl.height}</TableCell>
                  <TableCell>{pl.weight}</TableCell>
                  <TableCell>{pl.games}</TableCell>
                  <TableCell>{pl.goals}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  goaltending: getGoaltending(state),
  defensemen: getDefensemen(state),
  forwards: getForwards(state),
});

export default connect(mapStateToProps)(withStyles(styles)(ClubRoster));
