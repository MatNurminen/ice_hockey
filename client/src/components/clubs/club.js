import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getClub } from '../../store/actions/clubActions';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  paper: {
    padding: theme.spacing(2),
  },
  tableHead: {
    backgroundColor: '#0b3548',
  },
  tableCell: {
    color: '#fff',
  },
});

export class Club extends Component {
  constructor(props) {
    super(props);
    this.state = {
      club: [],
    };
  }

  componentDidMount() {
    const club_id = this.props.match.params.club_id;
    this.props.getClub(club_id);
  }

  render() {
    const { club, classes } = this.props;

    if (!club) {
      return <h1>WAIT!</h1>;
    }

    return (
      <Container>
        <div className={classes.root}>
          {club.map((oneclub) => (
            <Paper className={classes.paper}>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <img width='80px' src={'..' + oneclub.logo} alt=''></img>
                  <Typography variant='h5'>
                    <Box mt={2} fontWeight='fontWeightBold'>
                      {oneclub.club}
                    </Box>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TableContainer>
                    <Table>
                      <TableHead className={classes.tableHead}>
                        <TableRow>
                          <TableCell className={classes.tableCell}>
                            <Typography variant='h6'>Team Facts</Typography>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  club: state.clubReducer.club,
});

export default connect(mapStateToProps, { getClub })(withStyles(styles)(Club));
