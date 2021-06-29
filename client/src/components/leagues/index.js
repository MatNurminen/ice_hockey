import {
  getLeagues,
  moduleName as leaguesModule,
} from '../../store/duck/leagues';
import { connect } from 'react-redux';
import Leagues from './leagues';

const mapStateToProps = (state) => ({
  leagues: state[leaguesModule].leagues,
});

export default connect(mapStateToProps, { getLeagues })(Leagues);
