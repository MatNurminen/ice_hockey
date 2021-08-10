import {
  getPlayer,
  moduleName as playersModule,
} from '../../../../store/duck/players';
import { connect } from 'react-redux';
import PlayerDetail from './playerDetail';

const mapStateToProps = (state) => ({
  playerById: state[playersModule].playerById,
});

export default connect(mapStateToProps, { getPlayer })(PlayerDetail);
