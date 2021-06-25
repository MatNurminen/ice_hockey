import { getLeagues } from '../../store/actions/leagueActions';
import { connect } from 'react-redux';
import Leagues from './leagues';

const mapStateToProps = (state) => ({
  leagues: state.leagueReducer.leagues,
});

export default connect(mapStateToProps, { getLeagues })(Leagues);
