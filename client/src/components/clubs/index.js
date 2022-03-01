import { connect } from 'react-redux';
import {
  getSeasons,
  moduleName as seasonsModule,
} from '../../store/duck/seasons';
import { getClub, moduleName as clubsModule } from '../../store/duck/clubs';
import Club from './club';

const mapStateToProps = (state) => ({
  seasons: state[seasonsModule].seasons,
  club: state[clubsModule].club,
});

export default connect(mapStateToProps, {
  getSeasons,
  getClub,
})(Club);
