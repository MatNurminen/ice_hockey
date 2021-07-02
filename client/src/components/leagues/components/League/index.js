import {
  getLeague,
  moduleName as leaguesModule,
} from '../../../../store/duck/leagues';
import {
  getSeasons,
  moduleName as seasonsModule,
} from '../../../../store/duck/seasons';
import { connect } from 'react-redux';
import League from './league';

const mapStateToProps = (state) => ({
  league: state[leaguesModule].league,
  table: state[leaguesModule].tableByLeague,
  seasons: state[seasonsModule].seasons,
});

export default connect(mapStateToProps, { getLeague, getSeasons })(League);
