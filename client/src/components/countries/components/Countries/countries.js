import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { Button, Typography } from '@material-ui/core';

//import doc from '../../../reports/countries';
//<Button onClick={() => doc.save('table.pdf')}>Print</Button>

function Countries({ countries, getCountries }) {
  useEffect(() => {
    getCountries();
  }, [getCountries]);

  if (!countries) {
    return <h1>WAIT!</h1>;
  }

  return (
    <Container>
      <Typography variant='h4'>Nations</Typography>
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
                <TableCell>
                  <Link
                    component={RouterLink}
                    to={'countries/' + country.country_id}
                  >
                    {country.name}
                  </Link>
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

export default Countries;
