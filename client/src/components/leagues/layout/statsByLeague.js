import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  rowHeader: {
    backgroundColor: '#0b3548',
  },
  tableHead: {
    backgroundColor: '#ca3136',
  },
  headText: {
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  btn: {
    backgroundColor: '#00a651',
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    '&:hover': {
      background: '#118442',
    },
  },
});
export class StatsByLeague extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [],
    };
  }

  render() {
    const { table, classes } = this.props;

    if (!table) {
      return <h1>WAIT!</h1>;
    }

    return (
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Card>
              <CardContent className={classes.rowHeader}>
                <Typography className={classes.headText}>
                  <Box fontWeight='fontWeightBold'>2020-2021 Player Stats</Box>
                </Typography>
              </CardContent>
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
                        <Box fontWeight='fontWeightBold'>Player</Box>
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
                  {table.map((tbl, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{tbl.club}</TableCell>
                      <TableCell></TableCell>
                      <TableCell>{tbl.points}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
            <Box mt={2}>
              <Button className={classes.btn} variant='contained' fullWidth>
                Show more
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent className={classes.rowHeader}>
                <Typography className={classes.headText}>
                  <Box fontWeight='fontWeightBold'>
                    2020-2021 Goaltending Stats
                  </Box>
                </Typography>
              </CardContent>
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
                        <Box fontWeight='fontWeightBold'>Player</Box>
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.headText}>
                        <Box fontWeight='fontWeightBold'>GP</Box>
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.headText}>
                        <Box fontWeight='fontWeightBold'>MM</Box>
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {table.map((tbl, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{tbl.club}</TableCell>
                      <TableCell></TableCell>
                      <TableCell>{tbl.points}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
            <Box mt={2}>
              <Button className={classes.btn} variant='contained' fullWidth>
                Show more
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  table: state.leagueReducer.tableByLeague,
});

export default connect(mapStateToProps)(withStyles(styles)(StatsByLeague));
