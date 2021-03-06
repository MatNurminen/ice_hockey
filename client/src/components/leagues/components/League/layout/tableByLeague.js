import React, { Component } from 'react';
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
  },
  tableHead: {
    backgroundColor: '#ca3136',
  },
  headText: {
    color: '#ffffff',
    textTransform: 'uppercase',
  },
});

export class TableByLeague extends Component {
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
              {table.map((tbl, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Link component={RouterLink} to={'/clubs/' + tbl.club_id}>
                      {tbl.club}
                    </Link>
                  </TableCell>
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

export default withStyles(styles)(TableByLeague);
