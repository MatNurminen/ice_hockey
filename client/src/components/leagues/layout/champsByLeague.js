import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  headText: {
    textTransform: 'uppercase',
  },
});

export class ChampsByLeague extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //clubs: [],
    };
  }
  render() {
    const { classes } = this.props;

    return (
      <Container>
        <Typography className={classes.headText}>
          <Box fontWeight={700}>List of Champions</Box>
        </Typography>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  //clubs: state.leagueReducer.clubsByLeague,
});

export default connect(mapStateToProps)(withStyles(styles)(ChampsByLeague));
