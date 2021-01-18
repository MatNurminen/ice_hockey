import React from 'react';
import { connect } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { getSearchPlayer } from '../../store/actions/searchActions';

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
    const { searchPlayer } = this.props;

    return (
      <>
        <h1>SEARCH</h1>
        <DebounceInput
          minLength={2}
          debounceTimeout={300}
          onChange={(event) => this.setState({ value: event.target.value })}
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
  searchPlayer: state.searchReducer.searchPlayer,
});

export default connect(mapStateToProps, {
  getSearchPlayer,
})(Search);
