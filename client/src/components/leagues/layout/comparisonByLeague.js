import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';

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
});

export class ComparisonByLeague extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comparison: [],
    };
  }

  render() {
    const { comparison, classes } = this.props;

    if (!comparison) {
      return <h1>WAIT!</h1>;
    }

    return (
      <Container>
        <Grid item xs={12} className={classes.rowHeader}>
          <Typography className={classes.headText}>
            <Box fontWeight='fontWeightBold'>Team Comparison</Box>
          </Typography>
        </Grid>
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
                    <Box fontWeight='fontWeightBold'>Team</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>Players</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>avg height</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>avg weight</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>avg age</Box>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {comparison.map((comp, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Link component={RouterLink} to={'/clubs/' + comp.club_id}>
                      {comp.club}
                    </Link>
                  </TableCell>
                  <TableCell>{comp.players}</TableCell>
                  <TableCell>{comp.av_height} cm</TableCell>
                  <TableCell>{comp.av_weight} kg</TableCell>
                  <TableCell>{comp.av_age}</TableCell>
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
  comparison: state.leagueReducer.comparisonByLeague,
});

export default connect(mapStateToProps)(withStyles(styles)(ComparisonByLeague));
