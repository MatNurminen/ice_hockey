import React, { useEffect } from 'react';
import {
  getCountries,
  moduleName as countriesModule,
} from '../../../../store/duck/countries';
import {
  getPlayer,
  createPlayer,
  editPlayer,
  moduleName as playersModule,
} from '../../../../store/duck/players';
import { connect } from 'react-redux';
import PlayerForm from './playerForm';

const PlayerContainer = ({
  match,
  history,
  playerById,
  getPlayer,
  createPlayer,
  editPlayer,
  ...props
}) => {
  const { player_id } = match.params;
  const editedPlayer = player_id ? playerById : null;
  useEffect(() => {
    if (player_id && !playerById) {
      getPlayer(player_id);
    }
  }, [getPlayer, playerById, player_id]);

  const handleEditPlayer = (data) =>
    editPlayer(data, player_id, () => {
      const strUrl = window.location.pathname;
      const backUrl = strUrl.substr(0, strUrl.lastIndexOf('/') + 1);
      history.push(backUrl);
    });
  const handleCreatePlayer = (data) =>
    createPlayer(data, (newPlayer) => {
      history.push('/players/' + newPlayer[0].player_id);
    });
  return (
    <PlayerForm
      {...props}
      history={history}
      handleSubmit={player_id ? handleEditPlayer : handleCreatePlayer}
      playerData={editedPlayer ? editedPlayer[0] : null}
    />
  );
};

const mapStateToProps = (state) => ({
  countries: state[countriesModule].countries,
  playerById: state[playersModule].playerById,
});

export default connect(mapStateToProps, {
  createPlayer,
  editPlayer,
  getPlayer,
  getCountries,
})(PlayerContainer);
