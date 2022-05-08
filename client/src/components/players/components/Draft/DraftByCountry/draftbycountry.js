import React, { useEffect, useCallback, useState } from 'react';
import styles from '../styles';
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
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Header from './header';
import Players from './players';

export const DraftByCountry = (props) => {
  const { classes, draftPlayersByCountry, getDraftPlayersByCountry } = props;
  const country_id = props.match.params.country_id;

  useEffect(() => {
    getDraftPlayersByCountry(country_id);
  }, [getDraftPlayersByCountry, country_id]);

  if (!draftPlayersByCountry) {
    return <h1>WAIT!</h1>;
  }

  return (
    <>
      <Container>
        <Box mb={2}>
          <Typography variant='h4'>NHL Entry Draft</Typography>
        </Box>
        <TableContainer component={Paper}>
          <Header
            country={draftPlayersByCountry[0].name}
            //clubs={drafts.draftClubs}
          />
          <Players players={draftPlayersByCountry} />
          {/* <DraftByCountries countries={drafts.draftByCountries} />
          <DraftClubs clubs={drafts.draftClubs} /> */}
        </TableContainer>
      </Container>
    </>
  );
};

export default styles(DraftByCountry);
