import React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

import {
  getSearchPlayer,
  moduleName as searchModule,
} from '../../store/duck/search';

const styles = (theme) => ({
  iconBox: {
    //padding: '5px',
  },
  txtField: {
    width: '100%',
  },
});

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPlayer: [],
      value: '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value && this.state.value.length > 2) {
      const strSearch = this.state.value;
      this.props.getSearchPlayer(strSearch);
    } else if (
      prevState.value !== this.state.value &&
      this.state.value.length <= 2
    ) {
      this.props.getSearchPlayer();
    }
  }

  render() {
    const { searchPlayer, classes } = this.props;

    return (
      <>
        <TextField
          className={classes.txtField}
          variant='outlined'
          onChange={(event) => this.setState({ value: event.target.value })}
          InputProps={{
            endAdornment: (
              <Box className={classes.iconBox}>
                <SearchIcon />
              </Box>
            ),
          }}
        />

        <List component='nav'>
          {searchPlayer &&
            searchPlayer.map((player) => (
              <ListItem
                button
                onClick={() => this.props.clickOnPlayer(player.player_id)}
              >
                <ListItemText
                  primary={
                    player.first_name +
                    ' ' +
                    player.last_name +
                    ` (${player.birth})` +
                    ` (${player.pos})`
                  }
                />
              </ListItem>
            ))}
        </List>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  searchPlayer: state[searchModule].searchPlayer,
});

export default connect(mapStateToProps, { getSearchPlayer })(
  withStyles(styles)(Search)
);
