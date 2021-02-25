import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
//import { makeStyles } from '@material-ui/core/styles';

//import axios from 'axios';

import { getCountries } from '../../store/actions/countryActions';
import { Button, Typography } from '@material-ui/core';

import doc from '../../reports/countries';

/* // IT'S WORKING!
const useStyles = makeStyles({
  table: {
    width: 650,
  },
});

export default function GetLeagues() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  useEffect(() => {
    const GetData = async () => {
      const result = await axios('/leagues');
      setData(result.data);
    };
    GetData();
    //console.log(data);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Short Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((league) => (
            <TableRow key={league.league_id}>
              <TableCell>{league.name}</TableCell>
              <TableCell>{league.s_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
 */

export class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    this.props.getCountries();
  }

  render() {
    const { countries } = this.props;

    if (!countries) {
      return <h1>WAIT!</h1>;
    }

    return (
      <Container>
        <Typography variant='h4'>Nations</Typography>
        <Button onClick={() => doc.save('table.pdf')}>Print</Button>
        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Short Name</TableCell>
                <TableCell>Flag</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {countries.map((country) => (
                <TableRow key={country.country_id}>
                  <TableCell
                    component={Link}
                    to={'countries/' + country.country_id}
                  >
                    {country.name}
                  </TableCell>
                  <TableCell>{country.s_name}</TableCell>
                  <TableCell>
                    <img src={country.flag} alt='' width='40px' />
                  </TableCell>
                  <TableCell>
                    <Button variant='contained'>Edit</Button>
                  </TableCell>
                  <TableCell>
                    <Button variant='contained' color='secondary'>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  countries: state.countryReducer.countries,
});

export default connect(mapStateToProps, { getCountries })(Countries);
