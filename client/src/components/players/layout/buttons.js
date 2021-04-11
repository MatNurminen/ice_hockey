import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {},
});

export class ChampsStats extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Container>
        <Box mt={2}>
          <Grid
            container
            direction='row'
            justify='flex-end'
            alignItems='center'
          >
            <Grid item xs={1}>
              <Button variant='contained' color='primary'>
                Edit
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button variant='contained' color='secondary'>
                Delete
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }
}

export default withStyles(styles)(ChampsStats);
