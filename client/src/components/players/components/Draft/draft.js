import React, { useEffect, useCallback, useState } from 'react';
import styles from './styles';
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

import DraftByCountries from './layout/draftByCountries';
import DraftClubs from './layout/draftClubs';
import { CountryContext } from './layout/header';

export const Draft = (props) => {
  const { classes, drafts, getDraft } = props;

  //console.log('111', country);

  useEffect(() => {
    getDraft();
  }, [getDraft]);

  if (!drafts) {
    return <h1>WAIT!</h1>;
  }

  return (
    <>
      <Container>
        <Box mb={2}>
          <Typography variant='h4'>NHL Entry Draft</Typography>
        </Box>
        <TableContainer component={Paper}>
          <DraftByCountries countries={drafts.draftCountries} />
          <DraftClubs clubs={drafts.draftClubs} />
        </TableContainer>
      </Container>
    </>
  );
};

export default styles(Draft);
