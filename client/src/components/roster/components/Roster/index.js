import { connect } from 'react-redux';
import {
  getRosters,
  insertPlayerToRoster,
  deletePlayerFromRoster,
  moduleName as rostersModule,
} from '../../../../store/duck/rosters';
import {
  getPlayers,
  moduleName as playerssModule,
} from '../../../../store/duck/players';
import {
  confirmError,
  moduleName as authModule,
} from '../../../../store/duck/auth';
import Roster from './roster';

const mapStateToProps = (state) => ({
  error: state[authModule].error,
  clubs: state[rostersModule].clubsByRoster,
  rosters: state[rostersModule].rosters,
  players: state[playerssModule].players,
});

export default connect(mapStateToProps, {
  getPlayers,
  getRosters,
  insertPlayerToRoster,
  deletePlayerFromRoster,
  confirmError,
})(Roster);
