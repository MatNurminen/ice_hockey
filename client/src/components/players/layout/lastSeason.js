import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { getLastSeason } from '../../../store/selectors/playersSelector';

export class LastSeason extends Component {
  render() {
    const { lastSeason } = this.props;

    if (!lastSeason) {
      return <h1>WAIT!</h1>;
    }

    return (
      <div>
        <Typography variant='body1' align='left'>
          <Box mt={1} ml={2}>
            {lastSeason[0].club} / {lastSeason[0].s_name} -{' '}
            {lastSeason[0].season.toString().substr(-2)}/
            {(lastSeason[0].season + 1).toString().substr(-2)}
          </Box>
        </Typography>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lastSeason: getLastSeason(state),
});

export default connect(mapStateToProps)(LastSeason);
