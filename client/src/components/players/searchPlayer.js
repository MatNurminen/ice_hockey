import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPlayersForSearch } from '../../store/actions/playersActions';

import './players.css';

class SearchPlayer extends Component {
  state = {
    search: '',
    classUl: 'list-group d-none',
  };

  onChange = (e) => {
    this.setState({ search: e.target.value });
    if (this.state.search.length > 1) {
      this.setState({ classUl: 'list-group' });
    } else {
      this.setState({ classUl: 'list-group d-none' });
    }
  };

  componentDidMount() {
    this.props.getPlayersForSearch();
  }

  render() {
    const { players } = this.props;
    const { search } = this.state;

    if (!players) {
      return <h1> </h1>;
    }

    const filteredPlayers = players.filter((player) => {
      return player.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div>
        <div className='input-group'>
          <input
            className='form-control'
            type='text'
            placeholder='Search'
            aria-label='Search'
            onChange={this.onChange}
          ></input>
          <div className='input-group-append'>
            <span className='input-group-text bg-success text-white'>
              Search
            </span>
          </div>
        </div>
        <ul className={this.state.classUl} id='overlay'>
          {filteredPlayers.map((player) => (
            <li key={player.player_id} className='list-group-item'>
              <a href={'/players/' + player.player_id}>
                <img id='imgsearch' src={player.flag} alt='' />
                {player.name} ({player.birth}) ({player.pos})
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.playersReducer.players,
});

export default connect(mapStateToProps, { getPlayersForSearch })(SearchPlayer);
