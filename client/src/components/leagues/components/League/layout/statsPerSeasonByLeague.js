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
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import {
  getForwardsPerSeason,
  getDefensemenPerSeason,
  getGoaltendingPerSeason,
} from '../../../../..//store/selectors/leagueStatsSelector';

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
  flag: {
    width: '22px',
    marginRight: '10px',
  },
  hr: {
    marginTop: '20px',
    marginBottom: '20px',
  },
});
export class PerSeasonByLeague extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forwards: [],
      defensemen: [],
      goaltending: [],
    };
  }

  render() {
    const { forwards, defensemen, goaltending, classes } = this.props;

    if (!forwards) {
      return <h1>WAIT!</h1>;
    }

    return (
      <div>
        <Container>
          <Grid item xs={12}>
            <Card>
              <CardContent className={classes.rowHeader}>
                <Typography className={classes.headText}>
                  <Box fontWeight='fontWeightBold'>
                    League All-Time Forwards Stats Per Season
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
                        <Box fontWeight='fontWeightBold'>Season</Box>
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.headText}>
                        <Box fontWeight='fontWeightBold'>Club</Box>
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
                  {forwards.map((stat, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <img className={classes.flag} src={stat.flag} alt='' />
                        <Link
                          component={RouterLink}
                          to={'/players/' + stat.player_id}
                        >
                          {stat.first_name} {stat.last_name} ({stat.pos})
                        </Link>
                      </TableCell>
                      <TableCell>
                        {stat.season}-{stat.season + 1}
                      </TableCell>
                      <TableCell>{stat.club}</TableCell>
                      <TableCell>{stat.games}</TableCell>
                      <TableCell>{stat.goals}</TableCell>
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
        </Container>
        <hr className={classes.hr} />
        <Container>
          <Grid item xs={12}>
            <Card>
              <CardContent className={classes.rowHeader}>
                <Typography className={classes.headText}>
                  <Box fontWeight='fontWeightBold'>
                    League All-Time Defensemen Stats Per Season
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
                        <Box fontWeight='fontWeightBold'>Season</Box>
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.headText}>
                        <Box fontWeight='fontWeightBold'>Club</Box>
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
                  {defensemen.map((stat, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <img className={classes.flag} src={stat.flag} alt='' />
                        <Link
                          component={RouterLink}
                          to={'/players/' + stat.player_id}
                        >
                          {stat.first_name} {stat.last_name} ({stat.pos})
                        </Link>
                      </TableCell>
                      <TableCell>
                        {stat.season}-{stat.season + 1}
                      </TableCell>
                      <TableCell>{stat.club}</TableCell>
                      <TableCell>{stat.games}</TableCell>
                      <TableCell>{stat.goals}</TableCell>
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
        </Container>
        <hr className={classes.hr} />
        <Container>
          <Grid item xs={12}>
            <Card>
              <CardContent className={classes.rowHeader}>
                <Typography className={classes.headText}>
                  <Box fontWeight='fontWeightBold'>
                    League All-Time Goaltending Stats Per Season
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
                        <Box fontWeight='fontWeightBold'>Season</Box>
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.headText}>
                        <Box fontWeight='fontWeightBold'>Club</Box>
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.headText}>
                        <Box fontWeight='fontWeightBold'>GP</Box>
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.headText}>
                        <Box fontWeight='fontWeightBold'>MG</Box>
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {goaltending.map((stat, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <img className={classes.flag} src={stat.flag} alt='' />
                        <Link
                          component={RouterLink}
                          to={'/players/' + stat.player_id}
                        >
                          {stat.first_name} {stat.last_name} ({stat.pos})
                        </Link>
                      </TableCell>
                      <TableCell>
                        {stat.season}-{stat.season + 1}
                      </TableCell>
                      <TableCell>{stat.club}</TableCell>
                      <TableCell>{stat.games}</TableCell>
                      <TableCell>{stat.goals}</TableCell>
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
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  forwards: getForwardsPerSeason(state),
  defensemen: getDefensemenPerSeason(state),
  goaltending: getGoaltendingPerSeason(state),
});

export default connect(mapStateToProps)(withStyles(styles)(PerSeasonByLeague));
