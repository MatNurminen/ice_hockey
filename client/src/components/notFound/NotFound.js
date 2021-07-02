import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';

const styles = (theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: '#063950',
  },
  text: {
    color: '#fff',
  },
  media: {
    height: 300,
  },
});

function NotFound({ classes }) {
  return (
    <div className={classes.root}>
      <Container>
        <Grid container alignItems='center'>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <Typography className={classes.text} variant='h1'>
              <Box fontWeight='fontWeightBold'>404</Box>
            </Typography>
            <Typography className={classes.text} variant='h4'>
              Not found
            </Typography>
            <Typography className={classes.text}>
              The link is broken or the page has been moved.
            </Typography>
          </Grid>
          <Grid item sm={7} xs={0}>
            <CardMedia
              className={classes.media}
              image='/img/puck_spinning.gif'
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default withStyles(styles)(NotFound);
