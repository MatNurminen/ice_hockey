import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { moduleName as clubsModule } from '../../../store/duck/clubs';

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

export class ClubHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubhistory: [],
    };
  }

  render() {
    const { clubhistory, classes } = this.props;

    if (!clubhistory) {
      return <h1>WAIT!</h1>;
    }

    return (
      <Container>
        <Grid item xs={12} className={classes.rowHeader}>
          <Typography className={classes.headText}>
            <Box fontWeight='fontWeightBold'>TEAM HISTORY AND STANDINGS</Box>
          </Typography>
        </Grid>
        <Card>
          <Table size='small'>
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>Season</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>League</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>gp</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>w</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>t</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>l</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>gf</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>ga</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>+/-</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>tp</Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.headText}>
                    <Box fontWeight='fontWeightBold'>Postseason</Box>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clubhistory.map((tbl, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {tbl.season}-{tbl.season + 1}
                  </TableCell>
                  <TableCell>{tbl.name}</TableCell>
                  <TableCell>{tbl.games}</TableCell>
                  <TableCell>{tbl.wings}</TableCell>
                  <TableCell>{tbl.ties}</TableCell>
                  <TableCell>{tbl.losts}</TableCell>
                  <TableCell>{tbl.gf}</TableCell>
                  <TableCell>{tbl.ga}</TableCell>
                  <TableCell>{tbl.gdif}</TableCell>
                  <TableCell>{tbl.points}</TableCell>
                  <TableCell>{tbl.postseason}</TableCell>
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
  clubhistory: state[clubsModule].clubhistory,
});

export default connect(mapStateToProps)(withStyles(styles)(ClubHistory));
