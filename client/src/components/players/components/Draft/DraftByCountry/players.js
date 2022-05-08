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

import styles from '../styles';

const Players = ({ players, classes }) => {
  return (
    <Container>
      <Grid item xs={12} className={classes.rowHeader}>
        <Typography className={classes.headText}>
          <Box fontWeight='fontWeightBold'>Drafted players</Box>
        </Typography>
      </Grid>
      <Card>
        <Table size='small'>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell>
                <Typography className={classes.headText}>
                  <Box fontWeight='fontWeightBold'>Team</Box>
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.headText}>
                  <Box fontWeight='fontWeightBold'>Pos</Box>
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.headText}>
                  <Box fontWeight='fontWeightBold'>N</Box>
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.headText}>
                  <Box fontWeight='fontWeightBold'>Players</Box>
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.headText}>
                  <Box fontWeight='fontWeightBold'>Seasons</Box>
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
              <TableCell>
                <Typography className={classes.headText}>
                  <Box fontWeight='fontWeightBold'>Status</Box>
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player, index) => (
              <TableRow className={classes.tblRow} key={index}>
                <TableCell>{player.club}</TableCell>
                <TableCell>{player.pos}</TableCell>
                <TableCell>
                  <img className={classes.flag} src={player.flag} alt='' />
                </TableCell>
                <TableCell>
                  <Link
                    component={RouterLink}
                    to={'/players/' + player.player_id}
                  >
                    {player.first_name} {player.last_name}
                  </Link>
                </TableCell>
                <TableCell>{player.seasons}</TableCell>
                <TableCell>{player.games}</TableCell>
                <TableCell>{player.goals}</TableCell>
                <TableCell>
                  {player.end_year && <>Retired in {player.end_year}</>}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Container>
  );
};

export default styles(Players);
