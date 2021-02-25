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
import { getCountry } from '../../store/actions/countryActions';
import Chart from './chart';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  img: {
    width: '80%',
  },
  item: {
    backgroundColor: '#778899',
  },
  tableHead: {
    backgroundColor: '#0b3548',
  },
  headText: {
    color: '#ffffff',
  },
  jerseyAva: {
    display: 'flex',
  },
});

export class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [],
    };
  }

  componentDidMount() {
    const country_id = this.props.match.params.country_id;
    this.props.getCountry(country_id);
  }

  render() {
    const { country, classes } = this.props;

    if (!country) {
      return <h1>WAIT!</h1>;
    }

    return (
      <Container>
        <Paper>
          <hr />
          <div className={classes.root}>
            {country.map((onecountry) => (
              <Grid container direction='row' justify='space-evenly'>
                <Grid align='center' item sm={6}>
                  <Grid alignItems='center' container direction='row'>
                    <Grid align='center' item xs={2}>
                      <img
                        className={classes.img}
                        src={'../' + onecountry.flag}
                        alt=''
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant='h4'>
                        <Box fontWeight='fontWeightBold'>{onecountry.name}</Box>
                      </Typography>
                    </Grid>
                    <Grid align='center' item xs={2}>
                      <img
                        className={classes.img}
                        src={'../' + onecountry.jersey}
                        alt=''
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction='row'
                  alignItems='center'
                  sm={6}
                  xs={12}
                >
                  <TableContainer component={Paper}>
                    <Table aria-label='simple table' size='small'>
                      <TableHead className={classes.tableHead}>
                        <TableRow>
                          <TableCell>
                            <Typography className={classes.headText}>
                              Database Stats - {onecountry.name}
                            </Typography>
                          </TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableCell>Players in database</TableCell>
                        <TableCell>{onecountry.country}</TableCell>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
            ))}
          </div>
          <hr />
          <Chart />
        </Paper>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  country: state.countryReducer.country,
});

export default connect(mapStateToProps, { getCountry })(
  withStyles(styles)(Country)
);
