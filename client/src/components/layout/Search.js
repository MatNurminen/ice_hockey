import React from 'react';
import { connect } from 'react-redux';

import { getSearchPlayer } from '../../store/actions/searchActions';

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPlayer: [],
    };
  }
  componentDidMount() {
    const strSearch = 'Sergei';
    this.props.getSearchPlayer(strSearch);
  }

  render() {
    const { searchPlayer } = this.props;

    if (!searchPlayer) {
      return <h1>WAIT!</h1>;
    }

    return (
      <React.Fragment>
        <h1>SEARCH</h1>
        <ul>
          {searchPlayer.map((player) => (
            <li>{player.last_name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  searchPlayer: state.searchReducer.searchPlayer,
});

export default connect(mapStateToProps, {
  getSearchPlayer,
})(Search);
