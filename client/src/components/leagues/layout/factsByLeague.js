import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
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
  getOldest,
  getTallest,
  getHeaviest,
  getYoungest,
  getShortest,
  getLightest,
} from '../../../store/selectors/leagueStatsSelector';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  rowHeader: {
    backgroundColor: '#0b3548',
    marginBottom: '10px',
    padding: '10px',
  },
  tableHead: {
    backgroundColor: '#ca3136',
  },
  headText: {
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  flag: {
    width: '22px',
    marginRight: '10px',
  },
});
export class FactsByLeague extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldest: [],
      tallest: [],
      heaviest: [],
      youngest: [],
      shortest: [],
      lightest: [],
    };
  }

  render() {
    const {
      oldest,
      tallest,
      heaviest,
      youngest,
      shortest,
      lightest,
      classes,
    } = this.props;

    if (!oldest) {
      return <h1>WAIT!</h1>;
    }

    return (
      <Container>
        <Grid item xs={12} className={classes.rowHeader}>
          <Typography className={classes.headText}>
            <Box fontWeight='fontWeightBold'>Interesting Facts</Box>
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card>
              <Table size='small'>
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>
                      <Typography className={classes.headText}>
                        <Box fontWeight='fontWeightBold'>Oldest</Box>
                      </Typography>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {oldest.map((stat, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <img
                          className={classes.flag}
                          src={'/' + stat.flag}
                          alt=''
                        />
                        {stat.first_name} {stat.last_name} ({stat.pos})
                      </TableCell>
                      <TableCell>{stat.birth}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <Table size='small'>
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>
                      <Typography className={classes.headText}>
                        <Box fontWeight='fontWeightBold'>Tallest</Box>
                      </Typography>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tallest.map((stat, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <img
                          className={classes.flag}
                          src={'/' + stat.flag}
                          alt=''
                        />
                        {stat.first_name} {stat.last_name} ({stat.pos})
                      </TableCell>
                      <TableCell>{stat.height} cm</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <Table size='small'>
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>
                      <Typography className={classes.headText}>
                        <Box fontWeight='fontWeightBold'>Heaviest</Box>
                      </Typography>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {heaviest.map((stat, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <img
                          className={classes.flag}
                          src={'/' + stat.flag}
                          alt=''
                        />
                        {stat.first_name} {stat.last_name} ({stat.pos})
                      </TableCell>
                      <TableCell>{stat.weight} kg</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <Table size='small'>
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>
                      <Typography className={classes.headText}>
                        <Box fontWeight='fontWeightBold'>Youngest</Box>
                      </Typography>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {youngest.map((stat, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <img
                          className={classes.flag}
                          src={'/' + stat.flag}
                          alt=''
                        />
                        {stat.first_name} {stat.last_name} ({stat.pos})
                      </TableCell>
                      <TableCell>{stat.birth}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <Table size='small'>
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>
                      <Typography className={classes.headText}>
                        <Box fontWeight='fontWeightBold'>Shortest</Box>
                      </Typography>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {shortest.map((stat, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <img
                          className={classes.flag}
                          src={'/' + stat.flag}
                          alt=''
                        />
                        {stat.first_name} {stat.last_name} ({stat.pos})
                      </TableCell>
                      <TableCell>{stat.height} cm</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <Table size='small'>
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>
                      <Typography className={classes.headText}>
                        <Box fontWeight='fontWeightBold'>Lightest</Box>
                      </Typography>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {lightest.map((stat, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <img
                          className={classes.flag}
                          src={'/' + stat.flag}
                          alt=''
                        />
                        {stat.first_name} {stat.last_name} ({stat.pos})
                      </TableCell>
                      <TableCell>{stat.weight} kg</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  //stats: state.leagueReducer.statsByLeague,
  oldest: getOldest(state),
  tallest: getTallest(state),
  heaviest: getHeaviest(state),
  youngest: getYoungest(state),
  shortest: getShortest(state),
  lightest: getLightest(state),
});

export default connect(mapStateToProps)(withStyles(styles)(FactsByLeague));
