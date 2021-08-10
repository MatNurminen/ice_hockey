import {
  getLeagues,
  getLeague,
  moduleName as leaguesModule,
} from '../../../../store/duck/leagues';
import {
  getSeasons,
  moduleName as seasonsModule,
} from '../../../../store/duck/seasons';
import {
  getClubsBySeasonAndLeague,
  moduleName as champsModule,
} from '../../../../store/duck/champs';
import {
  getValidClubs,
  moduleName as clubsModule,
} from '../../../../store/duck/clubs';
import { connect } from 'react-redux';
import EditChamp from './editChamp';

const mapStateToProps = (state) => ({
  leagues: state[leaguesModule].leagues,
  clubsByLeague: state[leaguesModule].clubsByLeague,
  seasons: state[seasonsModule].seasons,
  clubs: state[champsModule].clubs,
  validclubs: state[clubsModule].validclubs,
});

export default connect(mapStateToProps, {
  getLeagues,
  getLeague,
  getSeasons,
  getClubsBySeasonAndLeague,
  getValidClubs,
})(EditChamp);
