import React from 'react';
import { connect } from 'react-redux';
import styles from './styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { moduleName as playersModule } from '../../../store/duck/players';

export const ChampsStats = (props) => {
  const { champsStats, classes } = props;

  if (!champsStats) {
    return <h1>WAIT!</h1>;
  }

  return (
    <Container>
      <Card>
        <Table size='small'>
          <TableHead className={classes.rowHeader}>
            <TableRow>
              <TableCell colSpan={6}>
                <Typography className={classes.headText}>
                  <Box fontWeight='fontWeightBold'>Player statistics</Box>
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell>
                <Typography className={classes.headText}>
                  <Box fontWeight='fontWeightBold'>Season</Box>
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.headText}>
                  <Box fontWeight='fontWeightBold'>Team</Box>
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.headText}>
                  <Box fontWeight='fontWeightBold'>League</Box>
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.headText}>
                  <Box fontWeight='fontWeightBold'>Age</Box>
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.headText}>
                  <Box fontWeight='fontWeightBold'>gp</Box>
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.headText}>
                  <Box fontWeight='fontWeightBold'>g</Box>
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {champsStats.map((tbl, index) => (
              <TableRow key={index}>
                <TableCell>
                  {tbl.season}-{tbl.season + 1}
                </TableCell>
                <TableCell>{tbl.club}</TableCell>
                <TableCell>{tbl.s_name}</TableCell>
                <TableCell>{tbl.age}</TableCell>
                <TableCell>{tbl.games}</TableCell>
                <TableCell>{tbl.goals}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  champsStats: state[playersModule].champsStats,
});

export default connect(mapStateToProps)(styles(ChampsStats));
